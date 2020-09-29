import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["PC", "スマホ"],
  datasets: [
    {
      data: [53.3, 46.7],
      backgroundColor: ["#4169e1", "#ff1493"],
      hoverBackgroundColor: ["#36A2E8", "#FF6384"],
      borderColor: ["transparent", "transparent"],
    },
  ],
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <h2>アクセス端末（平均）</h2>
      <Doughnut data={data} />

      <br />
      <div>
        【説明】PCとスマホの割合は同じであり、双方からのアプローチは有効
      </div>
    </div>
  );
};

export default PiePlot;
