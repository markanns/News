const NewsServices = async (country: string, category: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f62196a68b7b41d385329a19658c8625`
  );
  const data = await response.json();
  return data.articles;
};

export default NewsServices;
