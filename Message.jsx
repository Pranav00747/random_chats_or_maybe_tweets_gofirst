import Component from 'react';
import './Message.css';

function Message(props)
{
 return(<div class="msg"><img class="msgimg" src={props.photo}/><h4 class="tname">{props.name}/><p class="main_tweet_chat">{props.tweet_chat}</p></div>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Message photo="Pranav.png" name="Pranav" tweet_chat="I love sooo much Anjali !."/>);
