import React from "react";
import Chart from "../../Chart/Chart";

function CasesPage() {
	const randomData = {
		x_axis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		y_axis: [1, 4, 9, 16, 25, 36, 49, 64, 81],
		x_label: "time",
		y_label: "height",
		title: "my plant",
	};
	return (
		<div>
			This is our cases page
			<Chart data={randomData} />
		</div>
	);
}

export default CasesPage;
