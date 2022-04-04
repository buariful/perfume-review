import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ReviewPage from './components/ReviewPage/ReviewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Chart></Chart>}></Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
