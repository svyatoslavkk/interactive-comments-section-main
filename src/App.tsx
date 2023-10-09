import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import imageAmyrobson from './image-amyrobson.png';
import imageJuliusomo from './image-juliusomo.png';
import imageMaxblagun from './image-maxblagun.png';
import imageRamsesmiron from './image-ramsesmiron.png';
import AddCommentBlock from './Components/AddCommentBlock';
import { commentsInfoArray } from './Data/commentsInfoArray';
import { replyCommentsArray } from './Data/replyCommentsArray';
import { voteComments } from './Functions/voteComments';

function App() {
  const [commentsInfo, setCommentsInfo] = useState(commentsInfoArray);
  const [replyComments, setReplyComments] = useState(replyCommentsArray);

  const [replyTarget, setReplyTarget] = useState(-1);
  const [childReply, setChildReply] = useState(-1);

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const { handleUpvote, handleDownvote } = voteComments();

  const toggleReplyMode = (commentIndex: number) => {
    setReplyTarget((prevTarget) => (prevTarget === commentIndex ? -1 : commentIndex));
  };

  const togglechildReply = (commentIndex: number) => {
    setChildReply((prevTarget) => (prevTarget === commentIndex ? -1 : commentIndex));
  };

  const toggleEdit = (item: any, index: any) => {
    if (item.username === 'juliusomo') {
      setIsEditing(!isEditing);
      if (!isEditing) {
        setEditedComment(item.comment);
        setEditIndex(index);
      }
    }
  };

  const handleUpdateComment = () => {
    const updatedComments = [...commentsInfo];
    updatedComments[editIndex].comment = editedComment;
    setCommentsInfo(updatedComments);
  
    setIsEditing(false);
    setEditIndex(-1);
  };

  return (
    <div className='container'>
      <main>
        {commentsInfo.map((item: any, index) => (
          <div className='comment-block'>
            <div className='comment-item' key={index}>
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

              <div>
                
                  <div className='comment-item-header-desktop'>
                    <div className='comment-item-header'>
                      <img src={item.image} className='avatar-img' alt="Avatar Image" />
                      <h4 className='username'>{item.username}</h4>
                      <p className='date'>{item.date}</p>
                    </div>
                    <div className='reply-desktop' onClick={() => toggleReplyMode(index)}>
                        <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                        <h4>Reply</h4>
                    </div>
                  </div>
                  <p className='comment-text'>
                    {item.comment}
                  </p>
                  <div className='comment-item-footer'>
                    <div className='likes-counter'>
                      <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                      <h4 className='number-of-likes'>{item.numberOfLikes}</h4>
                      <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
                    </div>
                    <div className='reply' onClick={() => toggleReplyMode(index)}>
                      <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                      <h4>Reply</h4>
                    </div>
                  </div>
              </div>
            </div>
            {replyTarget === index && (
              <div className='comment-item reply-comment'>
                <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
                <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
                <button type="button" className='send-button'>Reply</button>
              </div>
            )}
          </div>
        ))}

          
        <div className='comment-replies-block'>
          <div className='replies-line'></div>

          <div>
            <div className='comment-replies-items'>
              {replyComments.map((item: any, index) => (
                
              <div className='comment-block'>
                <div className='comment-item' key={index}>
                
                  <div className='likes-counter-desktop'>
                      <img 
                        src="icon-plus.svg" 
                        className='icon-plus' 
                        alt="Icon Plus"
                        onClick={() => handleUpvote(index, true)}
                      />
                      <h4 className='number-of-likes'>{item.numberOfLikes}</h4>
                      <img 
                        src="icon-minus.svg" 
                        className='icon-minus' 
                        alt="Icon Minus"
                        onClick={() => handleDownvote(index, true)}
                      />
                  </div>
                  <div>
                    <div className='comment-item-header-desktop'>
                      <div className='comment-item-header'>
                        <img src={item.image} className='avatar-img' alt="Avatar Image" />
                        <h4 className='username'>{item.username}</h4>
                        {item.username === 'juliusomo' && (
                          <div className='tag-you'>
                            you
                          </div>
                        )}
                        <p className='date'>{item.date}</p>
                      </div>
                      {item.username === 'juliusomo' ? (
                          <div className='message-options-desktop'>
                            <div className='delete'>
                              <img src="icon-delete.svg" className='icon-delete' alt="Icon Delete" />
                              <h4>Delete</h4>
                            </div>
                            {isEditing && editIndex === index ? (
                              <button type="button" className='send-button' onClick={handleUpdateComment}>
                                Update
                              </button>
                            ) : (
                              <div className='edit'  onClick={() => toggleEdit(item, index)}>
                                <img src="icon-edit.svg" className='icon-edit' alt="Icon Edit" />
                                <h4>Edit</h4>
                              </div>
                            )}
                          </div>
                      ) : (
                        <div className='reply-desktop'  onClick={() => togglechildReply(index)}>
                            <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                            <h4>Reply</h4>
                        </div>
                      )}
                    </div>

                      <p className='comment-text'>
                        {isEditing && editIndex === index ? (
                          <textarea
                            className='add-comment-input'
                            value={editedComment}
                            onChange={(e) => setEditedComment(e.target.value)}
                          ></textarea>
                        ) : (
                          <p><span className='username-reply'>@{item.replyUsername}</span>{item.comment}</p>
                        )}
                      </p>

                      <div className='comment-item-footer'>
                        <div className='likes-counter'>
                          <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                          <h4 className='number-of-likes'>{item.numberOfLikes}</h4>
                          <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
                        </div>
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
                          <div className='reply'  onClick={() => togglechildReply(index)}>
                            <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                            <h4>Reply</h4>
                          </div>
                        )}
                      </div>
                  </div>
                </div>
                {childReply === index && (
                  <div className='comment-item reply-comment'>
                    <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
                    <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
                    <button type="button" className='send-button'>Reply</button>
                  </div>
                )}
                </div>
              ))}
            </div>
          </div>

          </div>

          <AddCommentBlock />
      </main>
    </div>
  );
}

export default App;
