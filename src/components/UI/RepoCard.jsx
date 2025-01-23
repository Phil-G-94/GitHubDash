import { CloudSync } from "iconoir-react";
import PropTypes from "prop-types";

function RepoCard({ repo }) {
    const updatedAt = new Date(repo.updated_at).toLocaleDateString();

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black block bg-white rounded-md shadow-md p-3 hover:-translate-y-2"
        >
            <span className="grid grid-cols-1  gap-4">
                <p className="text-red-600 font-semibold">
                    {repo.name}
                </p>
                <p className="text-sm">
                    {!repo.description && "No description provided"}
                    {repo.description}
                </p>
                <span className="flex flex-row gap-2">
                    <CloudSync width="1em" height="1em" />
                    <p className="text-xs text-gray-600 font-medium">
                        Updated {updatedAt}
                    </p>
                </span>
            </span>
        </a>
    );
}

RepoCard.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoCard;
