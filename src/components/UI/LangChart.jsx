import { languagesUsed, languagesUsedCount } from "../../data/data";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    DoughnutController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

function LangChart() {
    return (
        <section className="bg-white rounded-md w-max m-0">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Languages Used
            </h2>
            <article>
                <div>
                    <Doughnut
                        data={{
                            labels: languagesUsed,
                            datasets: [
                                {
                                    data: languagesUsedCount,
                                    backgroundColor: [
                                        "#ff5448",
                                        "#ff6c48",
                                    ],
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: "60%",
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: function (
                                            tooltipItem
                                        ) {
                                            return (
                                                tooltipItem.label +
                                                ": " +
                                                tooltipItem.raw +
                                                "%"
                                            );
                                        },
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

export default LangChart;
