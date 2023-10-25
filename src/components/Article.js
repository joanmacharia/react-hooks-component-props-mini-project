import React from 'react'
import blogData from '../data/blog';

export default function Article({title, date =  "January 1, 1970", preview}) {
    
        const minutes = blogData.posts.minutes;
        let minutesToRead;
        if (minutes < 30){
            minutesToRead = Math.ceil(minutes/5);
        }else{
            minutesToRead = Math.ceil(minutes/10);
        }
        let emoji = minutes < 30 ? '☕️' : '🍱'
        return (
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
                <div>
                   {emoji.repeat(minutesToRead)}{minutes} min read
                </div>
            </article>
  )
}
