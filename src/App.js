import './App.css';
import Cards from './components/Cards';
import FeedbackForm from './components/FeedbackForm';
import ToggleButton from './components/ToggleButton';
import { useEffect, useState, createContext } from 'react';
import SidePanel from './components/SidePanel';

export const AppContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(' https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>setPosts(data))
    .catch(err=>console.log(err))
  }, [])

  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };
 
  return (
    <AppContext.Provider value={{posts,setPosts}} >
      <div className=" flex bg-slate-200 h-[700px] w-[1400px] m-auto rounded-lg mt-2">
        <div className=' bg-slate-300 w-[500px] flex flex-col items-center'>
          <SidePanel/>
          <ToggleButton/>
          <div>

    </div>
    <FeedbackForm/>
        </div>
        <div className=''>
        <Cards posts={posts} setPosts={setPosts} />
        </div>
        
      </div>
    </AppContext.Provider>
  );
}

export default App;
