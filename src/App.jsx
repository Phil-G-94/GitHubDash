import { getRepos } from "./data/data";
import RepoCard from "./components/UI/RepoCard";

// await repo data
const repos = await getRepos();

// sort in descending order
repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

const totalRepos = repos.length;

// slice top six - based on most recently updated
const topSixRepos = repos.slice(0, 6);

// slice last updated - out of top six
const recentlyUpdatedRepo = topSixRepos.slice(0, 1)[0];

const recentlyUpdatedRepoDate = new Date(
    recentlyUpdatedRepo.updated_at
).toLocaleDateString();

// repo size in KB
const repoSizeInKB = repos.reduce((sum, repo) => sum + repo.size, 0);

// convert to MB and fix to two decimal places
const repoSizeInMB = (repoSizeInKB / 1024).toFixed(2) + " " + "MB";

function App() {
    return (
        <>
            <h1 className="text-red-500 text-center">GitHubDash</h1>

            {/* */}
            <h2 className="text-red-500 text-center">
                Repositories Overview
            </h2>
            <section className="flex justify-center gap-2">
                <div>
                    <h3>Total Repositories:</h3>
                    <p>{`${totalRepos}`}</p>
                </div>
                <div>
                    <h3>Total Size:</h3>
                    <p>{`${repoSizeInMB}`}</p>
                </div>
                <div>
                    <h3>Recently Updated:</h3>
                    <p>{`${recentlyUpdatedRepo.name}`}</p>
                </div>
                <div>
                    <h3>Updated At:</h3>
                    <p>{`${recentlyUpdatedRepoDate}`}</p>
                </div>
            </section>
            {/* */}

            {/* */}
            <h2 className="text-red-500 text-center">
                Languages Used
            </h2>
            <section>
                {/* PIE CHART GOES HERE */}
                <p className="text-center">
                    This section should contain a pie chart of all the
                    languages used in my repos. To be built...
                </p>
            </section>

            {/* */}

            {/* */}
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
            {/* */}

            {/* */}
            <h2 className="text-red-500 text-center"> Top Repos </h2>

            <section className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4">
                    {topSixRepos.map((repo) => {
                        return (
                            <RepoCard
                                key={repo.node_id}
                                repo={repo}
                            />
                        );
                    })}
                </div>
            </section>
            {/* */}
        </>
    );
}

export default App;
