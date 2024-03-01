import { QueryFunction } from "@tanstack/react-query";
import { Animal, PetAPIResponse } from "./APIResponsesTypes";

const fetchSearch:QueryFunction<PetAPIResponse,["search",{location:string,animal:Animal,breed:string}]> = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );
  if (!apiRes.ok) {
    throw new Error(`details/${animal} ${location} ${breed} fetch not ok`);
  }
  return apiRes.json();
};

export default fetchSearch;
