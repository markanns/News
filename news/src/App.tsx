import { GlobalStyles } from "./styles/Global";
import { Route, Routes } from "react-router-dom";
import { TopNews, Categories, Search } from "./components/index";
import Header from "./components/Header/Header";
import { NewsProvider } from "./components/NewsContext/NewsContext"; 
function App() {
  return (
    <>
      <GlobalStyles />
      <NewsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<TopNews />} />
        {/* <Route path="store">
            <Route index element={<Store />}></Route>
            <Route path=":productId" element={<SingleProduct />} />
          </Route> */}
        <Route path="topNews" element={<TopNews />} />
        <Route path="categories" element={<Categories />} />
        <Route path="search" element={<Search />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      </NewsProvider>
    </>
  );
}

export default App;
