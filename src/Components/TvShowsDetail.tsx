import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { getTvShowInfo, IGetTvShowInfo } from "../api";
import { makeImagePath } from "../utils";

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;
const BigTitle = styled.h3`
  color: ${props => props.theme.white.lighter};
  padding: 20px;
  font-size: 36px;
  position: relative;
  margin-top: -80px;
`;
const MovieDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  span {
    font-size: 25px;
  }
  a {
    color: ${props => props.theme.black.darker};
    background-color: ${props => props.theme.white.lighter};
    line-height: 35px;
    border-radius: 20px;
    padding: 0 15px;
  }
`;
const MovieGenres = styled.ul`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 30px 0;
  li {
    color: ${props => props.theme.black.darker};
    background-color: ${props => props.theme.white.lighter};
    line-height: 30px;
    border-radius: 15px;
    padding: 0 10px;
    margin-right: 10px;
  }
`;

const MovieTagline = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const BigOverview = styled.div`
  padding: 30px 30px 40px;
  font-size: 20px;
  color: ${props => props.theme.white.lighter};
`;

function TvShowsDetail() {
  const bigTvMatch = useRouteMatch<{ tvId: string }>("/tv/:tvId");
  const { data: tvShowInfo, isLoading } = useQuery<IGetTvShowInfo>("tvInfo", () =>
    getTvShowInfo(bigTvMatch?.params.tvId)
  );

  console.log(tvShowInfo);

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <BigCover
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                tvShowInfo?.backdrop_path,
                "w500"
              )})`
            }}
          />
          <BigTitle>{tvShowInfo?.name}</BigTitle>
          <BigOverview>
            <MovieDetail>
              <span>{tvShowInfo?.first_air_date}</span>
              <span>⭐{tvShowInfo?.vote_average}</span>
              <a href={tvShowInfo?.homepage} target="_blank" rel="noreferrer">
                Homepage 👉
              </a>
            </MovieDetail>
            <MovieGenres>
              {tvShowInfo?.genres.map((hash, i) => (
                <li key={i + ""}>{hash.name}</li>
              ))}
            </MovieGenres>
            {tvShowInfo?.tagline && <MovieTagline>"{tvShowInfo?.tagline}"</MovieTagline>}
            {tvShowInfo?.overview}
          </BigOverview>
        </>
      )}
    </>
  );
}

export default TvShowsDetail;
