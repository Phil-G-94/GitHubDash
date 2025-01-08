import { getCommitTimeline } from "../../data/data";

const commitEvents = await getCommitTimeline();

console.log(commitEvents);

function CommitChart() {
    return (
        <>
            <h2 className="text-red-500 text-center">
                Commit Timeline (Year)
            </h2>
            <section>
                {/* GRAPH CHART GOES HERE */}{" "}
                <p className="text-center">
                    This section should contain a graph chart of
                    yearly or monthly commits
                </p>
            </section>
        </>
    );
}

export default CommitChart;
