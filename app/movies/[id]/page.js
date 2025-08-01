import BackButton from "@/app/components/BackButton";
import tmdbApi from "@/lib/axios";
import Image from "next/image";
import React from "react";

export default async function MovieDetails({ params }) {
  const { id } = await params;
  const res = await tmdbApi.get(`/movie/${id}`);
  const movie = res.data;
  return (
    <div>
      <div className="text-white">
        {/* Cover photo section */}
        <div
          className="relative h-[60vh] bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <BackButton></BackButton>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative z-10 flex gap-6 p-8">
            <Image
              width={500}
              height={700}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-40 rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="italic text-lg mt-1">{movie.tagline}</p>
              <div className="mt-3 text-sm flex gap-4">
                <span>⭐ {movie.vote_average.toFixed(1)} / 10</span>
                <span>{movie.release_date}</span>
                <span>{movie.runtime} min</span>
              </div>
              <div className="mt-2 flex gap-2">
                {movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="p-8 max-w-4xl text-black">
          <h2 className="text-2xl font-semibold mb-2">Overview:</h2>
          <p className="text-xl">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
