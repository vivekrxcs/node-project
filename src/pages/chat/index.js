import { useState } from 'react';


const chat = () => {
  
  const [values, setValues] = useState({ 
    message: '',
    name: 'vivek',
    avatar:'',
   })
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleSendMessage =  (event) => {
    event.preventDefault();
    console.log(values.message.length);
		/* Disable sendMessage if the message is empty */
		if( values.message.length > 0 ) {
			//this.props.sendMessageLoading(values.message, values.avatar, values.name);
			/* Reset input after send*/
			//this.messageInput.value = '';
		}
  }
  
	
  return (
    <div>
      <div className='chatApp__convTimeline'>
        <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
          <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar" />
          <div className="chatApp__convMessageValue">Indeed.... We're gonna have to fix that. 🌮🍻</div>
        </div>
        <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
          <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar" />
          <div className="chatApp__convMessageValue">Great! It's been a while... 🙃</div>
        </div>        
      </div>
      <div className='chatApp__convSendMessage clearfix'>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="hidden"
            className="name"			
            value={values.name}
          />
          <input
            className="image"
            type="hidden"					
            value={values.avatar}
          />
          <input
            type="text"		
            value={values.message}
            onChange={handleChange('message')}			
            className={"chat_input"}
            placeholder="Text message"					
            tabIndex="0"
          />
          <button className={'chat_button' } onClick={handleSendMessage} type="button"> 
            snd
          </button>
        </form>
      </div>
    </div>
  )
}
export default chat
