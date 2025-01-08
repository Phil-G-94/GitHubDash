import {
    totalRepos,
    repoSizeInMB,
    recentlyUpdatedRepo,
    recentlyUpdatedRepoDate,
} from "../../data/data";

function ReposOverview() {
    return (
        <>
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
        </>
    );
}

export default ReposOverview;
