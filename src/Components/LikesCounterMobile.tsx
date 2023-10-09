import React, { useState } from "react";
import { useVoteComments } from "../Functions/useVoteComments";

export default function LikesCounterMobile ({
    index,
    item,
    handleUpvote,
    handleDownvote,
  }: any) {

    return (
        <div className='likes-counter'>
            <img 
                src="icon-plus.svg" 
                className='icon-plus' 
                alt="Icon Plus" 
                onClick={handleUpvote}
            />
            <h4 className='number-of-likes'>{item.numberOfLikes}</h4>
            <img 
                src="icon-minus.svg" 
                className='icon-minus' 
                alt="Icon Minus" 
                onClick={handleDownvote} 
            />
        </div>
    )
}