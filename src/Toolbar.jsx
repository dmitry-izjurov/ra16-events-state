function Toolbar(props) {
  const results = [];
  const selected = props.selected.category;
  props.filters.forEach(a => {
    if (a === selected) results.push(<li className="filter filter_active" key={a} onClick={props.onSelectFilter}>{a}</li>)
    else results.push(<li className="filter" key={a} onClick={props.onSelectFilter}>{a}</li>);
  });
  return (
    <ul className="list-filters">{results}</ul>
  );
}
    
export default Toolbar;
