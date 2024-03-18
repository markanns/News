export interface NewsItem {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface NewsData {
  [country: string]: {
    [category: string]: NewsItem[];
  };
}
const news = [
  {
    us: {
      business: [
        {
          source: { id: null, name: "Dummy Source" },
          author: "Dummy Author",
          title: "Dummy US Business News Title",
          description: "This is a dummy news description.",
          url: "http://dummynews.com",
          urlToImage: "http://dummynews.com/image.jpg",
          publishedAt: "2022-01-01T00:00:00Z",
          content: "This is dummy news content.",
        },
      ],
      technology: [
        // Dummy news items for US technology...
      ],
    },
  },
];

export default news;
