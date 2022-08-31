import ShopCard from './ShopCard';

function CardsView(props) {
  return (
    <div className="box__cards">{props.cards.map((a,i) => <ShopCard card = {a} key={i}/>)}</div>
  );
}
export default CardsView;
