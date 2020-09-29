import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: [
    "【72％OFF】 鉄腕ミートボール 15g",
    "【81％OFF】 ラビオリ 1kg",
    "【71％OFF】 ベジタリアン向け　焼売 約14g",
    "【62％OFF】 尾付開きえび（チリソースキット） 13g",
    "【79％OFF】 ベジタリアン向け　餃子（焼調理済） 約17g",
    "【22％OFF】 コーンポタージュフライ 30g",
    "【40％OFF】 てづくりランチかき揚げ 60g",
    "【33％OFF】 若鶏の唐揚げ 1㎏",
    "【13％OFF】 北海道産たらこ入りポテトのチーズソース包み揚げ 80g",
    "【48％OFF】 お好み揚げ 約77g",
  ],
  datasets: [
    {
      label: "商品トレンド（ページビュー）",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [14, 12, 10, 10, 8, 8, 7, 6, 6, 6],
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <h2>商品トレンド</h2>
      <HorizontalBar data={data} />

      <br />
      <div>【説明】割引率が高い商品は、閲覧数が多い。</div>
      <br />
    </div>
  );
};

export default BarPlot;
