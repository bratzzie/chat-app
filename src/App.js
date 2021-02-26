import React from 'react'
import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

 const App = () => {
    return (
        <ChatEngine 
        height="100vh"
        projectID=""
        userName=""
        userSecret=""
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App;