import React, { useState, useContext, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
const Modal = lazy(() => import("./Modal"));
import AdoptedPetContext from "./AdoptedPetContext";
const Details = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error(
      "why did you not give me an id.I wanted an id.I have no id.",
    );
  }
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const results = useQuery(["details", id], fetchPet);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results?.isError) {
    return <h2>ohoo</h2>;
  }

  if (results?.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🧿</h2>
      </div>
    );
  }
  const pet = results?.data?.pets?.at(0);
  if (!pet) {
    throw new Error("no pet here");
  }

  return (
    <div className="details">
      <Carousel images={pet?.images} />
      <div>
        <h1>{pet?.name}</h1>
        <h2>
          {pet?.animal} - {pet?.breed} - {pet?.city},{pet?.state}
          <button className="bg-red-400" onClick={() => setShowModal(true)}>
            Adopt {pet.name}
          </button>
          <p>{pet?.description}</p>
          {showModal ? (
            <Modal>
              <>
                <h1>Would You like to adopt {pet.name}</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    yes
                  </button>
                  <button onClick={() => setShowModal(false)}>no</button>
                </div>
              </>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
