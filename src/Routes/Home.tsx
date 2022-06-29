import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getMovies,
  getUpCommingMovies,
  IGetMoviesResult,
  IGetUpCommingMovies
} from "../api";
import { makeImagePath } from "../utils";
import { useRouteMatch } from "react-router-dom";

import MakeSwiper from "../Components/Swiper";
import Modal from "../Components/Modal";

const Wrapper = styled.div`
  background-color: black;
  padding-bottom: 200px;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  font-size: 1.8rem;
  width: 50%;
`;

function Home() {
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  const bigMovieCommingMatch = useRouteMatch<{ movieId: string }>("/upComming/:movieId");
  const { data: movies, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const { data: upCommingMovies } = useQuery<IGetUpCommingMovies>(
    ["upCommingMovies", "upComming"],
    getUpCommingMovies
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(movies?.results[0].backdrop_path || "")}>
            <Title>{movies?.results[0].title}</Title>
            <Overview>{movies?.results[0].overview}</Overview>
          </Banner>
          <h3>NOW PLAYING</h3>
          <MakeSwiper dataList={movies} url={"movies"} />
          <h3>UP COMMING</h3>
          <MakeSwiper dataList={upCommingMovies} url={"upComming"} />
          {bigMovieMatch ? (
            <Modal url={"movies"} movieList={movies} />
          ) : (
            bigMovieCommingMatch && (
              <Modal url={"upComming"} movieList={upCommingMovies} />
            )
          )}
        </>
      )}
    </Wrapper>
  );
}

export default Home;
