import React from "react";
import { useSearch } from "../../service/tmdb";
import { useSearchParams } from "react-router-dom";
import List from "../../components/List";
import Loading from "../../components/Loading";

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isLoading, isError } = useSearch(query);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return (
    <div>
      {data && (
        <>
          <h1>Search results:</h1>
          <List data={data.results} />
        </>
      )}
    </div>
  );
};

export default Results;
