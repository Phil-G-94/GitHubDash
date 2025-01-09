import PropTypes from "prop-types";

function RepoCard({ repo }) {
    const updatedAt = new Date(repo.updated_at).toLocaleDateString();

    console.log(repo);

    return (
        <div className="text-black rounded-md shadow-md p-3">
            <p>{repo.name}</p>
            <p>Updated {updatedAt}</p>
        </div>
    );
}

RepoCard.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoCard;
