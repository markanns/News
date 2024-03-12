const GetNewsByCategory = async (country: string, category: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d00ffb1b2a6e4d0eb9d7635a3423fcfa`
  );
  const data = await response.json();
  return data.articles;
};

const GetTopNews = async (country: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=d00ffb1b2a6e4d0eb9d7635a3423fcfa`
  );
  const data = await response.json();
  return data.articles;
};

const GetSearchedNews = async (searchTerm: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=d00ffb1b2a6e4d0eb9d7635a3423fcfa`
  );
  const data = await response.json();
  return data.articles;
};

export { GetNewsByCategory, GetTopNews, GetSearchedNews };
