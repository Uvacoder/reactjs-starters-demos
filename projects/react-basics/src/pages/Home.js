import Navbar from "../components/Navbar";

const Home = () => {
  const title = 'Building a blog with React';
  return ( 
    <div>
      <Navbar/>
      <div className="home">
        <h1>{title}</h1>
      </div>
    </div>
   );
}
 
export default Home;