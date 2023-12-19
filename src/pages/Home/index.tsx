import React from "react";
import { useGetTrending } from "../../service/tmdb";
import Grid from "../../components/Grid";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useGetTrending();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return (
    <div>
      <Grid data={data.results} />
    </div>
  );
};

export default Home;
