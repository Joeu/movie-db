import React from "react";
import Card from "../Card";

type GridProps = {
  data: any[];
};

const Grid = (props: GridProps) => {
  const { data } = props;
  return (
    <section className="grid">
      <h1>Trending this week</h1>
      <div className="grid__cards">
        {data?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
