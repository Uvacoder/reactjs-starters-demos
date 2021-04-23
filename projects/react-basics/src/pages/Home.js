import {useState} from 'react';

import BlogList from '../components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Tracy', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Jane', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Tracy', id: 3 }
  ]);

  const handleDelete = (id) => {
    let newBlog = blogs.filter((blog)=> blog.id !== id);
    setBlogs(newBlog);
  }
  
  return ( 
    <div>
      <div className="home">
       <BlogList blogs={blogs} title="All the blogs" handleDelete={handleDelete}/>
       <BlogList blogs={
         blogs.filter((blog)=> blog.author === 'Tracy')
       } title="All Tracy's blog"/>

      </div>
    </div>
   );
}
 
export default Home;