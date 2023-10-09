import React, { useState } from "react";
import { voteComments } from "../Functions/voteComments";

export default function LikesCounterDesktop ({
    index,
    item,
  }: any) {
    const { handleUpvote, handleDownvote } = voteComments();

    return (
        <div className='likes-counter-desktop'>
            <img 
                src="icon-plus.svg" 
                className='icon-plus' 
                alt="Icon Plus"
                onClick={() => handleUpvote(index, false)}
            />
            <h4 className='number-of-likes'>{item.numberOfLikes}</h4>
            <img 
                src="icon-minus.svg" 
                className='icon-minus' 
                alt="Icon Minus"
                onClick={() => handleDownvote(index, false)}
            />
        </div>
    )
}