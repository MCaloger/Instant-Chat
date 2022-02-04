import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import ChatArea from './Components/ChatArea';
import NewMessage from './Components/NewMessage';
import { GenerateName } from './Chars'

import { MessageContextProvider, IMessageContext } from './Context'

const InitialValue: IMessageContext = {
  messages: []
}

const App: React.FC = () => {

  const name = GenerateName(6)

  useEffect(() => {
    localStorage.setItem("user", name)
  }, [])

  return (
    <div className="App">
      <MessageContextProvider value={InitialValue}>
        <AppHeader />
        <ChatArea />
        <NewMessage name={name} />
      </MessageContextProvider>
    </div>
  );
}

export default App;
