import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

const Data = {
  Name: "Afham",
  Desc: "React developer",
  Projects: [
    {
      Image: "http://i.imgur.com/Mldxxay.jpg",
      Desc: "lkhafdlkhsdfb",
      Tags: "Fornksfjn"
    },
    {
      Image: "https://imgur.com/undefined",
      Desc: "lkhafdlkhsdfb",
      Tags: "sfn"
    },
    {
      Image: "http://i.imgur.com/Mldxxay.jpg",
      Desc: "lkhafdlkhsdfb",
      Tags: "tyhyjhsfjn"
    }
  ]
};
window.document.title = Data.Name + "~Resume";

export default function App() {
  return (
    <div className="App">
      <Header dark={true} Name={Data.Name}></Header>
      <main>
        <Intro Name={Data.Name} Desc={Data.Desc} />
        <Portfolio Projects={Data.Projects} />
      </main>
      <Footer Name={Data.Name}></Footer>
    </div>
  );
}
