import { useEffect, useState } from 'react';  
import Button from './Button';  
import './App.css';  
import QuoteBox from './QuoteBox';  

function App() {  
    const API_URL = "https://api.api-ninjas.com/v1/quotes";  
    const [req, setReq] = useState("");  

    const fetchData = async () => {  
        try {  
            const response = await fetch(API_URL, {  
                method: "GET",  
                headers: {  
                    'X-Api-Key': 'YwaBPL+nx1/HohUVjRa7pw==VWqaOX9MsLGd9w9q'  
                },  
                contentType: 'application/json',  
            });  
            const data = await response.json();  
            const objData = data[0];  
            setReq(objData);  
        } catch (error) {  
            console.error("Error fetching data:", error);  
        }  
    }
  
    useEffect(() => {  
        fetchData(); 
    }, []); 

    return (  
        <div className="App">  
            <>  
                <QuoteBox req={req} />  
                <div className='bg-yellow-700 text-red-800'>  
                    <Button handleClick={fetchData} /> {/* Pass the function reference here */}  
                </div>  
            </>  
        </div>  
    );  
}  

export default App;