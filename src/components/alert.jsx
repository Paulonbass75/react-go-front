const Alert = (props) => {
  return (
    <div className={"" + props.className} role="alert">
      {props.message}
    </div>
  );
};

export default Alert;
