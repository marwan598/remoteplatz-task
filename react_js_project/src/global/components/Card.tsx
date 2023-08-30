import {
  fallbackMoviePoster,
  movie,
  moviePoster500,
} from "../../api/moviesApi";

interface Props {
  item: movie;
}

function Card({ item }: Props) {
  return (
    <div className=" rounded-3xl  mr-10 w-80 h-full mt-20">
      <img
        className="rounded-t-3xl"
        src={moviePoster500(item.poster_path) || fallbackMoviePoster}
        alt=""
      />
      <div className="p-5 bg-neutral-600 rounded-b-3xl ">
        <h5 className="text-md font-bold tracking-tight  text-white">
          {item.title}
        </h5>
      </div>
    </div>
  );
}

export default Card;
