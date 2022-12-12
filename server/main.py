import re
# import subprocess
import paramiko
import json
import sys
from scp import SCPClient, SCPException
import boto3

instance = 'i-04fae26b7efeb20b8'

AWS_ACCESS_KEY_ID = 'AKIA4K552KIF377IED7D'
AWS_SECRET_ACCESS_KEY = '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'
AWS_DEFAULT_REGION = 'ap-northeast-2'

client = boto3.client('ec2', aws_access_key_id=AWS_ACCESS_KEY_ID,
                      aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
                      region_name=AWS_DEFAULT_REGION)

def wrk_data(wrk_output):
    return str(wrk_output.get('lat_avg')) + ',' + str(wrk_output.get('lat_stdev')) + ',' + str(
        wrk_output.get('lat_max')) + ',' + str(wrk_output.get('req_avg')) + ',' + str(
        wrk_output.get('req_stdev')) + ',' + str(wrk_output.get('req_max')) + ',' + str(
        wrk_output.get('tot_requests')) + ',' + str(wrk_output.get('tot_duration')) + ',' + str(
        wrk_output.get('read')) + ',' + str(wrk_output.get('err_connect')) + ',' + str(
        wrk_output.get('err_read')) + ',' + str(wrk_output.get('err_write')) + ',' + str(
        wrk_output.get('err_timeout')) + ',' + str(wrk_output.get('req_sec_tot')) + ',' + str(
        wrk_output.get('read_tot'))


def get_bytes(size_str):
    x = re.search("^(\d+\.*\d*)(\w+)$", size_str)
    if x is not None:
        size = float(x.group(1))
        suffix = (x.group(2)).lower()
    else:
        return size_str

    if suffix == 'b':
        return size
    elif suffix == 'kb' or suffix == 'kib':
        return size * 1024
    elif suffix == 'mb' or suffix == 'mib':
        return size * 1024 ** 2
    elif suffix == 'gb' or suffix == 'gib':
        return size * 1024 ** 3
    elif suffix == 'tb' or suffix == 'tib':
        return size * 1024 ** 3
    elif suffix == 'pb' or suffix == 'pib':
        return size * 1024 ** 4
    return False


def get_number(number_str):
    x = re.search("^(\d+\.*\d*)(\w*)$", number_str)
    if x is not None:
        size = float(x.group(1))
        suffix = (x.group(2)).lower()
    else:
        return number_str

    if suffix == 'k':
        return size * 1000
    elif suffix == 'm':
        return size * 1000 ** 2
    elif suffix == 'g':
        return size * 1000 ** 3
    elif suffix == 't':
        return size * 1000 ** 4
    elif suffix == 'p':
        return size * 1000 ** 5
    else:
        return size

    return False


def get_ms(time_str):
    x = re.search("^(\d+\.*\d*)(\w*)$", time_str)
    if x is not None:
        size = float(x.group(1))
        suffix = (x.group(2)).lower()
    else:
        return time_str

    if suffix == 'us':
        return size / 1000
    elif suffix == 'ms':
        return size
    elif suffix == 's':
        return size * 1000
    elif suffix == 'm':
        return size * 1000 * 60
    elif suffix == 'h':
        return size * 1000 * 60 * 60
    else:
        return size

    return False


def parse_wrk_output(wrk_output):
    retval = {}
    for line in wrk_output.splitlines():
        x = re.search("^\s+Latency\s+(\d+\.\d+\w*)\s+(\d+\.\d+\w*)\s+(\d+\.\d+\w*).*$", line)
        if x is not None:
            retval['lat_avg'] = get_ms(x.group(1))
            retval['lat_stdev'] = get_ms(x.group(2))
            retval['lat_max'] = get_ms(x.group(3))
        x = re.search("^\s+Req/Sec\s+(\d+\.\d+\w*)\s+(\d+\.\d+\w*)\s+(\d+\.\d+\w*).*$", line)
        if x is not None:
            retval['req_avg'] = get_number(x.group(1))
            retval['req_stdev'] = get_number(x.group(2))
            retval['req_max'] = get_number(x.group(3))
        x = re.search("^\s+(\d+)\ requests in (\d+\.\d+\w*)\,\ (\d+\.\d+\w*)\ read.*$", line)
        if x is not None:
            retval['tot_requests'] = get_number(x.group(1))
            retval['tot_duration'] = get_ms(x.group(2))
            retval['read'] = get_bytes(x.group(3))
        x = re.search("^Requests\/sec\:\s+(\d+\.*\d*).*$", line)
        if x is not None:
            retval['req_sec_tot'] = get_number(x.group(1))
        x = re.search("^Transfer\/sec\:\s+(\d+\.*\d*\w+).*$", line)
        if x is not None:
            retval['read_tot'] = get_bytes(x.group(1))
        x = re.search(
            "^\s+Socket errors:\ connect (\d+\w*)\,\ read (\d+\w*)\,\ write\ (\d+\w*)\,\ timeout\ (\d+\w*).*$", line)
        if x is not None:
            retval['err_connect'] = get_number(x.group(1))
            retval['err_read'] = get_number(x.group(2))
            retval['err_write'] = get_number(x.group(3))
            retval['err_timeout'] = get_number(x.group(4))
    if 'err_connect' not in retval:
        retval['err_connect'] = 0
    if 'err_read' not in retval:
        retval['err_read'] = 0
    if 'err_write' not in retval:
        retval['err_write'] = 0
    if 'err_timeout' not in retval:
        retval['err_timeout'] = 0
    return retval


def listToString(str_list):
    result = ""
    for s in str_list:
        result += s + " "
    return result.strip()

class SSHManager:
    def __init__(self):
        self.ssh_client = None

    def create_ssh_client(self, hostname, port , username, key_filename):
        if self.ssh_client is None:
            self.ssh_client = paramiko.SSHClient()
            self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.ssh_client.connect(hostname, port=port, username=username, key_filename=key_filename)
        else:
            print("SSH client session exist")

    def create_ssh_client_pw(self, hostname, port , username, password):
        if self.ssh_client is None:
            self.ssh_client = paramiko.SSHClient()
            self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.ssh_client.connect(hostname, port=port, username=username, password=password)
        else:
            print("SSH client session exist")

    def close_ssh_client(self):
        self.ssh_client.close()

    def send_file(self, local_path, remote_path):
        try:
            with SCPClient(self.ssh_client.get_transport()) as scp:
                scp.put(local_path, remote_path, preserve_times=True)
        except SCPException:
            raise SCPException.message

    def get_file(self, remote_path, local_path):
        try:
            with SCPClient(self.ssh_client.get_transport()) as scp:
                scp.get(remote_path, local_path)
        except SCPException:
            raise SCPException.message

    def send_command(self, command):
        stdin, stdout, stderr = self.ssh_client.exec_command(command)
        output = []
        for line in stdout:
            output.append(line)
        output = listToString(output)
        return output

def aws_ai_execute():
    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("15.165.105.217", "22" ,"ubuntu", "./cloud_cover_monitor.pem")  # 세션생성
    output = ssh_manager.send_command('cat examples/mnist/Data.txt')
    ssh_manager.close_ssh_client()  # 세션종료

    return output

def azure_ai_execute():
    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("4.230.130.68", "22", "tngud124", "azure-cloud-cover-monitor.pem")  # 세션생성
    output = ssh_manager.send_command('cat examples/mnist/Data.txt')
    ssh_manager.close_ssh_client()

    return output

def gcp_ai_execute():
    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("34.64.152.125", "22", "tngud124", "cloud-gcp-key")  # 세션생성
    output = ssh_manager.send_command('cat examples/mnist/Data.txt')
    ssh_manager.close_ssh_client()  # 세션종료

    return output

# def aws_execute_wrk(url):
#     cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

#     client.stop_instances(InstanceIds=[instance])
#     waiter = client.get_waiter('instance_stopped')
#     waiter.wait(InstanceIds=[instance])

#     client.modify_instance_attribute(InstanceId=instance, Attribute='instanceType', Value='t2.nano')
#     client.start_instances(InstanceIds=[instance])

#     ssh_manager = SSHManager()
#     ssh_manager.create_ssh_client("43.201.126.192", "22" ,"ubuntu", "./Cloud Cover Monitor.pem")  # 세션생성
#     output = ssh_manager.send_command(cmd)
#     ssh_manager.close_ssh_client()  # 세션종료

#     return output

def aws_execute_wrk_nano(url):
    cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

    client.stop_instances(InstanceIds=[instance])
    waiter = client.get_waiter('instance_stopped')
    waiter.wait(InstanceIds=[instance])

    client.modify_instance_attribute(InstanceId=instance, Attribute='instanceType', Value='t2.nano')
    client.start_instances(InstanceIds=[instance])

    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("43.201.126.192", "22" ,"ubuntu", "./Cloud Cover Monitor.pem")  # 세션생성
    output = ssh_manager.send_command(cmd)
    ssh_manager.close_ssh_client()  # 세션종료

    return output

def aws_execute_wrk_micro(url):
    cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

    # client.stop_instances(InstanceIds=[instance])
    # waiter = client.get_waiter('instance_stopped')
    # waiter.wait(InstanceIds=[instance])

    # client.modify_instance_attribute(InstanceId=instance, Attribute='instanceType', Value='t2.micro')
    # client.start_instances(InstanceIds=[instance])

    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("15.165.105.217", "22", "ubuntu", "./cloud_cover_monitor.pem")  # 세션생성
    output = ssh_manager.send_command(cmd)
    ssh_manager.close_ssh_client()  # 세션종료

    return output

def azure_execute_wrk(url):
    cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("4.230.130.68", "22", "tngud124", "azure-cloud-cover-monitor.pem")  # 세션생성
    output = ssh_manager.send_command(cmd)
    ssh_manager.close_ssh_client()  # 세션종료

    return output

def gcp_execute_wrk(url):
    cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("34.64.152.125", "22", "tngud124", "cloud-gcp-key")  # 세션생성
    output = ssh_manager.send_command(cmd)
    ssh_manager.close_ssh_client()  # 세션종료

    return output

def ncp_execute_wrk(url):
    cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client_pw("27.96.129.100", "1204", "root", "G3U$%bN*ffTRu")  # 세션생성
    output = ssh_manager.send_command(cmd)
    ssh_manager.close_ssh_client()  # 세션종료

    return output



def main():
    # AWS wrk 부하테스트 결과 ( JSON )
    # aws_output = aws_execute_wrk_nano(sys.argv[1])
    # aws_output_dict = parse_wrk_output(aws_output)
    # aws_output_json = json.dumps(aws_output_dict)
    # print(aws_output_json)
    
    # aws_output = aws_execute_wrk_micro(sys.argv[1])

    if sys.argv[1] == 'aws' :
        aws_output = aws_execute_wrk_micro('http://15.165.105.217:3001/')
        aws_output_dict = parse_wrk_output(aws_output)
        aws_output_json = json.dumps(aws_output_dict)
        print(aws_output_json)

    # GCP wrk 부하테스트 결과 ( JSON )
    if sys.argv[1] == 'gcp' : 
        gcp_output = gcp_execute_wrk('http://15.165.105.217:3001/')
        gcp_output_dict = parse_wrk_output(gcp_output)
        gcp_output_json = json.dumps(gcp_output_dict)
        print(gcp_output_json)

    # Azure wrk 부하테스트 결과 ( JSON )
    if sys.argv[1] == 'azure' :
        azure_output = azure_execute_wrk('http://4.230.130.68:3001/')
        azure_output_dict = parse_wrk_output(azure_output)
        azure_output_json = json.dumps(azure_output_dict)
        print(azure_output_json)

    # NCloud wrk 부하테스트 결과 ( JSON )
    if sys.argv[1] == 'ncp' :
        ncp_output = ncp_execute_wrk('http://15.165.105.217:3001/')
        ncp_output_dict = parse_wrk_output(ncp_output)
        ncp_output_json = json.dumps(ncp_output_dict)
        print(ncp_output_json)

    # 딥러닝 트레이닝 시간 결과
    if sys.argv[1] == 'ai':
        aws_ai_data = aws_ai_execute()
        azure_ai_data = azure_ai_execute()
        gcp_ai_data = gcp_ai_execute()

        result = {
            "aws_ai_data" : aws_ai_data,
            "azure_ai_data" : azure_ai_data,
            "gcp_ai_data" : gcp_ai_data
        }

        print(json.dumps(result))

if __name__ == '__main__':
    main()