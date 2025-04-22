import React from "react";

interface ButtonComponentProps {
  text: string;
}

const styles = {
  color: "white",
  padding: "20px",
  borderRadius: "4px",
  backgroundColor: "cornflowerblue",
};

export const Button: React.FC<ButtonComponentProps> = ({ text }) => {
  return <button style={styles}>{text}</button>;
};
