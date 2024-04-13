export const handleLowSort = (movie) => {
  const sortedData = [...movie.results].sort((a, b) => {
    return b.popularity - a.popularity;
  });

  return sortedData;
};

export const handleHighSort = (movie) => {
  const sortedData = [...movie.results].sort((a, b) => {
    return a.popularity - b.popularity;
  });

  return sortedData;
};
