
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
 useEffect(() => {
    const postData = async () => {
      const apiUrl = 'https://chimpu.xyz/api/post.php';

      var phonenumber =834849;
      const postData = {
        Post: phonenumber
      };

      try {
        const response = await axios.post(apiUrl, postData);
        console.log('Response Headers:', JSON.parse(response.config.data));
        setData(JSON.parse(response.config.data))
      } catch (error) {
        console.error('Request error:', error);
      }
    };
    postData();
  }, []);
  return (
   <div>
   {Object.values(data)}
   </div>
  );
}

export default App;
