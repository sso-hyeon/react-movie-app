import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchLsit, searchKeyword } from "../api";
import { makeImagePath } from "../utils";

import noImage from "../assets/noImage.png";
import { useEffect } from "react";

const Wrapper = styled.div`
    width: 95%;
    padding-bottom: 200px;
    margin: 150px auto 0;
    h2 {
        font-size: 40px;
        font-weight: bold;
        text-indent: 20px;
        margin-bottom: 40px;
    }
`;
const SearchList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
`;
const ThumbImage = styled.div`
    width: 13%;
    min-width: 230px;
    background-size: cover;
    background-position: center center;
    height: 130px;
    margin: 0 0.3% 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
`;
const NoData = styled.div`
    width: 100%;
    font-size: 25px;
    text-align: center;
    padding: 50px 0;
    border-radius: 15px;
    font-weight: bold;
    background-color: ${props => props.theme.black.lighter};
`;

function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    const { data, isLoading, refetch } = useQuery<IGetSearchLsit>("search", () =>
        searchKeyword(keyword + "")
    );

    useEffect(() => {
        if (keyword === null || "") {
            return;
        }
        refetch();
    }, [keyword, refetch]);

    return (
        <>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <Wrapper>
                    <h2>Movie</h2>
                    <SearchList>
                        {data && data.total_results === 0 ? (
                            <NoData>No Data</NoData>
                        ) : (
                            data?.results.map(list =>
                                list.media_type === "movie" ? (
                                    <ThumbImage
                                        key={list.id + ""}
                                        style={{
                                            backgroundImage: list.backdrop_path
                                                ? `linear-gradient(to top, black, transparent), url(${makeImagePath(
                                                      list.backdrop_path,
                                                      "w500"
                                                  )})`
                                                : `linear-gradient(to top, black, transparent), url(${noImage})`,
                                            backgroundPosition: "center center",
                                            backgroundSize: "auto 130px",
                                            backgroundRepeat: "no-repeat"
                                        }}
                                    >
                                        <span>
                                            {list.original_title
                                                ? list.original_title
                                                : list.name}
                                        </span>
                                        <span>⭐{list.vote_average}</span>
                                    </ThumbImage>
                                ) : null
                            )
                        )}
                    </SearchList>
                    <h2>Tv Shows</h2>
                    <SearchList>
                        {data && data.total_results === 0 ? (
                            <NoData>No Data</NoData>
                        ) : (
                            data?.results.map(list =>
                                list.media_type === "tv" ? (
                                    <ThumbImage
                                        key={list.id + ""}
                                        style={{
                                            backgroundImage: list.backdrop_path
                                                ? `linear-gradient(to top, black, transparent), url(${makeImagePath(
                                                      list.backdrop_path,
                                                      "w500"
                                                  )})`
                                                : `linear-gradient(to top, black, transparent), url(${noImage})`,
                                            backgroundPosition: "center center",
                                            backgroundSize: "auto 130px",
                                            backgroundRepeat: "no-repeat"
                                        }}
                                    >
                                        <span>
                                            {list.original_title
                                                ? list.original_title
                                                : list.name}
                                        </span>
                                        <span>⭐{list.vote_average}</span>
                                    </ThumbImage>
                                ) : null
                            )
                        )}
                    </SearchList>
                </Wrapper>
            )}
        </>
    );
}

export default Search;
