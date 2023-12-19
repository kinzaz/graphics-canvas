import { chart } from "./chart";
import { getChartData } from "./data";
import "./styles.scss";

const canvas = document.getElementById("chart");
const { init } = chart(canvas, getChartData());
init();
