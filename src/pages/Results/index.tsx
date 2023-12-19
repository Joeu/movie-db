import React from "react";
import { useSearch } from "../../service/tmdb";
import { useSearchParams } from "react-router-dom";
import List from "../../components/List";

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isLoading, isError } = useSearch(query);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return (
    <div>
      <h1>Search results:</h1>
      <List data={data?.results} />
    </div>
  );
};

export default Results;
