import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import TextSection from "./components/text-section/textSection";
import Input from "./components/forms/input";

function App() {
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="grid grid-cols-2 gap-28">
          <div className="bg-teal-400 pl-6">
            <TextSection
              description="Faire votre Shynleï, jouer avec, c'est l'occasion d'écouter vos rêves, de les partager et de prendre confiance dans votre richesse."
              title="Pour commencer..."
              textColor="text-white"
            />
            <Input label="Nom et prénom" name="name" placeholder="entre le nom et le prénom" description="" />
            <Input label="Mon intention" name="intention" placeholder="entre l'intention" description="L'intention, l'objectif de ce Shynlei" />
          </div>
          <div>
            <TextSection
              description="7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider.."
              title="Votre Shynleï c'est.."
              textColor="text-gray-700"
            />
          </div>
        </div>
      </div>
  );
}

export default App;
