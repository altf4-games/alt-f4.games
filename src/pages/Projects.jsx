import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/altf4-games/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">GITHUB REPOSITORIES</h2>
      <div className="row">
        {repositories.map((repo) => (
            <ProjectCard repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
