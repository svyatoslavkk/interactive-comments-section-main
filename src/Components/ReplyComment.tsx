import React from "react";

export default function ReplyComment ({ showReply, onReply }: any) {
    return (
        <>
          {showReply && (
            <div className='comment-item reply-comment'>
              <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
              <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
              <button type="button" className='send-button' onClick={onReply}>Reply</button>
            </div>
          )}
        </>
    )
}