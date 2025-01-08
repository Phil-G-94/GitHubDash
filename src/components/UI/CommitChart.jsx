import { commitDates, commitCounts } from "../../data/data";
import {
    Chart as ChartJS,
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
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function CommitChart() {
    return (
        <>
            <h2 className="text-red-500 text-center">
                Commit Timeline (Year)
            </h2>
            <section>
                <p className="text-center">
                    This section should contain a graph chart of
                    yearly or monthly commits
                </p>

                <div className="flex justify-center gap-2">
                    <div className="w-1/3">
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
                </div>
            </section>
        </>
    );
}

export default CommitChart;
