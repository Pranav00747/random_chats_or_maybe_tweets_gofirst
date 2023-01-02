import Component from 'react';
import './PanelP.css'

function PanelP(props)
{
  return(<div class="panel"><center><p class="phead">props.name</p></center></div>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<PanelP name="Chats or Tweets"/>);


