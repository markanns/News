import { GlobalStyles } from "./styles/Global";
import { Route, Routes } from "react-router-dom";
import { TopNews, Categories, Search } from "./components/index";
import Header from "./components/Header/Header";
import { NewsProvider } from "./components/NewsContext/NewsContext";

import SingleNews from "./components/SingleNews/SingleNews";

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
          <Route path="categories" element={<Categories />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </NewsProvider>
    </>
  );
}

export default App;
