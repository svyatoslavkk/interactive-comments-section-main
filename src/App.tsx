import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <main>
        <div className='comment-item'>
          <div className='comment-item-header'>
            <img src="image-amyrobson.png" className='avatar-img' alt="Avatar Image" />
            <h4 className='username'>amyrobson</h4>
            <p>1 month ago</p>
          </div>
          <p className='comment-text'>
            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
          </p>
          <div className='comment-item-footer'>
            <div className='likes-counter'>
              <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
              <h4 className='number-of-likes'>12</h4>
              <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
            </div>
            <div className='reply'>
              <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
              <h4>Reply</h4>
            </div>
          </div>
        </div>
        
        <div className='comment-item'>
          <div className='comment-item-header'>
            <img src="image-maxblagun.png" className='avatar-img' alt="Avatar Image" />
            <h4 className='username'>maxblagun</h4>
            <p>2 weeks ago</p>
          </div>
          <p className='comment-text'>
            Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?
            Thanks!
          </p>
          <div className='comment-item-footer'>
            <div className='likes-counter'>
              <img src="icon-plus.svg" className='icon-plus' alt="Icon Plus" />
              <h4 className='number-of-likes'>5</h4>
              <img src="icon-minus.svg" className='icon-minus' alt="Icon Minus" />
            </div>
            <div className='reply'>
              <img src="icon-reply.svg" className='icon-reply' alt="Icon Reply" />
              <h4>Reply</h4>
            </div>
          </div>
        </div>

        <div className='comment-replies-block'>
          <div className='replies-line'></div>

          <div className='comment-item'>
            <div className='comment-item-header'>
              <img src="image-ramsesmiron.png" className='avatar-img' alt="Avatar Image" />
              <h4 className='username'>ramsesmiron</h4>
              <p>1 week ago</p>
            </div>
            <p className='comment-text'>
              If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.
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
      </main>
    </div>
  );
}

export default App;
