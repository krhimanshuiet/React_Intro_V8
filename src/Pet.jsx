import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, state, city, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h1>
          {animal} - {breed} - {city},{state}
        </h1>
      </div>
    </Link>
  );
};

export default Pet;