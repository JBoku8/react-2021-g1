const Welcome = (props) => {
  const styles = {
    color: "red",
    textAlign: "center",
  };

  return (
    <div>
      <h1 className="title" style={styles}>
        {props.title}
      </h1>
    </div>
  );
};

export default Welcome;
