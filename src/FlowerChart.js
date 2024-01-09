import React, {useMemo} from "react";
import * as d3 from "d3";

const BAR_PADDING = 0.6;

type CircularBarplotProps = {
    width : number;
    height : number;
    data : {name : number, value : number}[];
};



const FlowerChart = ({
    width,
    height,
    data,
}: CircularBarplotProps) => {
    const innerRadius = 0;
    const outerRadius = 243 / 2;

    const groups = data.sort((a, b) => a.name - b.name).map((d) => d.name);
    const xScale = useMemo(() => {
        return d3
            .scaleBand()
            .domain(groups)
            .range([0, 2 * Math.PI])
            .padding(BAR_PADDING);
    }, [groups]);

    const yScale = useMemo(() => {
        return d3
            .scaleRadial()
            .domain([0, 10])
            .range([innerRadius, outerRadius]);
    }, [data, width, height]);

    //build the shapes
    const arcPathGenerator = d3.arc();
    const allShapes = data.map((group, i) => {
        const path = arcPathGenerator({
            innerRadius : 0,
            outerRadius : yScale(group.value),
            startAngle : (2*Math.PI*i) / data.length,
            endAngle : (2*Math.PI*(i+0.4)) / data.length,
        });

    const barAngle =(2*Math.PI*i) / data.length + xScale.bandwidth() / 2;
    const turnLabelUpsideDown = (barAngle + Math.PI) % (2 * Math.PI) < Math.PI;
    const labelRotation = (barAngle * 180) / Math.PI - 90;
    const labelXTranslation = yScale(group.value) + 10;
    const labelTransform = "rotate(" + labelRotation + "), translate(" + labelXTranslation + ", 0)";


        return (
            <g key={i}>
                <path
                    d={path}
                    opacity={0.7}
                    stroke="#0D47A1"
                    fill="#0D47A1"
                    fillOpacity={0.3}
                    strokeWidth={1}
                    rx={1}
                />
                <g transform={labelTransform}>
                <text
                    textAnchor={turnLabelUpsideDown ? "end" : "start"}
                    alignmentBaseline="middle"
                    fontSize={10}
                    transform={turnLabelUpsideDown ? "rotate(180)" : "rotate(0)"}
                >
                    {group.name}
                </text>
            </g>
            </g>
        );
    });

    return (
            <svg width={width} height={height}>
                <g
                    transform={ "translate(" +  (width / 2) + "," + (height / 2) + ") rotate(-12, 0, 0)"
                    }
                >
                    {allShapes}
                </g>
            </svg>
    );
};

export default FlowerChart;
