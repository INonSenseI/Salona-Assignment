import "./card.css";
import { ReactNode } from "react";

// Assuming basic reusability structure here

interface Props {
  heading: ReactNode;
  description: ReactNode;
  tag?: ReactNode;
  img: string;
  buttonText?: ReactNode;
  onClick?: () => void;
}

function Card({ heading, description, tag, img, buttonText, onClick }: Props) {
  var tagText = <p className="tag-text">{tag}</p>;
  var button = <button onClick={onClick}>{buttonText}</button>;

  return (
    <div className="card">
      {/*I presume the pattern would be an svg/... but here is an estimate*/}
      <div className="pattern">
        <div />
        <div />
        <div />
      </div>
      <div className="background-blur" />
      <div className="text">
        {tag && tagText}
        <h1>{heading}</h1>
        <p className="description">{description}</p>
        {buttonText && button}
      </div>
      <div className="image-section">
        <img alt="image" src={img} />
      </div>
    </div>
  );
}

export default Card;
