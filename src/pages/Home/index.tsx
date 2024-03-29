import React from "react";
import { useGetTrending } from "../../service/tmdb";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useGetTrending();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return <div>{data && <Grid data={data.results} />}</div>;
};

export default Home;
