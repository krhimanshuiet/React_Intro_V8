import { Animal } from "./APIResponsesTypes";
import {Pet as PetType} from "./APIResponsesTypes"
import Pet from "./Pet";
const Results = ({ pets }:{pets:PetType[]}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets?.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets?.map((pet) => <Pet key={pet.id} {...pet} />)
      )}
    </div>
  );
};

export default Results;
