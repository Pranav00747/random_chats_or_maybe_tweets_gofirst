import Component from 'react';
import './ButtonP.css'

function ButtonP(props)
{
return(<div class="btn">{props.text}</div>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<ButtonP text="Send"/>);
