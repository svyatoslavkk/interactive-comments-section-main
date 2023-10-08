import React from 'react';
import logo from './logo.svg';
import './App.scss';
import imageAmyrobson from './image-amyrobson.png';
import imageJuliusomo from './image-juliusomo.png';
import imageMaxblagun from './image-maxblagun.png';
import imageRamsesmiron from './image-ramsesmiron.png';

function App() {
  const commentsInfo = [
    {
      image: imageAmyrobson,
      username: 'amyrobson',
      date: '1 month ago',
      comment: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
      numberOfLikes: 12,
    },
    {
      image: imageMaxblagun,
      username: 'maxblagun',
      date: '2 weeks ago',
      comment: 'Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?\nThanks!',
      numberOfLikes: 5,
    },
  ]

  return (
    <div className='container'>
      <main>
        {commentsInfo.map((item: any) => (
          <div className='comment-item'>
            <div className='likes-counter-desktop'>
                <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                <h4 className='number-of-likes'>{item.numberOfLikes}</h4>
                <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
            </div>
            <div>
              
                <div className='comment-item-header-desktop'>
                  <div className='comment-item-header'>
                    <img src={item.image} className='avatar-img' alt="Avatar Image" />
                    <h4 className='username'>{item.username}</h4>
                    <p>{item.date}</p>
                  </div>
                  <div className='reply-desktop'>
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
                  <div className='reply'>
                    <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                    <h4>Reply</h4>
                  </div>
                </div>
            </div>
          </div>
        ))}

        <div className='comment-replies-block'>
          <div className='replies-line'></div>

          <div className='comment-replies-items'>
            <div className='comment-item'>
              
              <div className='likes-counter-desktop'>
                  <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                  <h4 className='number-of-likes'>4</h4>
                  <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
              </div>
              <div>
                <div className='comment-item-header-desktop'>
                  <div className='comment-item-header'>
                    <img src="image-ramsesmiron.png" className='avatar-img' alt="Avatar Image" />
                    <h4 className='username'>ramsesmiron</h4>
                    <p>1 week ago</p>
                  </div>
                  <div className='reply-desktop'>
                      <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                      <h4>Reply</h4>
                  </div>
                </div>
                  <p className='comment-text'>
                    <span className='username-reply'>@maxblagun</span> If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.
                  </p>
                  <div className='comment-item-footer'>
                    <div className='likes-counter'>
                      <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                      <h4 className='number-of-likes'>4</h4>
                      <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
                    </div>
                    <div className='reply'>
                      <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
                      <h4>Reply</h4>
                    </div>
                  </div>
              </div>
            </div>
            
            <div className='comment-item'>
              
              <div className='likes-counter-desktop'>
                  <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                  <h4 className='number-of-likes'>2</h4>
                  <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
              </div>
              <div>
                  <div className='comment-item-header'>
                    <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
                    <h4 className='username'>juliusomo</h4>
                    <p>2 days ago</p>
                  </div>
                  <p className='comment-text'>
                    <span>@ramsesmiron</span> I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.
                  </p>
                  <div className='comment-item-footer'>
                    <div className='likes-counter'>
                      <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
                      <h4 className='number-of-likes'>2</h4>
                      <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
                    </div>
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
                  </div>
              </div>
            </div>
          </div>

        </div>

        <div className='add-comment-block'>
          <textarea className='add-comment-input' placeholder="Add a comment..."></textarea>
          <div className='add-comment-block-footer'>
            <img src="image-juliusomo.png" className='avatar-img' alt="Avatar Image" />
            <button type="button" className='send-button'>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
