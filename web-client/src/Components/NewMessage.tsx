import React, { useState } from 'react'
import styled from 'styled-components';
import { emitMessage } from '../api/socket';
import { Message } from '../Models/Message';


const NewMessageContainer = styled.div`
    height: 50px;
    width: 100%;
    background: #2196F3;
    display: flex;
    flex-direction: column;
    background: white;
    &>* {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`
const NewMessagEntry = styled.textarea`
    width: 100%;
    height: 100%;
    flex: 4;
    resize: none;
`

export default function NewMessage(props) {

    const [message, setMessage] = useState('');

    let handleEnterPress = (e: any) => {
        if(e.key === 'Enter' && message !== ''){
            let constructedMessage: Message = new Message(message)
            emitMessage(constructedMessage);

            // reset textbox
            setMessage('');
        }
    }

    return (
        <div>
            <NewMessageContainer>
                <NewMessagEntry placeholder={`You are ${props.name}, enter message here.`} onChange={e => setMessage(e.target.value)} onKeyUp={handleEnterPress} value={message}></NewMessagEntry>
            </NewMessageContainer>
        </div>
    )
}
