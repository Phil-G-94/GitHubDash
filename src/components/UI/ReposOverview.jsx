import {
    totalRepos,
    repoSizeInMB,
    recentlyUpdatedRepo,
    recentlyUpdatedRepoDate,
} from "../../data/data";
import { Repository } from "iconoir-react";

function ReposOverview() {
    return (
        <section className="bg-white rounded-md w-max">
            <h2 className="text-red-700 font-bold text-center text-lg">
                Repositories Overview
            </h2>

            <span className="flex justify-end">
                <Repository />
            </span>

            <article className="grid grid-cols-2 place-content-center pl-2 pr-2 gap-6 md:grid-cols-4 ">
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
    );
}

export default ReposOverview;
