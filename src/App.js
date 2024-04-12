import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import MoviePage from "./pages/Movies/MoviePage";
import NotFoundpage from "./pages/NotFoundpage/NotFoundpage";

// 홈페이지
// 영화 전체 보여주는 페이지 (서치)
// 영화 디테일 페이지

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
        </Route>
        <Route path="not-found" element={<NotFoundpage />} />
      </Routes>
    </div>
  );
}

export default App;
