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
        <div className="flex flex-col items-center">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Languages Used
            </h2>
            <section className="bg-white rounded-md m-2 p-4 w-max">
                <article className="flex justify-center">
                    <div className="w-3/4 min-w-64">
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
        </div>
    );
}

export default LangChart;
