import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Banner from "~/components/Banner";
import Layout from "~/components/Layouts";
import Row from "~/components/Row";
import { getMovie } from "~/utils/getData.server";
import { Movies } from "~/utils/getData.server";
import { baseImageUrl } from "~/utils/request";

export const loader: LoaderFunction = async () => {
  return await getMovie();
};

export default function Index() {
  const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = useLoaderData<Movies>();
  return (
    <Layout>
      <div>
        {/* Banner */}
        <Banner netflixOriginals={netflixOriginals} />
        <section className="relative flex flex-col space-y-10 justify-center items-start mx-auto px-4 overflow-y-hidden overflow-x-hidden ">
          {/* Row */}
          <Row title={"Lagi Viral"} movies={trendingNow} />
          <Row title={"Ranking Teratas"} movies={topRated} />
          <Row title={"Film Action"} movies={actionMovies} />
          <Row title={"Komedi"} movies={comedyMovies} />
          <Row title={"Film Hantu"} movies={horrorMovies} />
          <Row title={"Film Romantis"} movies={romanceMovies} />
          <Row title={"Film Dokumenter"} movies={documentaries} />
        </section>
      </div>
      {/* Modal */}
    </Layout>
  );
}
