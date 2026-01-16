import { useState } from "react";
import SectionTitle from "./SectionTitle";

/* ================= LOCAL GYM FOOD DATABASE ================= */
/* Approx calories per base serving */

const foodDB = {
  breakfast: [
    { name: "Oats", unit: "g", baseQty: 50, calories: 190 },            // plain oats, no honey
    { name: "Milk", unit: "ml", baseQty: 200, calories: 90 },          // toned milk
    { name: "Brown Bread", unit: "slices", baseQty: 2, calories: 140 },
    { name: "Peanut Butter", unit: "tbsp", baseQty: 1, calories: 80 }, // thin spread
    { name: "Egg Omelette", unit: "eggs", baseQty: 2, calories: 130 }, // little oil
    { name: "Boiled Eggs", unit: "eggs", baseQty: 2, calories: 140 },
    { name: "Roti (local)", unit: "pieces", baseQty: 1, calories: 90 }, // small hotel roti
    { name: "Poha / Upma", unit: "bowl", baseQty: 1, calories: 220 },  // less oil
    { name: "Banana (small)", unit: "pieces", baseQty: 1, calories: 90 },
    { name: "Sprouts", unit: "bowl", baseQty: 1, calories: 150 }
  ],

  lunch: [
    { name: "Rice (boiled)", unit: "cups", baseQty: 1, calories: 180 },
    { name: "Dal (thin)", unit: "bowl", baseQty: 1, calories: 140 },
    { name: "Vegetables (sabzi)", unit: "bowl", baseQty: 1, calories: 100 },
    { name: "Roti (local)", unit: "pieces", baseQty: 2, calories: 180 },
    { name: "Curd (plain)", unit: "bowl", baseQty: 1, calories: 90 },
    { name: "Rajma / Chole", unit: "bowl", baseQty: 1, calories: 210 },
    { name: "Paneer Bhurji", unit: "bowl", baseQty: 1, calories: 240 }, // less butter
    { name: "Soybean Curry", unit: "bowl", baseQty: 1, calories: 220 },
    { name: "Boiled Chicken", unit: "g", baseQty: 150, calories: 220 },
    { name: "Grilled Chicken", unit: "g", baseQty: 150, calories: 240 }
  ],

  snacks: [
    { name: "Boiled Eggs", unit: "eggs", baseQty: 2, calories: 140 },
    { name: "Roasted Chana", unit: "handful", baseQty: 1, calories: 120 },
    { name: "Peanuts (roasted)", unit: "handful", baseQty: 1, calories: 150 },
    { name: "Boiled Corn", unit: "cup", baseQty: 1, calories: 120 },
    { name: "Fruit (Apple / Orange)", unit: "pieces", baseQty: 1, calories: 80 },
    { name: "Milk", unit: "ml", baseQty: 200, calories: 90 },
    { name: "Sprouts Chaat", unit: "bowl", baseQty: 1, calories: 150 }
  ],

  dinner: [
    { name: "Roti (local)", unit: "pieces", baseQty: 2, calories: 180 },
    { name: "Vegetables (sabzi)", unit: "bowl", baseQty: 1, calories: 100 },
    { name: "Paneer / Soy Chunks", unit: "bowl", baseQty: 1, calories: 220 },
    { name: "Dal (thin)", unit: "bowl", baseQty: 1, calories: 140 },
    { name: "Salad (raw)", unit: "plate", baseQty: 1, calories: 50 },
    { name: "Grilled Chicken", unit: "g", baseQty: 150, calories: 240 }
  ],

  // ✅ EXTRA VERY COMMON LOCAL FOODS (ADDED)
  localExtras: [
    { name: "Sattu Drink", unit: "glass", baseQty: 1, calories: 120 },
    { name: "Chura + Milk", unit: "bowl", baseQty: 1, calories: 180 },
    { name: "Chana Dal", unit: "bowl", baseQty: 1, calories: 160 },
    { name: "Aloo Sabzi", unit: "bowl", baseQty: 1, calories: 140 }
  ]
};


/* ================= CALORIE DISTRIBUTION ================= */

const calorieSplit = {
  breakfast: 0.25,
  lunch: 0.35,
  snacks: 0.15,
  dinner: 0.25
};

/* ================= SMART FOOD PICKER ================= */

const pickFoodsForMeal = (foods, targetCalories) => {
  let selected = [];
  let total = 0;

  for (let food of foods) {
    if (total >= targetCalories - 50) break;

    let multiplier = 1;

    // Increase quantity if calories are still low
    if (total + food.calories * 2 <= targetCalories) {
      multiplier = 2;
    }

    const foodCalories = food.calories * multiplier;

    if (total + foodCalories <= targetCalories + 50) {
      selected.push({
        ...food,
        quantity: food.baseQty * multiplier,
        totalCalories: foodCalories
      });
      total += foodCalories;
    }
  }

  return { selected, total };
};

export default function Diet() {
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [showPlan, setShowPlan] = useState(false);

  const getCaloriesByMeal = () => ({
    breakfast: Math.round(calories * calorieSplit.breakfast),
    lunch: Math.round(calories * calorieSplit.lunch),
    snacks: Math.round(calories * calorieSplit.snacks),
    dinner: Math.round(calories * calorieSplit.dinner)
  });

  const mealCalories = getCaloriesByMeal();

  const goalText = {
    gain: "Muscle Gain (Calorie Surplus)",
    maintain: "Maintenance (Balanced Diet)",
    loss: "Fat Loss (Calorie Deficit)"
  };

  const breakfastPlan = pickFoodsForMeal(foodDB.breakfast, mealCalories.breakfast);
  const lunchPlan = pickFoodsForMeal(foodDB.lunch, mealCalories.lunch);
  const snacksPlan = pickFoodsForMeal(foodDB.snacks, mealCalories.snacks);
  const dinnerPlan = pickFoodsForMeal(foodDB.dinner, mealCalories.dinner);

  return (
    <section className="section" id="diet">
      <SectionTitle title="Calorie-Based Diet Planner" />

      {/* ===== INPUTS ===== */}
      <div className="diet-input">
        <input
          type="number"
          placeholder="Enter required calories (e.g. 2600)"
          value={calories}
          onChange={(e) => setCalories(e.target.value)} 
          style={{border: "1px Solid Orange"}}
        />

        <select value={goal} onChange={(e) => setGoal(e.target.value)} style={{border: "1px Solid Orange"}}>
          <option value="gain">Muscle Gain</option>
          <option value="maintain">Maintenance</option>
          <option value="loss">Fat Loss</option>
        </select>

        <button onClick={() => setShowPlan(true)}>
          Generate Diet
        </button>
      </div>

      {/* ===== OUTPUT ===== */}
      {showPlan && calories && (
        <>
          <div className="diet-info">
            <p>
              Your daily calorie target is <strong>{calories} kcal</strong>.
              This plan is designed for <strong>{goalText[goal]}</strong> using
              affordable foods commonly consumed by local gym members.
            </p>
          </div>

          <div className="diet-card">
            <h3>Daily Meal Plan</h3>

            {/* Breakfast */}
            <div className="meal-block">
              <strong>Breakfast (~{mealCalories.breakfast} kcal)</strong>
              <ul>
                {breakfastPlan.selected.map((food, i) => (
                  <li key={i}>
                    • {food.name} – {food.quantity} {food.unit}
                    {" "}({food.totalCalories} kcal)
                  </li>
                ))}
              </ul>
              <small>Total: ~{breakfastPlan.total} kcal</small>
            </div>

            {/* Lunch */}
            <div className="meal-block">
              <strong>Lunch (~{mealCalories.lunch} kcal)</strong>
              <ul>
                {lunchPlan.selected.map((food, i) => (
                  <li key={i}>
                    • {food.name} – {food.quantity} {food.unit}
                    {" "}({food.totalCalories} kcal)
                  </li>
                ))}
              </ul>
              <small>Total: ~{lunchPlan.total} kcal</small>
            </div>

            {/* Snacks */}
            <div className="meal-block">
              <strong>Snacks (~{mealCalories.snacks} kcal)</strong>
              <ul>
                {snacksPlan.selected.map((food, i) => (
                  <li key={i}>
                    • {food.name} – {food.quantity} {food.unit}
                    {" "}({food.totalCalories} kcal)
                  </li>
                ))}
              </ul>
              <small>Total: ~{snacksPlan.total} kcal</small>
            </div>

            {/* Dinner */}
            <div className="meal-block">
              <strong>Dinner (~{mealCalories.dinner} kcal)</strong>
              <ul>
                {dinnerPlan.selected.map((food, i) => (
                  <li key={i}>
                    • {food.name} – {food.quantity} {food.unit}
                    {" "}({food.totalCalories} kcal)
                  </li>
                ))}
              </ul>
              <small>Total: ~{dinnerPlan.total} kcal</small>
            </div>
          </div>

          <div className="diet-card">
            <h3>Budget-Friendly Tip</h3>
            <p>
              Foods like rice, roti, dal, eggs, soy chunks, peanuts,
              seasonal vegetables, and milk help achieve calorie targets
              at low cost while supporting gym performance.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
