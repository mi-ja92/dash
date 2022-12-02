import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { data } from "./data/database";

function MyCharts() {
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryBar size={5} data={data} x="assignment" y="fun" />
      </VictoryChart>
    </div>
  );
}

export default MyCharts;
