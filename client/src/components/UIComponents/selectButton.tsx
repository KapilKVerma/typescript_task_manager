import React, { useState } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  title: string;
  image?: string;
}

const SelectButton: React.FC<Props> = ({ title, image }) => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="outline-dark"
        className="input__field__select--button"
        active={buttonActive}
        onClick={() => setButtonActive(!buttonActive)}
      >
        {image ? (
          <div className="d-flex flex-row justify-content-start">
            <div
              className="input__field__select--button--image"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="p-1 pl-2 pr-3">{title}</div>
          </div>
        ) : (
          <div className="p-1 pl-2 pr-3">{title}</div>
        )}
      </Button>
    </>
  );
};

export default SelectButton;
