import React from 'react'
import Message from './Message'

const Messages = ({ messages }: {messages: {id: number, title: string, body: string, imgUrl: string}[] }) => {
  return (
    <>
    <h2 className='sub-title'>Messages</h2>
    {
        messages && messages.map(message => (
            <Message key={message.id} message={message}/>
        ))
    }
    </>
  )
}

export default Messages