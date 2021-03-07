// 1. import the ```Chart.js``` file into wherever you want to make a chart
import Chart from "../../Chart/Chart";

// 2. make an object that describes your data that matches
myData = {
	title: "the title of the chart",
	x_label: "The label for the x axis",
	y_label: "the label for the y axis",
	x_axis: [x1, x2, x3, x4, x5, ...], // data for the x
	y_axis: [y1, y2, y3, y4, y5, ...], // data for the y
}

// for example,

plantData = {
	title: "My Plant Growth",
	x_label: "Date in 2021",
	y_label: "The height of my plant (in cm)",
	x_axis: ["jan 1", "jan 5", "jan 10", "jan 15", "jan 20"], // data for the x
	y_axis: [8, 13, 16, 18, 20], // data for the y
}

// 3. make the plot by inserting

<Chart data={plantData} />
