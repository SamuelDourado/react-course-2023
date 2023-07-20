function Card(props) {
    const {title, image, description} = props.concept;
  return (
    <ul id="concepts">
      <li className="concept">
        <img src={image} alt="TODO: TITLE" />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </ul>
  );
}

export default Card;
