import React from "react";
import {navigate} from 'gatsby'; 

import '../styles/card.css';


const Card = ({ title, summary, url, publicationdate, image, image_alt }) => {
  return (
        <div className='card' onClick={() => navigate(url)}>
            <div className='card-inner'>
                <div className='image-holder'></div>
                <div className='body-holder'>
                    <div className="title-holder">
                        <h1 className='title'>{title}</h1>
                        <p className="date">{publicationdate}</p>
                    </div>
                    <div className="summary-holder">
                        <p className="summary">
                            {summary}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;