const getMovies = () => {
  const movies = [];
  for (let i = 0; i < 8; i++) {
    movies.push({
      id: i + 1,
      image: "",
      title: `Awesome film #${i + 1}`,
      gender: `Gender`,
      rating: 4.5
    });
  }
  return movies;
};

export default getMovies;
