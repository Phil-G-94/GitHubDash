import { getRepos } from "./data/data";
import RepoCard from "./components/UI/RepoCard";

const repos = await getRepos();

const sortedRepos = repos.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
);

const repoSizeInKB = repos.reduce((sum, repo) => sum + repo.size, 0);

const repoSizeInMB = (repoSizeInKB / 1024).toFixed(2) + " " + "MB";

function App() {
    return (
        <>
            <h1 className="text-red-500 text-center">GitHubDash</h1>

            <h2 className="text-red-500 text-center">
                Repositories Overview
            </h2>

            <div className="flex justify-center">
                <p>Total Size {`${repoSizeInMB}`}</p>
            </div>

            <h2 className="text-red-500 text-center"> Top Repos </h2>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
                    {sortedRepos.map((repo) => {
                        return (
                            <RepoCard
                                key={repo.node_id}
                                repo={repo}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
