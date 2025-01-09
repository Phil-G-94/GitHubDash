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
        <>
            <h2 className="text-red-500 text-center">
                Languages Used
            </h2>
            <section>
                <p className="text-center">
                    This section should contain a pie chart of all the
                    languages used in my repos. To be built...
                </p>

                <div className="flex justify-center">
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
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default LangChart;
