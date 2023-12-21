import React from "react";
import { useGetProviders } from "../../service/tmdb";

type AvailableOnProps = {
  movieId: string;
};

const AvailableOn: React.FC<AvailableOnProps> = ({ movieId }) => {
  const { data, isLoading, isError } = useGetProviders(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return (
    <div className="available_on">
      <div className="available_on__logos">
        {data?.rent?.map((provider: any, idx: number) => (
          <img
            alt={provider.provider_name}
            src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
          />
        ))}
      </div>

      <div>Powered By JustWatch</div>
    </div>
  );
};

export default AvailableOn;
