import tmdbApi from "@/lib/axios";
import SwiperComponent from "./components/SwiperComponent";
import Container from "./components/Container";

export default async function HomePage() {
  const res = await tmdbApi.get("/movie/popular");
  const movies = res.data.results;

  return (
    <div>
      <Container className="py-10">
        <div>
          <SwiperComponent movies={movies}></SwiperComponent>
        </div>
      </Container>
    </div>
  );
}
