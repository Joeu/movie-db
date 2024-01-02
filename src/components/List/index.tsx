import React from "react";
import ListItem from "../ListItem";
import { MovieBase } from "../../types";

type ListProps = {
  data: MovieBase[];
};

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <main className="list-container">
      {data?.map((movie: any, idx: number) => (
        <ListItem key={movie.id} item={movie} odd={(idx + 1) % 2 !== 0} />
      ))}
    </main>
  );
};

export default List;
