import {
    totalRepos,
    repoSizeInMB,
    recentlyUpdatedRepo,
    recentlyUpdatedRepoDate,
} from "../../data/data";

function ReposOverview() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Repositories Overview
            </h2>
            <section className="bg-white rounded-md m-2 p-4 w-max">
                <article className="flex gap-5">
                    <div>
                        <p className="text-lg font-semibold">
                            Total Repositories:
                        </p>
                        <p>{`${totalRepos}`}</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">
                            Total Size:
                        </p>
                        <p>{`${repoSizeInMB}`}</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">
                            Recently Updated:
                        </p>
                        <p>{`${recentlyUpdatedRepo.name}`}</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">
                            Updated At:
                        </p>
                        <p>{`${recentlyUpdatedRepoDate}`}</p>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default ReposOverview;
