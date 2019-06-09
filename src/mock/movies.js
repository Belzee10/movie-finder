module.exports = () => {
  const data = { movies: [] };
  for (let i = 0; i < 8; i++) {
    data.movies.push({
      id: i + 1,
      image: "",
      title: `Awesome film #${i + 1}`,
      gender: `Gender`,
      rating: 4.5
    });
  }
  return data;
};
