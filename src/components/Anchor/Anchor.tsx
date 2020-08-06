import React from "react";

const Anchor: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      id={id}
      style={{
        position: "relative",
        top: "-4em",
      }}
    />
  );
};

export default Anchor;
