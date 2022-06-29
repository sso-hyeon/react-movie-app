import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import HomeMovieDetail from "./HomeMovieDetail";

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

function Modal({ url, movieList }: any) {
  console.log(movieList);

  const history = useHistory();
  const bigMovieMatch = useRouteMatch<{ movieId: string }>(`/${url}/:movieId`);
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    movieList?.results.find(
      (movie: { id: number }) => String(movie.id) === bigMovieMatch.params.movieId
    );
  const onOverlayClick = () => history.goBack();
  const { scrollY } = useViewportScroll();

  return (
    <AnimatePresence>
      <Overlay onClick={onOverlayClick} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <BigMovie
        style={{ top: scrollY.get() + 100 }}
        layoutId={url + "_" + bigMovieMatch?.params.movieId}
      >
        {clickedMovie && <HomeMovieDetail url={url} />}
      </BigMovie>
    </AnimatePresence>
  );
}

export default Modal;
