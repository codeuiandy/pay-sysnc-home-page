import './App.css';
import BlogsHeader from './components/blogs/BlogsHeader';
import Navbar from './components/Navbar';
// import BlogLayout from './components/blogs';
import AllBlogs from './components/blogs/AllBlogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogsHeader />
      <AllBlogs />
      {/* <BlogLayout /> */}

    </div>
  );
}

export default App;
