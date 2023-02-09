import React from "react";
import { Bar } from "react-chartjs-2";

const StackedBarChart = () => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Lecture Attendance by Term vs. Academic Term',
            },
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Areas of Life'
                },
                stacked: true,
            },
            y: {
                title: {
                    display: true,
                    text: '% of Responses'
                },
                ticks: {
                    max: 100,
                    format: {
                        style: 'percent'
                    }
                },
                stacked: true,
            },
        },
    };
    const labels = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Almost never',
                data: [0.009433962264150943, 0.02830188679245283, 0.04716981132075472, 0.02830188679245283, 0.11320754716981132, 0.33962264150943394, 0.3177570093457944, 0.25471698113207547],
            },
            {
                label: 'Occasionally',
                data: [0.03773584905660377, 0.0660377358490566, 0.07547169811320754, 0.09433962264150944, 0.14150943396226415, 0.16037735849056603, 0.14953271028037382, 0.16037735849056603],
            },
            {
                label: 'About half the time',
                data: [0.03773584905660377, 0.0660377358490566, 0.07547169811320754, 0.09433962264150944, 0.14150943396226415, 0.16037735849056603, 0.14953271028037382, 0.16037735849056603],
            },
            {
                label: 'Most of the time',
                data: [0.11320754716981132, 0.19811320754716982, 0.24528301886792453, 0.27358490566037735, 0.2358490566037736, 0.14150943396226415, 0.14953271028037382, 0.24528301886792453],
            },
            {
                label: 'Almost always',
                data: [0.8301886792452831, 0.6886792452830188, 0.6037735849056604, 0.5377358490566038, 0.4528301886792453, 0.22641509433962265, 0.205607476635514, 0.24528301886792453],
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
    );
};

export default StackedBarChart;