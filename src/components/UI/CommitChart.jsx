import { commitDates, commitCounts } from "../../data/data";
import {
    Chart as ChartJS,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

// reg necessary modules for line chart
ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function CommitChart() {
    return (
        <section className="bg-white rounded-md w-max m-0">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Commit Timeline (Month)
            </h2>
            <article>
                <div>
                    <Chart
                        key={commitDates.length}
                        type="line"
                        data={{
                            labels: commitDates,
                            datasets: [
                                {
                                    label: "Commits",
                                    data: commitCounts,
                                    borderColor: "#ef4444",
                                    backgroundColor:
                                        "rgb(239, 68, 68)",
                                    borderWidth: 2,
                                    tension: 0.3,
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: "top",
                                },
                                tooltip: {
                                    enabled: true,
                                },
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: "Date",
                                    },
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: "Commit count",
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </article>
        </section>
    );
}

export default CommitChart;
