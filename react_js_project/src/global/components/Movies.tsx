import { movie } from "../../api/moviesApi";
import Card from "./Card";

interface Props {
  data: movie[];
}

function Movies({ data }: Props) {
  return (
    <div className="flex flex-1 justify-center items-center">
      {data.map((movie) => (
        <Card item={movie} />
      ))}
    </div>
  );
}

export default Movies;
