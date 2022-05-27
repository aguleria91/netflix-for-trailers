import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
      <div className="absolute bottom-0 z-10  w-full bg-gradient-to-t from-[black]/50 to-transparent font-bold">
        <h6 className="text-clip pl-0.5 text-white text-shadow-md  md:pl-2 lg:pl-2">
          {movie?.title}
        </h6>
      </div>
    </div>
  )
}

export default Thumbnail
