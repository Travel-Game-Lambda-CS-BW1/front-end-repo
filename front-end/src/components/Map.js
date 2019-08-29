import React from "react";
import { Graph } from "@vx/network";

const Map = ({ width, height, rooms }) => {
	console.log("Map.js rooms", rooms);

	const nodes = [{ x: 350, y: 750 }, { x: 350, y: 400 }, { x: 350, y: 100 }];
	const links = [
		{ source: nodes[0], target: nodes[1] },
		{ source: nodes[1], target: nodes[2] }
	];

	const graph = {
		nodes,
		links
	};

	return (
		<svg width={width} height={height}>
			<rect width={width} height={height} />
			<Graph graph={graph} />
		</svg>
	);
};
export default Map;
