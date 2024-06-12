import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import { UserContext } from "./Context/User";

function App() {
  const [page, setPage] = useState("Home");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const userName = { name, setName };
  //const username = "Lolo";
  /*const person = {
    name: "Cirilo",
    surname: "Arteaga",
    age: 56,
    pet: "Juana la Iguana",
    profileImg:
      "https://media.istockphoto.com/id/684822872/es/foto/triste-hombre-mayor-en-el-bar.jpg?s=612x612&w=is&k=20&c=XMVqdrYFPNIgls212nRsRggt1bZPlXUImofR6EXwqXA=",
    petImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Polish_20230102_131307806_%281%29.jpg/1280px-Polish_20230102_131307806_%281%29.jpg",
  };*/

  const handlePage = () => {
    page === "Home" ? setPage("Profile") : setPage("Home"); //si estoy en Home, cambio a Profile y viceversa
  };

  const handleProfileImg = (profileImg) => {
    setImg(profileImg); //setear la imagen recibida
  };

  return (
    <>
      <Header />
      <button onClick={handlePage}>
        {page === "Home" ? <p>Go to Profile</p> : <p>Go to Home</p>}
      </button>
      {
        <UserContext.Provider value={userName}>
          {page === "Home" ? (
            <Home name={userName.name} profileImg={img} />
          ) : (
            <Profile user={userName} getImg={handleProfileImg} />
          )}
        </UserContext.Provider>
      }
      {/*1ª parte de la ternaria: Pasar username a Home en una prop*/}
      {/*2ª parte de la ternaria: Pasar person a Profile en una prop*/}
      <UserContext.Provider value={userName}>
        <label>
          Name:
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
