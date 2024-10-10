const Pet = (props) => {
  return (
    <div>
      <h1>{props.animal}</h1>
      <h2>{props.name}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
