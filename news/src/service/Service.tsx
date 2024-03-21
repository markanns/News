const newsApiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
const baseUrl = "https://newsapi.org/v2/top-headlines";

const GetNewsByCategory = async (country: string, category: string) => {
  try {
    const response = await fetch(`${baseUrl}?country=${country}&category=${category}&apiKey=${newsApiKey}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { data: data.articles };
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
};

const GetTopNews = async (country: string) => {
  try {
    const response = await fetch(`${baseUrl}?country=${country}&apiKey=${newsApiKey}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { data: data.articles };
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
};

const GetSearchedNews = async (searchTerm: string) => {
  try {
    const response = await fetch(`${baseUrl}?q=${searchTerm}&apiKey=${newsApiKey}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { data: data.articles };
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
};

export { GetNewsByCategory, GetTopNews, GetSearchedNews };
