import React from "react";
import ListItem from "../ListItem";
import { Movie } from "../../types/types";

type ListProps = {
  data: Movie[];
};

const List = (props: ListProps) => {
  const { data } = props;

  return (
    <main className="">
      {data.map((movie) => (
        <ListItem key={movie.id} item={movie} />
      ))}
    </main>
  );
};

export default List;
