import React from "react";

export default function MessageOptionsMobile ({ item, index, toggleReplyMode }: any) {
    return (
        <>
            {item.username === 'juliusomo' ? (
                <div className='message-options'>
                    <div className='delete'>
                        <img src="icon-delete.svg" className='icon-delete' alt="Icon Delete" />
                        <h4>Delete</h4>
                    </div>
                    <div className='edit'>
                        <img src="icon-edit.svg" className='icon-edit' alt="Icon Edit" />
                        <h4>Edit</h4>
                    </div>
                </div>
            ) : (
                <div className='reply'  onClick={() => toggleReplyMode(index)}>
                    <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                    <h4>Reply</h4>
                </div>
            )}
        </>
    )
}