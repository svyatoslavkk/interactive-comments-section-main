import React from "react";

export default function RepliesLine (replyStatus: any) {
    return replyStatus ? <div className='replies-line'></div> : "";
}