import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxi = Math.max(...dataPointsArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxi}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
