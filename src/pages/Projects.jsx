import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Fetch repositories data from GitHub API or your backend
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/altf4-games/repos'); // Replace {username} with the GitHub username
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
      <h2 className="mb-4">GitHub Repositories</h2>
      <div className="row">
        {repositories.map((repo) => (
            <ProjectCard repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
