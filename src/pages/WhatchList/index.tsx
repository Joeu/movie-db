import React from "react";
import Card from "../../components/Card";
import List from "../../components/List";

import dummy from "../../assets/dummydata.json";

const WhatchList: React.FC = () => {
  return (
    <div>
      <List data={dummy.movies} />
    </div>
  );
};

export default WhatchList;
