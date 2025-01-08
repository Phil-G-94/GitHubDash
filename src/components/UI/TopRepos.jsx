import { topSixRepos } from "../../data/data";
import RepoCard from "../Layout/RepoCard";

function TopRepos() {
    return (
        <>
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
        </>
    );
}

export default TopRepos;
