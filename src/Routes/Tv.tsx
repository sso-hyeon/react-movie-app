import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { getTvShows, IGetTvShowsResult } from "../api";
import { makeImagePath } from "../utils";
import { useHistory, useRouteMatch } from "react-router-dom";
import TvShowsDetail from "../Components/TvShowsDetail";
import MakeSwiper from "../Components/Swiper";

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
  height: 100vh;
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
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 2;
`;
const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  min-width: 800px;
  min-height: 700px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${props => props.theme.black.lighter};
  z-index: 2;
`;

function Tv() {
  const history = useHistory();
  const bigTvMatch = useRouteMatch<{ tvId: string }>("/tv/:tvId");
  const { data: tvShows, isLoading } = useQuery<IGetTvShowsResult>(
    ["tvShows", "popular"],
    getTvShows
  );
  const { scrollY } = useViewportScroll();
  const onOverlayClick = () => history.goBack();
  const clickedTvShow =
    bigTvMatch?.params.tvId &&
    tvShows?.results.find(tv => String(tv.id) === bigTvMatch.params.tvId);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(tvShows?.results[0].backdrop_path || "")}>
            <Title>{tvShows?.results[0].name}</Title>
            <Overview>{tvShows?.results[0].overview}</Overview>
          </Banner>
          <MakeSwiper dataList={tvShows} url={"tv"} />
          <AnimatePresence>
            {bigTvMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <BigMovie
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={bigTvMatch.params.tvId}
                >
                  {clickedTvShow && <TvShowsDetail />}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Tv;
