import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import HomeMovieDetail from "../Components/HomeMovieDetail";

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
const Slider = styled.div`
    position: relative;
    top: -100px;
`;
const PrevBtn = styled.div`
    cursor: pointer;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    left: 0;
    width: 60px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
`;
const NextBtn = styled.div`
    cursor: pointer;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    right: 0;
    width: 60px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
`;
const Row = styled(motion.div)`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(6, 1fr);
    position: absolute;
    width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
    background-color: white;
    background-image: url(${props => props.bgPhoto});
    background-size: cover;
    background-position: center center;
    height: 200px;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    &:first-child {
        transform-origin: center left;
    }
    &:last-child {
        transform-origin: center right;
    }
`;
const Info = styled(motion.div)`
    padding: 10px;
    background-color: ${props => props.theme.black.lighter};
    opacity: 0;
    position: absolute;
    width: 100%;
    bottom: 0;
    h4 {
        text-align: center;
        font-size: 18px;
    }
`;
const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
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
`;

const rowVariants = {
    hidden: (back: boolean) => ({
        x: back ? -window.innerWidth - 5 : window.innerWidth + 5
    }),
    visible: {
        x: 0
    },
    exit: (back: boolean) => ({
        x: back ? window.innerWidth + 5 : -window.innerWidth - 5
    })
};
const boxVariants = {
    normal: {
        scale: 1
    },
    hover: {
        scale: 1.3,
        y: -50,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type: "tween"
        }
    }
};
const InfoVariants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type: "tween"
        }
    }
};

const offset = 6;

function Home() {
    const history = useHistory();
    const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
    const { data: movies, isLoading } = useQuery<IGetMoviesResult>(
        ["movies", "nowPlaying"],
        getMovies
    );
    const { scrollY } = useViewportScroll();
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [back, setBack] = useState(true);
    const incraseIndex = () => {
        if (movies) {
            if (leaving) return;
            toggleLeaving();
            setBack(false);
            const totalMovies = movies?.results.length;
            const maxIndex = Math.floor(totalMovies / offset) - 1;
            setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
        }
    };
    const decraseIndex = () => {
        if (movies) {
            if (leaving) return;
            toggleLeaving();
            setBack(true);
            const totalMovies = movies?.results.length - 1;
            const maxIndex = Math.floor(totalMovies / offset) - 1;
            setIndex(prev => (prev === 0 ? maxIndex : prev - 1));
        }
    };
    const toggleLeaving = () => setLeaving(prev => !prev);
    const onBoxClicked = (movieId: number) => {
        history.push(`/movies/${movieId}`);
    };
    const onOverlayClick = () => history.goBack();
    const clickedMovie =
        bigMovieMatch?.params.movieId &&
        movies?.results.find(movie => String(movie.id) === bigMovieMatch.params.movieId);

    return (
        <Wrapper>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Banner
                        bgPhoto={makeImagePath(movies?.results[0].backdrop_path || "")}
                    >
                        <Title>{movies?.results[0].title}</Title>
                        <Overview>{movies?.results[0].overview}</Overview>
                    </Banner>
                    <Slider>
                        <PrevBtn onClick={decraseIndex}>&lt;</PrevBtn>
                        <NextBtn onClick={incraseIndex}>&gt;</NextBtn>
                        <AnimatePresence
                            custom={back}
                            initial={false}
                            onExitComplete={toggleLeaving}
                        >
                            <Row
                                custom={back}
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "linear", duration: 1 }}
                                key={index}
                            >
                                {movies?.results
                                    .slice(1)
                                    .slice(offset * index, offset * index + offset)
                                    .map(movie => (
                                        <Box
                                            layoutId={movie.id + ""}
                                            key={movie.id}
                                            whileHover="hover"
                                            initial="normal"
                                            variants={boxVariants}
                                            onClick={() => onBoxClicked(movie.id)}
                                            transition={{ type: "tween" }}
                                            bgPhoto={makeImagePath(
                                                movie.backdrop_path,
                                                "w500"
                                            )}
                                        >
                                            <Info variants={InfoVariants}>
                                                <h4>{movie.title}</h4>
                                            </Info>
                                        </Box>
                                    ))}
                            </Row>
                        </AnimatePresence>
                    </Slider>
                    <AnimatePresence>
                        {bigMovieMatch ? (
                            <>
                                <Overlay
                                    onClick={onOverlayClick}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                                <BigMovie
                                    style={{ top: scrollY.get() + 100 }}
                                    layoutId={bigMovieMatch.params.movieId}
                                >
                                    {clickedMovie && <HomeMovieDetail />}
                                </BigMovie>
                            </>
                        ) : null}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    );
}

export default Home;
