import Component from 'react';
import './PanelComponents.css'

function PanelComponents(props)
{
return(<div class="comps"><<img class="imgc" src={props.photo}/><center><p class="ctext">{props.name}</p></center></div>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<PanelComponents photo="Pranav.png" name="Pranav"/>);

