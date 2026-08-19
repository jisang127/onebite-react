const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(text);
    console.log(e);
  };

  //   console.log(props);
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
