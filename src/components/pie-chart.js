import React from "react";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

const PieChart = () => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Depression and Anxiety Cause (N = 33)',
            },
        },
        responsive: true,
    };
    const labels = ["Academics", "Relationships", "Friends", "Co-op", "Job", "Covid", "all of the above", "General anxiety", "Family", "Global warming"];
    const data = {
        labels: labels,
        datasets: [
            {
                data: [15, 6, 3, 2, 2, 1, 1, 1, 1, 1],
            },
        ],
    };

    return (
        <Pie options={options} data={data} />
    );
};
export default PieChart;