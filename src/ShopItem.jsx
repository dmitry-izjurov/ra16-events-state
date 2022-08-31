function ShopItem(props) {
    return (
      <li className="item">
        <img className="item__img-store" src={props.item.img} alt={props.icon} />
        <header className="item__header">{props.item.name}</header>
        <span className="item__color">{props.item.color}</span>
        <span className="price">${props.item.price}</span>
        <button className="button" type="button">add to cart</button>
      </li> 
    );
    }
  export default ShopItem;
  