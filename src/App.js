import './App.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
