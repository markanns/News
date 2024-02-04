import { GlobalStyles } from "./styles/Global";
import { Route, Routes } from "react-router-dom";
import { TopNews, Categories, Search } from "./components/index";
import Header from "./components/Header/Header";
import { NewsProvider } from "./components/NewsContext/NewsContext";
// import SingleCategoryNews from "./components/SingleCategoryNews/SingleCategoryNews";
import SingleNews from "./components/SingleNews/SingleNews";
import Business from "./components/Categories/Business/Business";

function App() {
  return (
    <>
      <GlobalStyles />
      <NewsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<TopNews />} />
          <Route path="topNews">
            <Route index element={<TopNews />} />
            <Route path=":title" element={<SingleNews />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":title" element={<Business businessNews={[]} />} />
          </Route>
          <Route path="search" element={<Search />} />
        </Routes>
      </NewsProvider>
    </>
  );
}

export default App;
