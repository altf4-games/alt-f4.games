const Quote = ({ text, author, link }) => {
  return (
    <div className="card bg-dark text-white">
      <div className="card-body p-3">
        <h5 className="card-title quote-text">{`"${text}"`}</h5>
        <p className="card-text quote-author">{`~ ${author}`}</p>
        <a href={link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default Quote;