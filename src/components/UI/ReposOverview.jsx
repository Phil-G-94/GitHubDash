import {
    totalRepos,
    repoSizeInMB,
    recentlyUpdatedRepo,
    recentlyUpdatedRepoDate,
} from "../../data/data";
import { Repository } from "iconoir-react";

function ReposOverview() {
    return (
        <section className="bg-eggshell rounded-md w-max m-0">
            <h2 className="text-delft-blue font-bold text-center text-lg">
                Repositories Overview
            </h2>

            <span className="flex justify-end">
                <Repository />
            </span>

            <article className="text-delft-blue grid grid-cols-2 place-content-center pl-2 pr-2 gap-6 md:grid-cols-4 ">
                <span>
                    <p className="text-lg font-semibold">Total Repositories:</p>
                    <p>{`${totalRepos}`}</p>
                </span>
                <span>
                    <p className="text-lg font-semibold">Total Size:</p>
                    <p>{`${repoSizeInMB}`}</p>
                </span>
                <span>
                    <p className="text-lg font-semibold">Recently Updated:</p>
                    <p>{`${recentlyUpdatedRepo.name}`}</p>
                </span>
                <span>
                    <p className="text-lg font-semibold">Updated At:</p>
                    <p>{`${recentlyUpdatedRepoDate}`}</p>
                </span>
            </article>
        </section>
    );
}

export default ReposOverview;
