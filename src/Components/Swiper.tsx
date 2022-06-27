import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

interface MovieResult {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
}

interface ISwiperStyle {
    width: string;
    height: string;
    margin: string;
    overflow: string;
}
const SwiperStyle: ISwiperStyle = {
    width: "100%",
    height: "200px",
    margin: "-15vh auto 0",
    overflow: "visible"
};
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

const boxVariants = {
    normal: {
        scale: 1
    },
    hover: {
        scale: 1.2,
        transition: {
            delay: 0.3,
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

function MakeSwiper({ movies }: any) {
    const history = useHistory();

    const onBoxClicked = (movieId: number) => {
        history.push(`/movies/${movieId}`);
    };

    return (
        <>
            <Swiper
                style={SwiperStyle}
                spaceBetween={5}
                slidesPerView={6}
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                navigation
                modules={[Navigation]}
            >
                {movies?.results.slice(1).map((movie: MovieResult) => (
                    <SwiperSlide>
                        <Box
                            layoutId={movie.id + ""}
                            key={movie.id}
                            whileHover="hover"
                            initial="normal"
                            variants={boxVariants}
                            onClick={() => onBoxClicked(movie.id)}
                            transition={{ type: "tween" }}
                            bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                        >
                            <Info variants={InfoVariants}>
                                <h4>{movie.title}</h4>
                            </Info>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default MakeSwiper;
