//funkce pro výběr předplatného
//jednodušší řešení - všechny plány nastavíme jako nevybrané 
const selectPlan = (planNumber) => {
  document.querySelector("#plan1").classList.remove("plan--selected");
  document.querySelector("#plan2").classList.remove("plan--selected");
  document.querySelector("#plan3").classList.remove("plan--selected");

  const selectedPlanElm = document.querySelector(`#plan${planNumber}`);
  selectedPlanElm.classList.add("plan--selected");
};


//Ověření, že když fci zavolám dvakrát, zůstane vybraný jen poslední plán.

selectPlan(1);
selectPlan(3);
