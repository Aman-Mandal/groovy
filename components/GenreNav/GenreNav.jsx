import React from 'react';
import Link from 'next/link';

const genreCategory = [
  'podcasts',
  'charts',
  'new-releases',
  'discover',
  'concerts',
];
const GenreNav = () => {
  return (
    <nav class='/Genres'>
      <div class='container flex items-center justify-start p-6 mx-auto text-white capitalize'>
        {genreCategory.map((category) => (
          <Link key={category} href={`/Genres/${category}`}>
            <a class='text-white border-b-2 border-blue-500 mx-1.5 sm:mx-6 uppercase'>
              {category}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default GenreNav;
