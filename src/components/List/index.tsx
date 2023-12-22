import React from "react";
import ListItem from "../ListItem";

type ListProps = {
  data: any;
};

const List = (props: ListProps) => {
  const { data } = props;

  return (
    <main className="">
      {data?.movies?.map((movie: any) => (
        <ListItem key={movie.id} item={movie} />
      ))}
    </main>
  );
};

export default List;
