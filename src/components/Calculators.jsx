import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Calculators() {
  const [bmiData, setBmiData] = useState(null);
  const [rmResult, setRmResult] = useState(null);
  const [showRmInfo, setShowRmInfo] = useState(false);

  /* ================= BMI CALCULATOR ================= */

  const calculateBMI = (weightKg, feet, inches) => {
    if (!weightKg || !feet) return;

    const heightMeters =
      feet * 0.3048 + (inches ? inches * 0.0254 : 0);

    const bmi = weightKg / (heightMeters * heightMeters);
    const bmiValue = bmi.toFixed(1);

    // BMI Category
    let category = "";
    let message = "";

    if (bmi < 18.5) {
      category = "Underweight";
      message = "You need to gain healthy weight.";
    } else if (bmi < 25) {
      category = "Normal";
      message = "You have a healthy body weight.";
    } else if (bmi < 30) {
      category = "Overweight";
      message = "Fat loss and activity recommended.";
    } else {
      category = "Obese";
      message = "Consult trainer & follow fat loss routine.";
    }

    // Calories (UPDATED)
    const maintenanceCalories = Math.round(weightKg * 30);
    const gainCalories = Math.round(weightKg * 35);
    const lossCalories = Math.round(weightKg * 25);

    setBmiData({
      bmiValue,
      category,
      message,
      maintenanceCalories,
      gainCalories,
      lossCalories,
    });
  };

  /* ================= 1RM CALCULATOR ================= */

  const calculate1RM = (weight, reps) => {
    if (!weight || !reps) return;
    const rm = weight * (1 + reps / 30);
    setRmResult(Math.round(rm));
  };

  return (
    <section className="section dark" id="calculators">
      <SectionTitle title="Fitness Calculators" />

      <div className="calculator-grid">

        {/* ===== BMI CARD ===== */}
        <div className="calculator-card">
          <h4>BMI Calculator</h4>

          <input type="number" placeholder="Weight (kg)" id="bmi-w" />
          <div className="height-group">
            <input type="number" placeholder="Height (ft)" id="bmi-ft" />
            <input type="number" placeholder="Height (in)" id="bmi-in" />
          </div>

          <button
            onClick={() =>
              calculateBMI(
                document.getElementById("bmi-w").value,
                document.getElementById("bmi-ft").value,
                document.getElementById("bmi-in").value
              )
            }
          >
            Calculate BMI
          </button>

          {/* ===== BMI RESULT ===== */}
          {bmiData && (
            <div className="result">
              <p><strong>BMI:</strong> {bmiData.bmiValue}</p>
              <p><strong>Status:</strong> {bmiData.category}</p>
              <p className="note">{bmiData.message}</p>

              <hr />

              <p>
                ⚖️ <strong>Calories (Maintenance):</strong>{" "}
                {bmiData.maintenanceCalories} kcal/day
              </p>

              <p>
                💪 <strong>Calories (For Gain):</strong>{" "}
                {bmiData.gainCalories} kcal/day
              </p>

              <p>
                🔥 <strong>Calories (For Loss):</strong>{" "}
                {bmiData.lossCalories} kcal/day
              </p>
            </div>
          )}
        </div>

        {/* ===== 1RM CARD ===== */}
        <div className="calculator-card">
          <h4 className="card-title">
            1RM Strength Calculator
            <span
              className="info-icon"
              onClick={() => setShowRmInfo(true)}
            >
              ⓘ
            </span>
          </h4>

          <input type="number" placeholder="Weight Lifted (kg)" id="rm-w" />
          <input type="number" placeholder="Reps" id="rm-r" />

          <button
            onClick={() =>
              calculate1RM(
                document.getElementById("rm-w").value,
                document.getElementById("rm-r").value
              )
            }
          >
            Calculate 1RM
          </button>

          {rmResult && (
            <div className="result">
              Estimated 1RM: <strong>{rmResult} kg</strong>
            </div>
          )}
        </div>

        {/* ===== 1RM INFO MODAL ===== */}
        {showRmInfo && (
          <div
            className="modal-overlay"
            onClick={() => setShowRmInfo(false)}
          >
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>What is 1RM?</h3>
              <p>
                1RM (One-Repetition Maximum) is the maximum weight you can lift
                for one complete repetition with proper form.
              </p>
              <p>
                It is commonly used to plan safe and effective strength training
                without lifting maximum weight directly.
              </p>
              <button onClick={() => setShowRmInfo(false)}>Close</button>
            </div>
          </div>
        )}

        {/* ===== WATER CARD ===== */}
        <div className="calculator-card info">
          <h4>Daily Water Intake</h4>
          <div className="water">💧 4 – 5 Litres / day</div>
          <p className="note">Recommended for active gym users</p>
        </div>

      </div>
    </section>
  );
}
