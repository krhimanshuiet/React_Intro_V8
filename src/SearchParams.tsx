import {
  useState,
  // useContext,
  useMemo,
  useDeferredValue,
  useTransition,
} from "react";
import useBreedList from "./hooks/useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
// import AdoptedPetContext from "./AdoptedPetContext";
import { Animal } from "./APIResponsesTypes";
import { useSelector } from "react-redux";
import { all } from "./redux/feature/searchParamsSlice";
import { useDispatch } from "react-redux";
const ANIMALS:Animal[] = ["bird", "cat", "dog", "rabbit", "repetile"];

const SearchParams = () => {
  // eslint-disable-next-line no-unused-vars
  // const [adoptedPet, _] = useContext(AdoptedPetContext);
  const adoptedPet = useSelector((state:any) => state?.adoptedPet?.value)
  //   const [location, setLocation] = useState("");
  //   const [breed, setBreed] = useState("");
  // const [requestParam, setRequestParams] = useState({
  //   location: "",
  //   animal: "" as Animal,
  //   breed: "",
  // });
  const requestParam = useSelector((state:any) => state.searchParamsSlice)
  const dispatch = useDispatch()
  const [animal, setAnimal] = useState("" as Animal);
  //   const [pets, setPets] = useState();
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParam.value], fetchSearch);
  const pets = results?.data?.pets ?? [];
  const deferedPets = useDeferredValue(pets);
  const renderedPets = useMemo(
    () => <Results pets={deferedPets} />,
    [deferedPets],
  );
  const [isPending, startTransition] = useTransition();

  //   useEffect(() => {
  //     requestPets();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   async function requestPets() {
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //     );
  //     const json = await res.json();
  //     setPets(json.pets);
  //   }

  return (
    <div className="my-0 mx-auto w-11/12 ">
      <form
        className="mb-10 flex  flex-col items-center justify-center rounded-lg bg-gray-100  p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            animal: formData.get("animal")?.toString() as Animal ?? "" as Animal,
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          console.log(obj);
          startTransition(() => {
            // setRequestParams(obj);
            dispatch(all(obj))
          });

          //   requestPets();
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            className="search-input"
            type="text"
            // onChange={(e) => setLocation(e.target.value)}
            // value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            className="search-input"
            onChange={(e) => {
              setAnimal(e.target.value as Animal);
              //   setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value as Animal)
            }}
            value={animal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            className="search-input grayed-out-disabled"
            disabled={!breeds?.length}
            // onChange={(e) => setBreed(e.target.value)}
            // value={breed}
          >
            <option />
            {breeds?.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          {isPending ? "loading..." : "Submit"}
        </button>
      </form>
      {renderedPets}
    </div>
  );
};

export default SearchParams;
