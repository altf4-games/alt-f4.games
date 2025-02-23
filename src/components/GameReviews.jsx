import React, { useState } from 'react';
import { Star, Download } from 'lucide-react';

const GameReviews = ({ gameId }) => {
  const [reviews] = useState([
    {
      id: 1,
      author: "Markiplier",
      rating: 5,
      text: "I liked the detective thing, that was ambitious. I liked it, it was good.",
      date: "2022-01-24",
      platform: "YouTube",
      link: "https://youtu.be/XKDciUz-DpE?feature=shared&t=1565"
    },
    {
      id: 2,
      author: "KubzScouts",
      rating: 4.5,
      text: "That was actually a cool game",
      date: "2020-07-5",
      platform: "YouTube",
      link: "https://youtu.be/ShureCM5Z7s?feature=shared&t=1358"
    }
  ]);

  return (
    <>
      <h2 className="text-4xl font-bold mb-8 text-white text-center">Player Reviews</h2>
      <div className="container mx-auto max-w-3xl px-4 py-8 bg-gray-900 rounded-lg shadow-lg mt-8">
        
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-800 pb-6 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{review.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{review.author}</h4>
                    <span className="text-gray-400 text-sm">{review.platform}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-red-500 text-red-500" : "text-gray-600"}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{review.text}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Download size={14} />
                  <span>Watch Review</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameReviews;
