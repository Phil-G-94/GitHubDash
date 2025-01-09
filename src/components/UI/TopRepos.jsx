import { topSixRepos } from "../../data/data";
import RepoCard from "../Layout/RepoCard";

function TopRepos() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Top Repos
            </h2>

            <section className="bg-white rounded-md m-2 p-4 w-max">
                <article className="flex justify-center">
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
                </article>
            </section>
        </div>
    );
}

export default TopRepos;
