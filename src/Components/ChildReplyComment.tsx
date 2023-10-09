import React from "react";

export default function ChildReplyComment ({ showChildReply, onChildReply }: any) {
    return (
        <>
            {showChildReply && (
                <div className='comment-item reply-comment'>
                <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
                <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
                <button type="button" className='send-button' onClick={onChildReply}>Reply</button>
                </div>
            )}
        </>
    )
}