import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";

import '../styles/card.css';

const Card = ({ title, summary, publicationdate, image, image_alt }) => {
  return (
    <div className='card'>
        <div className='image-holder'>
            
        </div>
        <div className='body-holder'>
            <div className="title-holder">
                <h1 className='title'>{title}</h1>
            </div>
            <div className="summary-holder">
                <p className="summary">
                    {summary}
                </p>
            </div>
        </div>
    </div>
  );
};

export default Card;