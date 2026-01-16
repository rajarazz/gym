import SectionTitle from "./SectionTitle";
import { useState } from "react";

import pushUpsImg from "../assets/push-ups-image.png";

const exercises = [

/* ================= CHEST ================= */
{
  name: "Push-Ups",
  muscles: "Chest, Triceps, Shoulders",
  difficulty: "Beginner",
  equipment: "Bodyweight",
  benefits: "Upper body strength",
  category: "Chest",
  image: "https://www.endomondo.com/wp-content/uploads/2024/08/Benefits-of-Push-Ups.jpg"
},
{
  name: "Bench Press",
  muscles: "Chest, Triceps",
  difficulty: "Intermediate",
  equipment: "Barbell",
  benefits: "Chest mass & strength",
  category: "Chest",
  image: "https://blog.muscleblaze.com/wp-content/uploads/2024/12/Artboard-1-copy-4.jpg",
},
{
  name: "Incline Bench Press",
  muscles: "Upper Chest",
  difficulty: "Intermediate",
  equipment: "Barbell / Dumbbells",
  benefits: "Upper chest development",
  category: "Chest",
  image: "https://sbdireland.com/cdn/shop/articles/How_To_Do_The_Incline_Bench_Press.png?v=1717670361&width=1080",
},
{
  name: "Chest Fly",
  muscles: "Chest",
  difficulty: "Beginner",
  equipment: "Dumbbells / Machine",
  benefits: "Chest shape & stretch",
  category: "Chest",
  image: "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/Chest-Fly.jpg?v=1720422168",
},
{
  name: "Cable Crossover",
  muscles: "Chest",
  difficulty: "Intermediate",
  equipment: "Cable Machine",
  benefits: "Chest isolation",
  category: "Chest",
  image: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/stock-photo-beautiful-young-caucasian-female-athlete-exercising-with-cable-crossover-machine-in-fitness-gym-1846648126-800x571.jpg",
},

/* ================= BACK ================= */
{
  name: "Pull-Ups",
  muscles: "Lats, Biceps",
  difficulty: "Intermediate",
  equipment: "Pull-Up Bar",
  benefits: "Back width",
  category: "Back",
  image: "https://www.soletreadmills.com/cdn/shop/articles/An_image_of_a_man_performing_pull_ups.png?v=1747939299&width=1200",
},
{
  name: "Lat Pulldown",
  muscles: "Back",
  difficulty: "Beginner",
  equipment: "Machine",
  benefits: "Back strength",
  category: "Back",
  image: "https://imagely.mirafit.co.uk/wp/wp-content/uploads/2024/08/leaning-back-on-Mirafit-Lat-Pulldown-and-Seated-Row-Machine-1024x683.jpg",
},
{
  name: "Seated Row",
  muscles: "Mid Back",
  difficulty: "Beginner",
  equipment: "Machine",
  benefits: "Posture improvement",
  category: "Back",
  image: "https://imagely.mirafit.co.uk/wp/wp-content/uploads/2025/02/seated-row-on-a-Mirafit-Weight-Bench.jpg",
},
{
  name: "Bent Over Row",
  muscles: "Back, Biceps",
  difficulty: "Intermediate",
  equipment: "Barbell",
  benefits: "Back thickness",
  category: "Back",
  image: "https://steelsupplements.com/cdn/shop/articles/ROWOW_1000x.jpg?v=1615134196",
},
{
  name: "Deadlift",
  muscles: "Back, Legs, Core",
  difficulty: "Intermediate",
  equipment: "Barbell",
  benefits: "Full body power",
  category: "Back",
  image: "https://ironbullstrength.com/cdn/shop/articles/deadlift-variations.jpg?v=1708113630&width=1200",
},

/* ================= LEGS ================= */
{
  name: "Squats",
  muscles: "Quads, Glutes",
  difficulty: "Beginner",
  equipment: "Bodyweight / Barbell",
  benefits: "Leg strength",
  category: "Legs",
  image: "https://vitruve.fit/wp-content/uploads/2024/05/image3-2-4.jpg",
},
{
  name: "Leg Press",
  muscles: "Legs",
  difficulty: "Beginner",
  equipment: "Machine",
  benefits: "Safe leg load",
  category: "Legs",
  image: "https://imagely.mirafit.co.uk/wp/wp-content/uploads/2023/03/woman-using-Mirafit-Leg-Press-Machine.jpg",
},
{
  name: "Lunges",
  muscles: "Legs, Glutes",
  difficulty: "Beginner",
  equipment: "Bodyweight / Dumbbells",
  benefits: "Balance & strength",
  category: "Legs",
  image: "https://hips.hearstapps.com/hmg-prod/images/muscular-man-training-his-legs-doing-lunges-with-royalty-free-image-1677586874.jpg?crop=1.00xw:1.00xh;0,0&resize=1800:*",
},
{
  name: "Leg Curl",
  muscles: "Hamstrings",
  difficulty: "Beginner",
  equipment: "Machine",
  benefits: "Hamstring isolation",
  category: "Legs",
  image: "https://www.prowolf.in/cdn/shop/articles/5-reasons-why-you-should-use-the-leg-extension-leg-curl-machine-236554_14c448a2-8af9-43ca-a5c2-19a417e3b7db.jpg?v=1765777600",
},
{
  name: "Leg Extension",
  muscles: "Quads",
  difficulty: "Beginner",
  equipment: "Machine",
  benefits: "Quad isolation",
  category: "Legs",
  image: "https://www.hsefitness.com/wp-content/uploads/2024/12/Best-11-Effective-Leg-Extension-Alternatives-for-Stronger-Quads.jpg.webp",
},
{
  name: "Calf Raises",
  muscles: "Calves",
  difficulty: "Beginner",
  equipment: "Bodyweight / Dumbbells",
  benefits: "Lower leg strength",
  category: "Legs",
  image: "https://boxlifemagazine.com/wp-content/uploads/2023/05/calf-raises.png",
},

/* ================= SHOULDERS ================= */
{
  name: "Shoulder Press",
  muscles: "Shoulders, Triceps",
  difficulty: "Intermediate",
  equipment: "Dumbbells / Barbell",
  benefits: "Shoulder strength",
  category: "Shoulders",
  image: "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/Dumbbell_shoulder_press_da79f800-76d1-49b0-bb03-9475ee425232_2048x2048.jpg?v=1686808191",
},
{
  name: "Lateral Raises",
  muscles: "Side Delts",
  difficulty: "Beginner",
  equipment: "Dumbbells",
  benefits: "Broad shoulders",
  category: "Shoulders",
  image: "https://cdn.shopify.com/s/files/1/1214/7132/files/mt-dumbbell-lateral-raises-900x675_jpg.png?v=1707499540",
},
{
  name: "Front Raises",
  muscles: "Front Delts",
  difficulty: "Beginner",
  equipment: "Dumbbells",
  benefits: "Front shoulder focus",
  category: "Shoulders",
  image: "https://www.puregym.com/media/tkfphmle/dumbbell-front-raises.jpg?quality=80",
},
{
  name: "Rear Delt Fly",
  muscles: "Rear Delts",
  difficulty: "Beginner",
  equipment: "Dumbbells",
  benefits: "Rear shoulder balance",
  category: "Shoulders",
  image: "https://blog.myarsenalstrength.com/hs-fs/hubfs/reverse-pec-deck-machine-benefits.png",
},

/* ================= BICEPS ================= */
{
  name: "Bicep Curls",
  muscles: "Biceps",
  difficulty: "Beginner",
  equipment: "Dumbbells / Barbell",
  benefits: "Bigger arms",
  category: "Arms",
  image: "https://cdn.shopify.com/s/files/1/2384/0833/files/inner-bicep-curl-benefits.jpg",
},
{
  name: "Hammer Curls",
  muscles: "Biceps, Forearms",
  difficulty: "Beginner",
  equipment: "Dumbbells",
  benefits: "Arm thickness",
  category: "Arms",
  image: "https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233",
},
{
  name: "Preacher Curls",
  muscles: "Biceps",
  difficulty: "Intermediate",
  equipment: "EZ Bar",
  benefits: "Bicep isolation",
  category: "Arms",
  image: "https://lifefuel.es/wp-content/uploads/2024/06/Curl-de-biceps-barra-vs-Mancuerna.jpg",
},

/* ================= TRICEPS ================= */
{
  name: "Tricep Dips",
  muscles: "Triceps",
  difficulty: "Beginner",
  equipment: "Bodyweight",
  benefits: "Tricep mass",
  category: "Arms",
  image: "https://hips.hearstapps.com/hmg-prod/images/bench-dips-66041b963e79d.jpg?resize=980:*",
},
{
  name: "Tricep Pushdown",
  muscles: "Triceps",
  difficulty: "Beginner",
  equipment: "Cable Machine",
  benefits: "Tricep definition",
  category: "Arms",
  image: "https://trainingstation.co.uk/cdn/shop/articles/Tricep-pushdown-movement_ddb8dbd8-566d-4f55-99e0-36c35790234a_1400x.png?v=1739005533",
},
{
  name: "Skull Crushers",
  muscles: "Triceps",
  difficulty: "Intermediate",
  equipment: "EZ Bar",
  benefits: "Tricep strength",
  category: "Arms",
  image: "https://cdn-ildfmel.nitrocdn.com/XTsWrdHkrHGwgUvdCkIgxPMlgAVtFUCy/assets/images/optimized/rev-4d9f558/www.fitfatherproject.com/wp-content/uploads/2019/08/Skull-Crusher-exercise-long-image.jpg",
},

/* ================= CORE ================= */
{
  name: "Plank",
  muscles: "Core",
  difficulty: "Beginner",
  equipment: "Bodyweight",
  benefits: "Core stability",
  category: "Core",
  image: "https://gymnation.com/media/jpbjzofv/plank2.webp?width=956&height=675&v=1dc68400a14c040",
},
{
  name: "Crunches",
  muscles: "Abs",
  difficulty: "Beginner",
  equipment: "Bodyweight",
  benefits: "Ab strength",
  category: "Core",
  image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2020/04/Man-Doing-Crunches-At-Home.jpg?quality=86&strip=all",
},
{
  name: "Hanging Leg Raises",
  muscles: "Lower Abs",
  difficulty: "Intermediate",
  equipment: "Pull-Up Bar",
  benefits: "Lower core strength",
  category: "Core",
  image: "https://hips.hearstapps.com/hmg-prod/images/young-muscular-build-athlete-exercising-strength-in-royalty-free-image-1724143306.jpg?crop=1.00xw:1.00xh;0,0&resize=1800:*",
},

/* ================= CARDIO / FULL BODY ================= */
{
  name: "Burpees",
  muscles: "Full Body",
  difficulty: "Advanced",
  equipment: "Bodyweight",
  benefits: "Fat loss & endurance",
  category: "Cardio",
  image: "https://cdn.shopify.com/s/files/1/0252/3155/6686/files/What_Muscles_do_Burpees_Work.jpg?v=1714495190",
},
{
  name: "Jump Rope",
  muscles: "Full Body",
  difficulty: "Beginner",
  equipment: "Rope",
  benefits: "Cardio & coordination",
  category: "Cardio",
  image: "https://www.garagegymreviews.com/wp-content/uploads/2022/02/people-jumping-rope.jpg",
},
{
  name: "Mountain Climbers",
  muscles: "Core, Legs",
  difficulty: "Beginner",
  equipment: "Bodyweight",
  benefits: "Fat burning",
  category: "Cardio",
  image: "https://cdn.mos.cms.futurecdn.net/PacoegBF4B73Ket2mTN5qM.jpg",
},

];

export default function Exercise() {
  const [activeTab, setActiveTab] = useState("Chest");

  // 🔹 FILTER LOGIC
  const filteredExercises =
    activeTab === "All"
      ? exercises
      : exercises.filter(ex => ex.category === activeTab);

  return (
    <section className="section" id="exercise-section ">
      <SectionTitle title="Exercise Catalogue" />

      {/* ===== TABS ===== */}
      <div className="exercise-tabs">
        {[, "Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Cardio"]
.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ===== CARDS ===== */}
      <div className="exercise-grid">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((ex, index) => (
            <div className="exercise-card" key={index}>
              <div className="exercise-img">
                <img src={ex.image} alt={ex.name} />
                <span className={`badge ${ex.difficulty.toLowerCase()}`}>
                  {ex.difficulty}
                </span>
              </div>

              <div className="exercise-content">
                <h4>{ex.name}</h4>
                <p>🎯 <strong>Muscles:</strong> {ex.muscles}</p>
                <p>🏋️ <strong>Equipment:</strong> {ex.equipment}</p>
                <p>✅ <strong>Benefits:</strong> {ex.benefits}</p>
                {/* <button className="details-btn">View Exercise</button> */}
              </div>
            </div>
          ))
        ) : (
          <p style={{ opacity: 0.7 }}>No exercises found.</p>
        )}
      </div>
    </section>
  );
}