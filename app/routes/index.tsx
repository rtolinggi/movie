import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Banner from "~/components/Banner";
import Layout from "~/components/Layouts";
import Row from "~/components/Row";
import { getMovie } from "~/utils/getData.server";
import type { Movies } from "~/utils/getData.server";

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
      <div className='overflow-hidden'>
        {/* Banner */}
        <Banner netflixOriginals={netflixOriginals} />
        <section className='py-6'>
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
