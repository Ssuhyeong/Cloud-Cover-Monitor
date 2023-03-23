# SW중심대학 산학협력프로젝트 | Cloud-Cover-Monitor

**1. 퍼블릭 클라우드 서비스의 실 성능 비교 평가**

- Amazon Web Services ( AWS )
- Microsoft Azure
- Google Cloud ( GCP ) ( + ) 국내 네이버 클라우드
- 유사 스펙과 비용을 가진 인스턴스 / 서비스를 대상으로 여러 테스트 응용 및 벤치마크 프로그램 실행 및 결과 분석

### **2. 퍼블릭 클라우드 서비스 성능 모니터링 시스템 구현**

### **3. 구축하려는 서비스에 적합한 클라우드 벤더 / 인스턴스 / 서비스 추천 시스템 구현**

- 가격 / 성능 측면에서 추천
- 예산 등의 제약 고려

### 개발 형태

---

- 웹 사이트 전체

### 개발기간

---

2022.08-12 (4개월)

### 개발 범위

---

- 웹 사이트 : 인프라/백엔드/프론트엔드

### 프로젝트 내용

---

- 현재 점유율이 높은 3 Big 클라우드 플랫폼과 국내 네이버 클라우드의 퍼블릭 클라우드 서비스의 실 성능 평가 및 그래프를 통한 시각화를 통해 사용자들에게 정보를 제공

### 주요 기능

---

- **회원 관리** - 가입된 회원만 접근이 가능하도록 JWT를 활용하여 접근 제한 설정
- **업로드** - 사용자가 테스트를 하려는 파일을 업로드
- 테스트 - 부하테스트 툴을 활용하여 사용자의 파일을 각 클라우드 인스턴스에 전송 및 테스트 후 관련 정보를 반환
- 시각화 - 그래프를 활용하여 데이터를 시각화, 사용자가 확인하여 클라우드 플랫폼 선택에 도움을 줌

## 기술 스택

---

**Design**

- Figma

**Front-End**

- Javascript, React JS, Jquery, Material UI

**Back-End**

- Node.js
- MySQL
- Express.js

**Infra**

- aws EC2, Azure VM, GCP VM, Naver cloud VM

**Collaboration**

- git

**Library**

- wrk ( 부하테스트 툴 ), paramiko ( ssh 원격 접속 라이브러리 ), scp ( 파일전송 ), pythonShell ( nodejs에서 python에 데이터 전송 및 반환 ), jwt ( 사용자 토큰 < 보안 > )

# 1차발표 : [IT융복합종합설계_손수형_1차발표.pdf](https://github.com/Ssuhyeong/Cloud-Cover-Monitor/files/9826486/IT._._1.pdf)


# 최종발표

![Slide 16_9 - 97](https://user-images.githubusercontent.com/73628071/227087738-6e0904cd-675f-46e4-891e-633f4ac899b5.png)
![Slide 16_9 - 105](https://user-images.githubusercontent.com/73628071/227087782-ed5a1ba9-d903-4e17-b376-365bfa4f6aaf.png)
![Slide 16_9 - 6](https://user-images.githubusercontent.com/73628071/227087884-74ffe16c-9cab-45cb-8cf6-1351f9693140.png)
![Slide 16_9 - 30](https://user-images.githubusercontent.com/73628071/227088525-db5e8b8c-6247-4374-8f57-120cd3859743.png)
![Slide 16_9 - 101](https://user-images.githubusercontent.com/73628071/227088542-94e44454-099d-414e-a025-1f09ecb039c8.png)
![Slide 16_9 - 98](https://user-images.githubusercontent.com/73628071/227088560-d661a042-1e09-4ad9-b588-c7e179e6fe3f.png)
![Slide 16_9 - 110](https://user-images.githubusercontent.com/73628071/227088590-e63ec7d0-161f-4d78-acf3-03d4e8e19280.png)
![Slide 16_9 - 78](https://user-images.githubusercontent.com/73628071/227088613-e9ed5d75-5616-4c73-a3c3-9ea7ee6bdb13.png)
![Slide 16_9 - 3](https://user-images.githubusercontent.com/73628071/227088629-d5f4f1d2-4539-4a14-8875-d9aaecee2fc1.png)
![Slide 16_9 - 107](https://user-images.githubusercontent.com/73628071/227088652-8f848414-2e52-4214-828e-1ba17f5f8390.png)
![Slide 16_9 - 106](https://user-images.githubusercontent.com/73628071/227088660-0a08bf89-02f7-4b06-bdd0-4a57f9adff21.png)
![Slide 16_9 - 109](https://user-images.githubusercontent.com/73628071/227088672-80e30c4e-93b3-4ec2-ab1b-cd37f3ba376d.png)
![Slide 16_9 - 108](https://user-images.githubusercontent.com/73628071/227088689-6a79f5c0-6237-45d6-be83-a3efb4dd799a.png)
![Slide 16_9 - 85](https://user-images.githubusercontent.com/73628071/227088718-6690ad5d-1561-4156-aafa-2b5b8f929027.png)
![Slide 16_9 - 79](https://user-images.githubusercontent.com/73628071/227089180-cc39bc3d-0549-4ba4-803f-21fffb5577c5.png)
![Slide 16_9 - 86](https://user-images.githubusercontent.com/73628071/227089216-984ec719-3512-41b0-aea3-edfb85285cd5.png)
![Slide 16_9 - 87](https://user-images.githubusercontent.com/73628071/227089240-10eb796e-f850-4ed3-b55f-27a0fa913f10.png)
![Slide 16_9 - 112](https://user-images.githubusercontent.com/73628071/227089244-16f27761-1799-43e7-be1c-dad9d84c750a.png)
![Slide 16_9 - 80](https://user-images.githubusercontent.com/73628071/227089267-303632e7-2fb1-499c-8c35-7de7a8f64fec.png)
![Slide 16_9 - 88](https://user-images.githubusercontent.com/73628071/227089278-b4bb26a3-4e42-4019-be25-85726f91dfb3.png)
![Slide 16_9 - 89](https://user-images.githubusercontent.com/73628071/227089297-db680456-b80f-4fff-bf7a-2f58c9e79fed.png)
![Slide 16_9 - 90](https://user-images.githubusercontent.com/73628071/227089335-5424d186-9500-4e2b-8343-76114d728d6b.png)
![Slide 16_9 - 91](https://user-images.githubusercontent.com/73628071/227089354-263d91fc-7df4-495d-88d7-46fe32eaf9b8.png)
![Slide 16_9 - 74](https://user-images.githubusercontent.com/73628071/227089372-7d09765e-8532-46d5-bfe5-65bfd5a94dcd.png)
![Slide 16_9 - 26](https://user-images.githubusercontent.com/73628071/227089390-7d3625d4-883c-4483-933d-fe384ecc0d55.png)
![Slide 16_9 - 113](https://user-images.githubusercontent.com/73628071/227089408-0637be61-9a67-489e-9267-14e000298385.png)
![Slide 16_9 - 4](https://user-images.githubusercontent.com/73628071/227089552-ae94e0b7-6b39-4b22-a180-6cf669305cc3.png)
![Slide 16_9 - 114](https://user-images.githubusercontent.com/73628071/227089565-f4b6dadc-1cec-48ac-a3a6-ac767f78d93a.png)
![Slide 16_9 - 115](https://user-images.githubusercontent.com/73628071/227089569-5b7770bb-4cc6-46b9-baa1-e3fff1b26897.png)
![Slide 16_9 - 116](https://user-images.githubusercontent.com/73628071/227089582-9bf6627c-5226-4535-97e0-64100c46b6cd.png)
![Slide 16_9 - 117](https://user-images.githubusercontent.com/73628071/227089599-3c92ac16-98f1-4d08-8dee-d3717ff8c81c.png)
![Slide 16_9 - 104](https://user-images.githubusercontent.com/73628071/227089609-5c1840a4-fe81-4d24-8b1c-f5f8aedae147.png)






