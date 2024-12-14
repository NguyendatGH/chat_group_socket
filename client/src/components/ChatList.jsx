import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function SenderChat({ message, username, avatar }) {
    return (
        <div className='chat_sender'>
            <img src={avatar} alt="" />
            <p>
                <strong>{username}</strong> <br />
                {message}
            </p>
        </div>
    )
}

function ReceiverChat({ message, username, avatar }) {
    return (
        <div className='chat_receiver'>
            <img src={avatar} alt="" />
            <p>
                <strong>{username}</strong> <br />
                {message}
            </p>
        </div>
    )
}

const ChatLists = ({ chats }) => {
    console.log("chatlist:  ", chats);
    const endOfMessages = useRef()
    const user = localStorage.getItem('user')

    useEffect(() => {
        scrollToBottom()
    }, [chats])

    const scrollToBottom = () => {
        endOfMessages.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className='chats_list'>
            {chats.map((chat, index) => {
                if (chat.username === user) {
                    return (
                        <SenderChat
                            key={index}
                            message={chat.message}
                            username={chat.username}
                            avatar={chat.avatar}
                        />
                    )
                } else {
                    return (
                        <ReceiverChat
                            key={index}
                            message={chat.message}
                            username={chat.username}
                            avatar={chat.avatar}
                        />
                    )
                }
            })}
            <div ref={endOfMessages}></div>
        </div>
    )
}

// PropTypes for SenderChat
SenderChat.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

// PropTypes for ReceiverChat
ReceiverChat.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

// PropTypes for ChatLists
ChatLists.propTypes = {
    chats: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default ChatLists
