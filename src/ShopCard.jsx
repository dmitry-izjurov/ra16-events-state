function ShopCard(props) {
  return (
    <div className="box__card">
      <div className="box__card-header">
        <header className="card__header">{props.card.name}</header>
        <span className="card__color">{props.card.color}</span>
      </div>
      <img className="img-store" src={props.card.img} alt={props.icon} />
      <div className="box_price">
        <span className="price">${props.card.price}</span>
        <button className="button" type="button">add to cart</button>
      </div>
    </div> 
  );
  }
export default ShopCard;
