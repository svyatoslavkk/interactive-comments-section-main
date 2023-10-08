import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import imageAmyrobson from './image-amyrobson.png';
import imageJuliusomo from './image-juliusomo.png';
import imageMaxblagun from './image-maxblagun.png';
import imageRamsesmiron from './image-ramsesmiron.png';

function App() {
  const [commentsInfo, setCommentsInfo] = useState([
    {
      image: imageAmyrobson,
      username: 'amyrobson',
      date: '1 month ago',
      comment: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
      numberOfLikes: 12,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      image: imageMaxblagun,
      username: 'maxblagun',
      date: '2 weeks ago',
      comment: 'Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?\nThanks!',
      numberOfLikes: 5,
      hasUpvoted: false,
      hasDownvoted: false,
    },
  ]);

  const [replyComments, setReplyComments] = useState([
    {
      image: imageRamsesmiron,
      username: 'ramsesmiron',
      replyUsername: 'maxblagun',
      date: '1 week ago',
      comment: 'If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.',
      numberOfLikes: 4,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      image: imageJuliusomo,
      username: 'juliusomo',
      replyUsername: 'ramsesmiron',
      date: '2 days ago',
      comment: 'I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
      numberOfLikes: 2,
      hasUpvoted: false,
      hasDownvoted: false,
    },
  ]);

  const [replyTarget, setReplyTarget] = useState(-1);

  const toggleReplyMode = (commentIndex: number) => {
    setReplyTarget((prevTarget) => (prevTarget === commentIndex ? -1 : commentIndex));
  };

  const myUserData = [
    {
      image: imageJuliusomo,
    },
  ]
  
  const handleUpvote = (commentIndex: any, isReply: any) => {
    if (isReply) {
      const updatedReplyComments = [...replyComments];
      if (!updatedReplyComments[commentIndex].hasUpvoted) {
        updatedReplyComments[commentIndex].numberOfLikes += 1;
        updatedReplyComments[commentIndex].hasUpvoted = true;
        if (updatedReplyComments[commentIndex].hasDownvoted) {
          updatedReplyComments[commentIndex].numberOfLikes += 1;
          updatedReplyComments[commentIndex].hasDownvoted = false;
        }
        setReplyComments(updatedReplyComments);
      }
    } else {
      const updatedComments = [...commentsInfo];
      if (!updatedComments[commentIndex].hasUpvoted) {
        updatedComments[commentIndex].numberOfLikes += 1;
        updatedComments[commentIndex].hasUpvoted = true;
        if (updatedComments[commentIndex].hasDownvoted) {
          updatedComments[commentIndex].numberOfLikes += 1;
          updatedComments[commentIndex].hasDownvoted = false;
        }
        setCommentsInfo(updatedComments);
      }
    }
  };

  const handleDownvote = (commentIndex: any, isReply: any) => {
    if (isReply) {
      const updatedReplyComments = [...replyComments];
      if (!updatedReplyComments[commentIndex].hasDownvoted) {
        updatedReplyComments[commentIndex].numberOfLikes -= 1;
        updatedReplyComments[commentIndex].hasDownvoted = true;
        if (updatedReplyComments[commentIndex].hasUpvoted) {
          updatedReplyComments[commentIndex].numberOfLikes -= 1;
          updatedReplyComments[commentIndex].hasUpvoted = false;
        }
        setReplyComments(updatedReplyComments);
      }
    } else {
      const updatedComments = [...commentsInfo];
      if (!updatedComments[commentIndex].hasDownvoted) {
        updatedComments[commentIndex].numberOfLikes -= 1;
        updatedComments[commentIndex].hasDownvoted = true;
        if (updatedComments[commentIndex].hasUpvoted) {
          updatedComments[commentIndex].numberOfLikes -= 1;
          updatedComments[commentIndex].hasUpvoted = false;
        }
        setCommentsInfo(updatedComments);
      }
    }
  };

  return (
    <div className='container'>
      <main>
        {commentsInfo.map((item: any, index) => (
          <div className='comment-item'>
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
        ))}

        {/* Reply comment writing */}
        {replyTarget ? (
          <div className='comment-item reply-comment'>
            <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
            <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
            <button type="button" className='send-button'>Reply</button>
          </div>
        ) : null}

        <div className='comment-replies-block'>
          <div className='replies-line'></div>

          <div className='comment-replies-items'>
            {replyComments.map((item: any, index) => (
              <div className='comment-item'>
              
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
                          <div className='edit'>
                            <img src="icon-edit.svg" className='icon-edit' alt="Icon Edit" />
                            <h4>Edit</h4>
                          </div>
                        </div>
                    ) : (
                      <div className='reply-desktop'>
                          <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                          <h4>Reply</h4>
                      </div>
                    )}
                  </div>
                    <p className='comment-text'>
                      <span className='username-reply'>@{item.replyUsername}</span> {item.comment}
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
                        <div className='reply'>
                          <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                          <h4>Reply</h4>
                        </div>
                      )}
                    </div>
                </div>
              </div>
            ))}
          </div>

        </div>

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
      </main>
    </div>
  );
}

export default App;
