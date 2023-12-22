import React from "react";
import ListItem from "../ListItem";

type ListProps = {
  data: any;
};

const List = (props: ListProps) => {
  const { data } = props;

  return (
    <main className="list-container">
      {data?.movies?.map((movie: any, idx: number) => (
        <ListItem key={movie.id} item={movie} odd={(idx + 1) % 2 !== 0} />
      ))}
    </main>
  );
};

export default List;
