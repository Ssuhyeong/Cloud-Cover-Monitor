import React, { PureComponent } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class BarGraph extends PureComponent {
  render() {
    return (
      <div className="chart__container">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={this.props.data} margin={{ left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={this.props.name} />
            <YAxis domain={[1000000, 2000000]} />
            <Tooltip />
            <Legend />
            {Object.keys(this.props.data[0]).map((key, index) => {
              if (key !== this.props.name)
                return (
                  <Bar
                    type="monotone"
                    key={index}
                    dataKey={key}
                    fill={this.props.fill[key]}
                    strokeWidth={1}
                  />
                );
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default BarGraph;
