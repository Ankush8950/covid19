import React,{ useState,useEffect } from 'react'
import Axios from 'axios'
import Card from './Card';
import "./Covid.css"

const Covid = () => {
  const [details, setDetails] = useState([]);

  const fetchDetails = async () =>{
  const  data  = await Axios.get(" https://data.covid19india.org/v4/min/data.min.json	");

  console.log(data.data.MP.total); 
  setDetails(data.data.MP.total);
  }
  
  console.log(details);

  useEffect(() => {
   fetchDetails();
  }, []);

    return (
        <>
         <div className="card_div">
          <h1>Covid 19</h1> 
          <div className="card_details">  
            <Card datas={details} />
            </div>
          </div>
        </>
    )
}

export default Covid;