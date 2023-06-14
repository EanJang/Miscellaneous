<template>
  <div id="wrapper">
    <div id="chart-line">
      <apexchart
        type="line"
        height="160"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <div id="chart-line2">
      <apexchart
        type="line"
        height="300"
        :options="chartOptionsLine2"
        :series="seriesLine2"
      ></apexchart>
    </div>
    <div id="chart-area">
      <apexchart
        type="area"
        height="300"
        :options="chartOptionsArea"
        :series="seriesArea"
      ></apexchart>
    </div>
    <div class="columns">
      <div id="chart-small">
        <apexchart
          type="area"
          height="500"
          width="1000"
          :options="chartOptionsSmall"
          :series="seriesSmall"
        ></apexchart>
      </div>
      <div id="chart-small2">
        <apexchart
          type="area"
          height="500"
          width="1000"
          :options="chartOptionsSmall2"
          :series="seriesSmall2"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApexCharts from "apexcharts";
import { onMounted } from "vue";

const generateDayWiseTimeSeries = (
  baseval: number,
  count: number,
  yrange: any
) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};
const series = [
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
];
const chartOptions = {
  chart: {
    id: "fb",
    group: "social",
    type: "line",
    height: 160,
  },
  colors: ["#008FFB"],
};
const seriesLine2 = [
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
      min: 10,
      max: 30,
    }),
  },
];
const chartOptionsLine2 = {
  chart: {
    id: "tw",
    group: "social",
    type: "line",
    height: 160,
  },
  colors: ["#546E7A"],
};
const seriesArea = [
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
];
const chartOptionsArea = {
  chart: {
    id: "yt",
    group: "social",
    type: "area",
    height: 160,
  },
  colors: ["#00E396"],
};
const seriesSmall = [
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
];
const chartOptionsSmall = {
  chart: {
    id: "ig",
    group: "social",
    type: "area",
    height: 160,
    width: 300,
  },
  colors: ["#008FFB"],
};
const seriesSmall2 = [
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
];
const chartOptionsSmall2 = {
  chart: {
    id: "li",
    group: "social",
    type: "area",
    height: 160,
    width: 300,
  },
  colors: ["#546E7A"],
};

// onMounted(() => {});
</script>

<style lang="scss" scoped></style>
