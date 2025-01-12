import { topSixRepos } from "../../data/data";
import RepoCard from "./RepoCard.jsx";

function TopRepos() {
    return (
        <section className="p-4 w-max">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Top Repos
            </h2>
            <article>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4">
                    {topSixRepos.map((repo) => {
                        return (
                            <RepoCard
                                key={repo.node_id}
                                repo={repo}
                            />
                        );
                    })}
                </div>
            </article>
        </section>
    );
}

export default TopRepos;
