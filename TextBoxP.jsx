import Component from 'react';
import './TextBoxP.css'

class TextBoxP extends React.Component
{
 render()
 {
 return(<input type="text" class="chat_text_tweet"/>);
}
}
ReactDOM.createRoot(document.getElementById('root')).render(<TextBoxP/>);
