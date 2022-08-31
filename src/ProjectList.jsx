function ProjectList(props) {
    return (
      <div className="box-img">{props.projects.map((a,i) => <img className="img" key={i} src={a.img} alt={i}/>)}</div>
    );
  }
    
export default ProjectList;