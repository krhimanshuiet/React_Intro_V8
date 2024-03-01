import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";
const AdoptedPetContext = createContext<[Pet | null,(adoptedPet:Pet) => void]>([{
    id:1334,
    name:"Fido",
    animal:"cat",
    breed:"kkk",
    city:"usa",
    description:"hello",
    images:[],
    state:"xjd"
},
() => {}
]
);

export default AdoptedPetContext;
