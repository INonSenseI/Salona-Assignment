import "./App.css";
import Card from "./components/Card";
import ExampleImage from "./assets/images/app-preview.png";

function App() {
  var heading = (
    <>
      Více zákazníků
      <br />
      Větší tržby
    </>
  );
  var tag = <>Vaše klientela</>;
  var description = (
    <>
      Zvyšte viditelnost vašeho salonu! Díky online profilu a snadné správě
      rezervací
      <span className="highlight-text">
        &nbsp;zvýšíte vaše tržby, přilákáte nové zákazníky&nbsp;
      </span>
      a budete mít o všem lepší přehled.
    </>
  );
  var buttonText = <>Registrovat salon</>;

  return (
    <div>
      <div className="example">
        <Card
          heading={heading}
          description={description}
          tag={tag}
          img={ExampleImage}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}

export default App;
