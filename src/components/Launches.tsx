import { useQuery, gql } from "@apollo/client";

const LAUNCHES = gql`
  {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

type ratesType = {
  launch_date_utc: Date;
  launch_success: boolean;
  rocket: any;
  links: any;
  details: any;
};

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(
    ({
      launch_date_utc,
      launch_success,
      rocket,
      links,
      details,
    }: ratesType) => (
      <div key={launch_date_utc.toString()}>
          <p>
            {launch_date_utc}: {launch_success} / {rocket.rocket_name}
          </p>
          <p>{links.video_link}</p>
          <i>{details}</i>
          <p>---------------------------------------</p>
      </div>
    )
  );
};

export default ExchangeRates;
