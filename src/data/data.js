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

const getEvents = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/events`, {
        headers: {
            Authorization: `token ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch events.");
    }

    const data = await response.json();

    return data;
};



export { getRepos, getEvents };