import React from "react";
import Card from "../Card";

type GridProps = {
  data: any[];
};

const Grid = (props: GridProps) => {
  const { data } = props;
  return (
    <>
      <h1>Trending this week</h1>
      <section className="grid">
        {data?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default Grid;
