import Quote from "../components/Quote";

const GameReviews = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">GAME REVIEWS</h2>
      <div >
        <Quote
          text="I liked the detective thing, that was ambitious. I liked it, it was good."
          author="Markiplier"
          link="https://youtu.be/XKDciUz-DpE?feature=shared&t=1565"
        />
        <br></br>
        <Quote
          text="That was actually a cool game"
          author="KubzScouts"
          link="https://youtu.be/ShureCM5Z7s?feature=shared&t=1358"
        />
      </div>
    </div>
  );
};

export default GameReviews;