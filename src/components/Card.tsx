interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="max-w-sm w-60 rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={
          imageUrl ??
          "https://thumbs.dreamstime.com/z/clapperboard-silhouette-black-white-icon-design-element-isolated-white-background-clapperboard-silhouette-black-white-276739379.jpg?ct=jpeg"
        }
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
