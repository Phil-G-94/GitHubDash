import PropTypes from "prop-types";

function RepoCard({ repo }) {
    const updatedAt = new Date(repo.updated_at).toLocaleDateString();

    console.log(repo);

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black block bg-white rounded-md shadow-md p-3"
        >
            <p className="text-red-600 font-semibold">{repo.name}</p>
            <p className="text-sm">
                {!repo.description && "No description provided"}
                {repo.description}
            </p>
            <p className="text-xs text-gray-600 font-medium">
                Updated {updatedAt}
            </p>
        </a>
    );
}

RepoCard.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoCard;
