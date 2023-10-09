// import React from "react";

// export const handleUpvote = (commentIndex: any, isReply: any) => {
//     if (isReply) {
//       const updatedReplyComments = [...replyComments];
//       if (!updatedReplyComments[commentIndex].hasUpvoted) {
//         updatedReplyComments[commentIndex].numberOfLikes += 1;
//         updatedReplyComments[commentIndex].hasUpvoted = true;
//         if (updatedReplyComments[commentIndex].hasDownvoted) {
//           updatedReplyComments[commentIndex].numberOfLikes += 1;
//           updatedReplyComments[commentIndex].hasDownvoted = false;
//         }
//         setReplyComments(updatedReplyComments);
//       }
//     } else {
//       const updatedComments = [...commentsInfo];
//       if (!updatedComments[commentIndex].hasUpvoted) {
//         updatedComments[commentIndex].numberOfLikes += 1;
//         updatedComments[commentIndex].hasUpvoted = true;
//         if (updatedComments[commentIndex].hasDownvoted) {
//           updatedComments[commentIndex].numberOfLikes += 1;
//           updatedComments[commentIndex].hasDownvoted = false;
//         }
//         setCommentsInfo(updatedComments);
//       }
//     }
//   };