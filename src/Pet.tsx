import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images:string[];
  id:number,
  state:string;
  city:string;
}

const Pet:React.FunctionComponent<IProps> = ({ name, animal, breed, images, state, city, id }):JSX.Element => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images && images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container" >
        <img src={hero} alt={name} data-testid="thumbnail" />
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
