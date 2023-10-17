import React from "react";
import { Chart } from "react-google-charts";
export default function Bar() {
  const data = [
    ["Mois", "Entrées", "Sorties"],
    ["Mai", 1000, 400],
    ["Juin", 1170, 460],
    ["Juillet", 660, 1120],
    ["Aout", 1030, 540],
  ];

  const options = {
    chart: {
      title: "Statistique de l'entreprise",
      subtitle: "Entrées et sorties des produits durant ce mois",
    },
  };
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
