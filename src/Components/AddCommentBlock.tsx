import React from "react";

export default function AddCommentBlock () {
    return (
        <div>
            <div className='add-comment-block'>
            <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
            <div className='add-comment-block-footer'>
                <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
                <button type="button" className='send-button'>Send</button>
            </div>
        </div>

            <div className='add-comment-block-desktop'>
                <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
                <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
                <button type="button" className='send-button'>Send</button>
            </div>
        </div>
    )
}