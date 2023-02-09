import React from "react";
import { Bar } from "react-chartjs-2";

const GroupedBarChart = () => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'COVID Effects vs. Areas of Life',
            },
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Academic Term'
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
    const labels = ["Academics", "Dating Life", "Mental Health", "Social Life", "Co-op", "time management", "Travel Plans", "Family Life"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Positive',
                stack: 'Stack 0',
                data: [0.8135593220338978, 0.18644067796610173, 0.2372881355932204, 0.13559322033898305, 0.15254237288135594, 0.01694915254237288, 0.03389830508474576, 0.01694915254237288],
            },
            {
                label: 'Negative',
                stack: 'Stack 1',
                data: [0.4423076923076926, 0.5000000000000004, 0.7211538461538458, 0.8076923076923068, 0.6826923076923073, 0.0, 0.7211538461538456, 0.0],
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
    );
};

export default GroupedBarChart;