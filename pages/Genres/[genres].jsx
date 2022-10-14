import { useRouter } from 'next/router'
import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';

const GenreType = () => {
  const genre = useRouter().query.genres;
  console.log({genre})
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className={`flex flex-col gap-4 mt-14 px-8 pb-4 overflow-auto ${activeMenu && 'md:ml-72'
      } px-8 text-white`}>{genre}</div>
  )
}

export default GenreType

