import "./App.css";
import Navbar from "./components/navbar/navbar";
import TextSection from "./components/text-section/textSection";
import Input from "./components/forms/input";
import StepSection from "./components/steps/StepSection";
import { Icon } from "./components/Icon";

function App() {
  const steps = [
    {
      icon: <Icon name="Page-1" />,
      description: "1. Le rève liber expression",
    },
    {
      icon: <Icon name="Page-2" />,
      description: "2. Le sens éclaire le parcours",
    },
    {
      icon: <Icon name="Page-3" />,
      description: "3. La différence rend unique",
    },
    {
      icon: <Icon name="Page-4" />,
      description: "4. La valeur humaine met en mouvement",
    },
    { icon: <Icon name="Page-5" />, description: "5. La clé exprime le style" },
    {
      icon: <Icon name="Page-6" />,
      description: "6. Le parcours associe rêve et réalité",
    },
    {
      icon: <Icon name="Page-7" />,
      description: "7. Le ciel bleu revole T'alignement ",
    },
  ];

  const handleExpressDreams = async () => {
    try {
      const response = await fetch('https://api.db-ip.com/v2/free/self');
      const data = await response.json();
      const ipSum = calculateIPSum(data.ipAddress);

      if (ipSum > 100) {
        alert('OK');
      } else {
        alert('KO');
      }
    } catch (error) {
      console.error('Error fetching IP information:', error);
    }
  };

  const calculateIPSum = (ipAddress:string) => {
    // Split the IP address by '.' and convert each part to a number, then sum them up
    return ipAddress.split('.').reduce((sum, num) => sum + parseInt(num), 0);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="wave hidden sm:block"></div>
      <Navbar />
      <div className="grid gap-28  grid-cols-1 sm:grid-cols-2">
        <div className="px-20 hidden sm:block">
          <TextSection
            description="Faire votre Shynleï, jouer avec, c'est l'occasion d'écouter vos rêves, de les partager et de prendre confiance dans votre richesse."
            title="Pour commencer..."
            textColor="text-white"
          />
          <Input
            label="Nom et prénom"
            name="name"
            placeholder="entre le nom et le prénom"
            description=""
          />
          <Input
            label="Mon intention"
            name="intention"
            placeholder="entre l'intention"
            description="L'intention, l'objectif de ce Shynlei"
          />
        </div>
        <div>
          <TextSection
            description="7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider.."
            title="Votre Shynleï c'est.."
            textColor="text-gray-700"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
            {steps.map((step) => (
              <StepSection {...step} />
            ))}
          </div>
          <div className="flex justify-center mt-10">

          <button 
          onClick={handleExpressDreams}
          className="flexjustify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
            EXPRIMER MES REVES
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
