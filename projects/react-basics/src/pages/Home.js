import {useState} from 'react';

const Home = () => {
  const title = 'Building a blog with React';
  //let name = 'Tracy'
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(25);
  const handleClick = () =>{
    console.log('hello react', )
    setName('Tracy');
    setAge(20)
  }
  return ( 
    <div>
      
      <div className="home">
        <h1>{title}</h1>
        <p onClick={handleClick}>My name is {name} and I am {age}</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
   );
}
 
export default Home;