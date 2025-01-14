import { useEffect, useState, useRef } from 'react';
import Button from './Button';
import './App.css';
import QuoteBox from './QuoteBox';
import { FaTwitter } from "react-icons/fa6"
 
function App() {
  const API_URL = "https://api.api-ninjas.com/v1/quotes";
  const [req, setReq] = useState("");
  const hasFetched = useRef(false);

  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { 'X-Api-Key': 'YwaBPL+nx1/HohUVjRa7pw==VWqaOX9MsLGd9w9q' },
        contentType: 'application/json',
      });
      const data = await response.json();
      const objData = data[0];
      setReq(objData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchData();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div 
        style={{ 
          backgroundColor: "#" + `${randomColor}`,
          color: "#" + `${randomColor}`  }}
        className='h-screen flex justify-center items-center'>
      <div 
        style={{ color: "#" + `${randomColor}` }}
        className='w-[600px] bg-white rounded-[4px] h-auto relative'>
        <QuoteBox req={req} />
        <div>
        <p className='absolute right-8 text-[18px]'>
          -{JSON.stringify(req.author)}
        </p>
        </div>
        <div 
           className='pb-[20px] flex justify-between px-8 pt-8'>
            <a 
              href={`https://twitter.com/intent/tweet?hastags=quote&text=${req.quote}`}
              className='p-3 rounded-md border-[2px] border-solid border-yellow-100 shadow-2xl'
            ><FaTwitter /> </a>
            <div 
              style={{ backgroundColor: "#" + `${randomColor}` }}
             >
            <Button fetch={fetchData} />
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;