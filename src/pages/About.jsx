import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const MarkdownDisplay = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/altf4-games/altf4-games/main/README.md')
      .then(response => response.text())
      .then(data => setMarkdownContent(data))
      .catch(error => console.error('Error fetching Markdown content:', error));
  }, []);

  return (
    <div className="container mt-5 text-start">
      <style>
        {`
          img {
            max-width: 100%;
            height: auto;
          }

          iframe {
            max-width: 100%;
          }
        `}
      </style>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownDisplay;
