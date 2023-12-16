import React from "react";
import Card from "../../components/Card";

const WhatchList: React.FC = () => {
  return (
    <div>
      {Array.from({ length: 10 }, (v, idx) => (
        <Card />
      ))}
    </div>
  );
};

export default WhatchList;
