const token = import.meta.env.VITE_GH_TOKEN;
const user = import.meta.env.VITE_GH_USER;

const getRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`, {
        headers: {
            Authorization: `token ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch repos.");
    }

    const data = await response.json();

    return data;

};

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

/* */

const getEventData = async (url) => {
    const response = await fetch(url, {
        headers: {
            Authorization: `token ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch event data.");
    }

    const data = await response.json();

    return data;
};

const getCommitTimeline = async () => {

    const url = `https://api.github.com/users/${user}/events`;

    const timeline = {};

    // api pagination
    let page = 1;

    // todays date
    const today = new Date();

    // date thirty days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    while (today > thirtyDaysAgo) {
        const data = await getEventData(`${url}?page=${page}`);

        if (!data || data.length === 0) {
            break;
        }

        for (const event of data) {
            if (event.type === "PushEvent") {
                const date = event.created_at.split("T")[0];

                if (!timeline[date]) {
                    timeline[date] = 0;
                }

                timeline[date] += 1;

                if (new Date(date) < thirtyDaysAgo) {
                    return timeline;
                }
            }
        }

        break;
    }

    return timeline;
};

const commitEvents = await getCommitTimeline();

const commitDates = Object.keys(commitEvents);

const commitCounts = Object.values(commitEvents);

export { totalRepos, topSixRepos, recentlyUpdatedRepo, recentlyUpdatedRepoDate, repoSizeInMB, commitDates, commitCounts, commitEvents };