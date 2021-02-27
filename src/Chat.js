import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile,  InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect} from 'react'
import "./Chat.css"



function Chat() {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()  * 5000 ));
     },  []);

     const sendMessage = (e) => {
        e.preventDefault ();
        console.log("You typed >>>", input);

        setInput("");
     }
 
    return  (
        <div className="chat">

            <div className="chat__header">
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  />

              <div className="chat__headerInfo">
                  <h3>Room name</h3>
                  <p>Last seen at ...</p>
              </div>
              <div className="chat__headerRight">
                  <IconButton>
                      <SearchOutlined />
                  </IconButton>
                  <IconButton>
                      <AttachFile />
                  </IconButton>
                  <IconButton>
                      <MoreVert />
                  </IconButton>
              </div>
            </div>
            <div className="chat__body">
              <p className={`chat__message ${true &&
              "chat__reciever"}`}>
              <p className="chat__name">Sonny Sangha</p>
                  Hey guys
                  <span className="chat__timestamp">
                      3:50pm
                  </span>
                  </p>
                  
              
            </div>
            <div className="chat__footer">
             <InsertEmoticon />
             <form>
                 <input 
                 value={input} 
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Type a message"
                 type="text" 
                 />
                 <button 
                 onClick={sendMessage}
                 type="submit">Send a message</button>
             </form>
             <Mic />
            </div>
            
        </div>
    )
}

export default Chat
