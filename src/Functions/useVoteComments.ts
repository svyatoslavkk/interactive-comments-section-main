import React, {useState} from "react";
import { commentsInfoArray } from '../Data/commentsInfoArray';
import { replyCommentsArray } from '../Data/replyCommentsArray';

export const useVoteComments = () => {
  const [commentsInfo, setCommentsInfo] = useState(commentsInfoArray);
  const [replyComments, setReplyComments] = useState(replyCommentsArray);

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

    return { 
      handleUpvote,
      handleDownvote, 
    }
  };