import { GlobalStyles } from "./styles/Global";
import { Route, Routes } from "react-router-dom";
import { TopNews, Categories } from "./components/index";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<TopNews />} />
        {/* <Route path="store">
            <Route index element={<Store />}></Route>
            <Route path=":productId" element={<SingleProduct />} />
          </Route> */}
        <Route path="topNews" element={<TopNews />} />
        <Route path="categories" element={<Categories />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
