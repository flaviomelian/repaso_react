import PropTypes from "prop-types";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./Profile.css";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/User";

const Profile = ({ user, getImg }) => {
  //le he hecho destructuring a props, basicamente es como si le hubiera pasado "props.name" (porque props es un object, por eso le puedo hacer destructuring)
  const [img, setImg] = useState("");
  const { name, setName } = useContext(UserContext); //Obtener el dato através del contexto
  const handleImg = (imgChild) => {
    setImg(imgChild); //setear la imagen recibida
    getImg(img); //pasarsela al padre
  }; //guardamos en la imagen del padre la imagen que recibe del hijo
  return (
    <div>
      <h2>Profile: {name}</h2>{" "}
      {/*Profile: {user.name} || SON LO MISMO, ahora no se estan usando props, sino contextos*/}
      <ProfileCard info={user} getImg={handleImg} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.string,
  getImg: PropTypes.func,
};

export default Profile;
