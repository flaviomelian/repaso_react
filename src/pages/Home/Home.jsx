import PropTypes from "prop-types";
import "./Home.css";

const Home = ({ name, profileImg }) => {
  //pillamos la propiedad name del objeto 'props' y la metemos en el div para mostrarla (se queja de la validacion, pero funciona)
  return (
    <div>
      <h1>Welcome {name}</h1>
      <img src={profileImg} />
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string,
  profileImg: PropTypes.string,
};

export default Home;
