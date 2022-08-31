import ShopItem from './ShopItem';

function ListView(props) {
  return (
    <ul className="list__items">{props.items.map((a,i) => <ShopItem item = {a} key={i}/>)}</ul>
  );
}
export default ListView;
