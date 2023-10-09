import imageAmyrobson from '../image-amyrobson.png';
import imageMaxblagun from '../image-maxblagun.png';
import imageJuliusomo from '../image-juliusomo.png';
import imageRamsesmiron from '../image-ramsesmiron.png';

export const commentsInfoArray = [
    {
      image: imageAmyrobson,
      username: 'amyrobson',
      replyStatus: false,
      date: '1 month ago',
      comment: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
      numberOfLikes: 12,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      image: imageMaxblagun,
      username: 'maxblagun',
      replyStatus: false,
      date: '2 weeks ago',
      comment: 'Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?\nThanks!',
      numberOfLikes: 5,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      image: imageRamsesmiron,
      username: 'ramsesmiron',
      replyUsername: 'maxblagun',
      replyStatus: true,
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
      replyStatus: true,
      date: '2 days ago',
      comment: 'I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
      numberOfLikes: 2,
      hasUpvoted: false,
      hasDownvoted: false,
    },
  ];