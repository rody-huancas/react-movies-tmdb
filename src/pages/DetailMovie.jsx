import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetailMovie } from "../api/movieApi";
import { URL_IMAGE } from "../constants/globals-constants";
import { Loader } from "../components";
import { IoPlayBackSharp } from "react-icons/io5";

export const DetailMovie = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        setLoader(true);
        const data = await fetchDetailMovie(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    fetchMovieDetail();
  }, []);

  const { backdrop_path, genres, homepage, original_title, overview, popularity, title, release_date } = movie;

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 px-20">
          <div className="inline-flex">
            <Link to={-1} className="px-7 py-3 rounded bg-indigo-600/90 flex items-center gap-2 uppercase font-bold">
              <IoPlayBackSharp />
              Back
            </Link>
          </div>

          <div className="flex gap-10 w-full justify-center mx-auto my-7">
            <div className="w-1/2 ">
              <img
                src={`${URL_IMAGE}${backdrop_path}`}
                alt={original_title}
                className="h-[400px] rounded-2xl object-cover"
              />
            </div>
          
            <div className="flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-5xl font-extrabold">{title}</h1>
              <p className="text-justify text-sm">{overview}</p>
              <div className="flex flex-col gap-2">
                <small className="font-bold uppercase">Generes</small>
                <div className="flex flex-wrap gap-5">
                  {genres &&
                    genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="bg-indigo-600 text-white py-1 px-5 rounded-xl text-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                </div>
              </div>
              <div className="flex items-start gap-5">
                <span className="text-yellow-500 text-lg font-bold">
                  Popularity: <span className="font-normal">{popularity}</span>
                </span>
                <span className="text-white font-medium">
                  Date of release:{" "}
                  <span className="font-normal">{release_date}</span>
                </span>
              </div>
          
              {
                homepage !== "" && (
                  <a href={homepage} className="text-indigo-600 text-sm underline">
                    View original movie
                  </a>
                )
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};
