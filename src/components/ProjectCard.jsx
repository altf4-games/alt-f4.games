const ProjectCard = ({repo}) => {
    return (
        <div className="col-md-4 mb-4" key={repo.id}>
            <div className="card bg-dark">
              <div className="card-body">
                <h5 className="card-title text-white">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h5>
                <p className="card-text text-white">{repo.description}</p>
                <p className="card-text text-white-50"><strong>Language:</strong> {repo.language}</p>
              </div>
            </div>
        </div>
    );
};

export default ProjectCard;