import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchLsit, serchKeyword } from "../api";
import { makeImagePath } from "../utils";

import noImage from "../assets/noImage.png";

const SearchList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    margin: 20vh auto 0;
    padding-bottom: 200px;
`;
const ThumbImage = styled.div`
    width: 16%;
    background-size: cover;
    background-position: center center;
    height: 130px;
    margin: 0 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
`;

function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    const { data, isLoading } = useQuery<IGetSearchLsit>("movieInfo", () =>
        serchKeyword(String(keyword))
    );

    return (
        <>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <>
                    <SearchList>
                        {data?.results.map(list => (
                            <ThumbImage
                                key={list.id}
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
                        ))}
                    </SearchList>
                </>
            )}
        </>
    );
}

export default Search;
