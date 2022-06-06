import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import type { Movie } from "~/utils/getData.server";
import Thumbnail from "./Thumbnail";

const Row: React.FC<{ title: string; movies: Movie[] }> = (props) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isMove, setIsMove] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    setIsMove(true);
    if (listRef.current) {
      const { scrollLeft, clientWidth } = listRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      listRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className='container flex flex-col gap-4 mt-4 mx-auto '>
      <h4 className='cursor-pointer text-xl font-semibold text-gray-400 w-fit tracking-wider transition-all duration-150 hover:text-white'>
        {props.title}
      </h4>
      <div className='relative flex justify-start group'>
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`absolute cursor-pointer top-0 bottom-6 left-1 m-auto w-12 z-10 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`}
        />

        <div
          ref={listRef}
          className='flex scrollbar-hide overflow-x-scroll justify-start gap-4'>
          {props.movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className={`absolute cursor-pointer top-0 bottom-6 right-1  m-auto w-12 z-10 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`}
        />
      </div>
    </div>
  );
};

export default Row;
