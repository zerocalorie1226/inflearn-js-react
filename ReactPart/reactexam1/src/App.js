// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function App() {
  let name = "조성찬";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const num = 5;

  return (
    <div style={style.App}>
      <MyHeader />

      <h2 style={style.h2}>안녕 {name} </h2>
      <b style={style.bold_text}>
        {num}는 : {num % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
