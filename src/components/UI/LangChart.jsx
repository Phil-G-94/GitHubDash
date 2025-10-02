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

console.log(languagesUsed); // ["Python", "PHP", "JavaScript", "TypeScript", "HTML"]
console.log(languagesUsedCount); // [7.14, 7.14, 71.43, 7.14, 7.14]

const languageColors = {
    Python: "#3776AB", // Python blue
    PHP: "#777BB4", // PHP purple
    JavaScript: "#F7DF1E", // JS yellow
    TypeScript: "#3178C6", // TS blue
    HTML: "#E34F26", // HTML orange
};

function LangChart() {
    return (
        <section className="bg-eggshell rounded-md w-max">
            <h2 className="text-delft-blue font-bold text-center text-lg">
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
                                    backgroundColor: languagesUsed.map(
                                        (lang) => languageColors[lang]
                                    ),
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: "30%",
                            interaction: {
                                mode: "point",
                                intersect: true,
                            },
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            console.log(tooltipItem);
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
