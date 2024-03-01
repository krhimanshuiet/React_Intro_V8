export type Animal = "dog" | "cat" | "bird" | "repetile" | "rabbit";

export interface Pet {
    id:number;
    name:string;
    animal:Animal;
    description:string;
    breed:string;
    images:string [];
    city:string;
    state:string;
}

export interface PetAPIResponse {
    numberOfResults:number,
    startIndex:number,
    endIndex:number,
    hasNext:boolean,
    pets:Pet[]
}

export interface fetchBreedListApiResponse{
    animal:Animal,
    breeds:string[]
}