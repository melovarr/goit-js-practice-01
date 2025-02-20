const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};


console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); // повертає рядок "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order("Viennese")); // повертає рядок "Sorry, there is no pizza named «Viennese»"
