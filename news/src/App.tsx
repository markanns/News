import { GlobalStyles } from "./styles/Global";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopNews, Categories, Search } from "./components/index";
import Header from "./components/Header/Header";
import { NewsProvider } from "./context/NewsContext";
import SingleNews from "./components/SingleNews/SingleNews";
import AllCategories from "./components/AllCategories/AllCategories";
import Error from "./components/Error/Error";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <NewsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<TopNews />} />
            <Route path="topNews">
              <Route index element={<TopNews />} />
            </Route>
            <Route path="articles/:title" element={<SingleNews />} />
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route path=":category" element={<AllCategories />} />
            </Route>
            <Route path="search">
              <Route index element={<Search />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </NewsProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
