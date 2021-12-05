import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.chartPoints.map(chartPoint => chartPoint.value)
    const totalMaximun = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.chartPoints.map((chartPoint) => (
        <ChartBar
          key={chartPoint.label}
          value={chartPoint.value}
          maxValue={totalMaximun}
          label={chartPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
