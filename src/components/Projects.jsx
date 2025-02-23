import React, { useState, useEffect } from 'react';
import { Star, Download, Github } from 'lucide-react';

const GitHubProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 'altf4-games'; 

  const pinnedRepoIds = [409212250,755409861,906515497,735017663,736546764,878441592];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json'
          }
        });
        const data = await response.json();
        const pinnedRepos = data.filter(repo => pinnedRepoIds.includes(repo.id));
        setRepositories(pinnedRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username, pinnedRepoIds]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div id="projects">
      <h2 className="text-4xl font-bold mb-8 text-white text-center mt-8">Featured Projects</h2>
      <div className="container mx-auto mt-4 px-4">
      {repositories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <div key={repo.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{repo.name}</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{repo.description}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Download size={14} />
                    {repo.forks_count}
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white hover:text-red-500 transition-colors"
                >
                  View Project <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white">No repositories found.</div>
      )}
      {/* Footnote */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Check out other projects on my{' '}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
    </div>
  );
};

export default GitHubProjects;
