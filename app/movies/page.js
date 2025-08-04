import React from "react";
import Container from "../components/Container";
import SearchInput from "../components/SearchInput";
import tmdbApi from "@/lib/axios";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default async function Movies({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const query = params.query || "";
  let res;
  if (query) {
    res = await tmdbApi.get(`/search/movie`, {
      params: {
        query,
        page,
      },
    });
  } else {
    res = await tmdbApi.get(`/discover/movie`, {
      params: {
        sort_by: "release_date.desc",
        page,
        "primary_release_date.lte": new Date().toISOString().split("T")[0], // only released
        with_release_type: "2|3", // 2 = digital, 3 = theatrical
        "vote_count.gte": 10, // must have votes
      },
    });
  }
  const movies = res.data.results.filter((movie) => movie.poster_path);
  console.log(movies);
  const totalPages = res.data.total_pages;
  return (
    <Container className={"py-10"}>
      <SearchInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-slate-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={700}
              className="w-full h-auto rounded-lg mb-4 hover:scale-105 duration-150 transition overflow-hidden"
            />
            <div className="space-y-4">
              <div className="flex justify-between gap-2 py-2">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <MdOutlineBookmarkAdd className="cursor-pointer" size={30} />
              </div>
              <p className="text-gray-600">Release Date: {movie.release_date}</p>
              <p className="font-semibold">
                ⭐ {movie.vote_average.toFixed(1)} / 10
              </p>
              <p className="text-gray-800 line-clamp-3">{movie.overview}</p>
              <Link href={`/movies/${movie.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-200">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/movies?page=${page - 1}`} />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>

            {page < totalPages && (
              <PaginationItem>
                <PaginationNext href={`/movies?page=${page + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </Container>
  );
}
