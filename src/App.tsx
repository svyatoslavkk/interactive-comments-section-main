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
import { useVoteComments } from './Functions/useVoteComments';
import LikesCounterDesktop from './Components/LikesCounterDesktop';
import LikesCounterMobile from './Components/LikesCounterMobile';
import ReplyComment from './Components/ReplyComment';
import ChildReplyComment from './Components/ChildReplyComment';

function App() {
  const [commentsInfo, setCommentsInfo] = useState(commentsInfoArray);
  const [replyComments, setReplyComments] = useState(replyCommentsArray);

  const [replyTarget, setReplyTarget] = useState(-1);
  const [childReply, setChildReply] = useState(-1);

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const { handleUpvote, handleDownvote } = useVoteComments();

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
            {item.replyStatus ? (
            <div className='replies-line'></div>
            ): ("")}
            <div className='comment-item' key={index}>
              <LikesCounterDesktop 
                index={index} 
                item={item}
                handleUpvote={() => handleUpvote(index, false)}
                handleDownvote={() => handleDownvote(index, false)} 
              />
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
                    <div className='reply-desktop' onClick={() => toggleReplyMode(index)}>
                        <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                        <h4>Reply</h4>
                    </div>
                  </div>
                  <p className='comment-text'>
                    {item.comment} 
                  </p>
                  <div className='comment-item-footer'>
                    <LikesCounterMobile 
                      index={index} 
                      item={item} 
                      handleUpvote={() => handleUpvote(index, false)}
                      handleDownvote={() => handleDownvote(index, false)} 
                    />
                    <div className='reply' onClick={() => toggleReplyMode(index)}>
                      <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply"  />
                      <h4>Reply</h4>
                    </div>
                  </div>
              </div>
            </div>
            <ReplyComment showReply={replyTarget === index} onReply={() => toggleReplyMode(index)} />
          </div>
        ))}

          
        <div className='comment-replies-block'>
          <div className='replies-line'></div>

          <div>
            <div className='comment-replies-items'>
              {replyComments.map((item: any, index) => (
                
              <div className='comment-block'>
                <div className='comment-item' key={index}>
                  <LikesCounterDesktop 
                    index={index} 
                    item={item}
                    handleUpvote={() => handleUpvote(index, false)}
                    handleDownvote={() => handleDownvote(index, false)} 
                  />
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
                        <LikesCounterMobile 
                          index={index} 
                          item={item} 
                          handleUpvote={() => handleUpvote(index, false)}
                          handleDownvote={() => handleDownvote(index, false)} 
                        />
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
                <ChildReplyComment showChildReply={childReply === index} onChildReply={() => togglechildReply(index)} />
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
