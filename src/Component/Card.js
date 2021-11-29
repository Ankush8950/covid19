import React from 'react'
import "./Card.css"

const Card = ({datas}) => {
    return (
        <>
          <div className="card_div">
            <div className="Container">
              <div className="card_data">
              <p>confirmed</p>
              <h1>{datas.confirmed}</h1>
              </div>
              <div className="card_data">
              <p>recovered</p>
              <h1>{datas.recovered}</h1>
              </div> 
              <div className="card_data">
              <p>deceased</p>
              <h1>{datas.deceased}</h1>
              </div> 
              <div className="card_data">
              <p>tested</p>
              <h1>{datas.tested}</h1>
              </div> 
              <div className="card_data">
              <p>vaccinated1</p>
              <h1>{datas.vaccinated1}</h1>
              </div> 
              <div className="card_data">
              <p>vaccinated2</p>
              <h1>{datas.vaccinated2}</h1>
              </div> 
            </div>
          </div>  
        </>
    )
}

export default Card;
