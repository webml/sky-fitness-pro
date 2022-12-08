const ListItem = (props) => {
  return (
    <li key={props.item}>
      <p>{props.item}</p>
    </li>
  );
};

export default ListItem;
