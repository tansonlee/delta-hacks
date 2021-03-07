import React from "react";
import "./Chart.css";
import { Line } from "react-chartjs-2";

function Chart({
	data: { title, x_axis, y_axis, point_label, y_label, x_label },
}) {
	return (
		<div className="chart-wrapper">
			<h2 className="chart-title">{title}</h2>
			<Line
				className="chart"
				data={{
					labels: x_axis,
					datasets: [
						{
							data: y_axis,
							label: point_label,
							borderColor: "rgb(0, 0, 255)",
							backgroundColor: "rgba(0, 0, 255, 0.2)",
							fill: true,
							pointRadius: 2,
							pointHitRadius: 10,
						},
					],
				}}
				options={{
					responsive: true,

					scales: {
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: x_label,
								},
								ticks: {
									autoSkip: true,
									maxTicksLimit: 20,
								},
							},
						],
						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: y_label,
								},
								ticks: {
									autoSkip: true,
									maxTicksLimit: 20,
								},
							},
						],
					},
					legend: {
						display: false,
						// labels: {
						// 	fontColor: "rgba(255, 255, 255, 0.9)",
						// 	fontSize: 16,
						// },
					},
				}}
			/>
		</div>
	);
}

export default Chart;
