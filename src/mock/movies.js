module.exports = () => {
  const data = { movies: [] };
  const genders = ["action", "fiction", "drama"];
  for (let i = 0; i < 8; i++) {
    const randomInteger = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    data.movies.push({
      id: i + 1,
      image: "",
      title: `Awesome film #${i + 1}`,
      gender: genders[randomInteger],
      rating: 4.5
    });
  }
  return data;
};
