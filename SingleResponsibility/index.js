import logCalorieSurplus from "./logger.js";

class CalorieTacker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  tackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logCalorieSurplus("Max calories exceeded");
    }
  }
}

const calorieTacker = new CalorieTacker(2000);
calorieTacker.tackCalories(5000);
calorieTacker.tackCalories(100);
calorieTacker.tackCalories(700);
