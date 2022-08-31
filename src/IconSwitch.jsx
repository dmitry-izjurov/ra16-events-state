import logoList from './logo_list.png'
import logoModule from './logo_module.png'

function IconSwitch(props) {
  let logo;
  if (props.icon === 'view_list') logo = logoList
  else if (props.icon === 'view_module') logo = logoModule

  return (
    <div className="box__img-store" onClick={props.onSwitch}>
      <img className="img-store__icon" src={logo} alt={props.icon} />
    </div>
      
  );
}
export default IconSwitch;
