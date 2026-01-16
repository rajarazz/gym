

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">

        <h1
  className="
    hero-brand animate brand-delay
    text-xl sm:text-3xl md:text-5xl lg:text-6xl
    font-extrabold tracking-tight leading-tight text-center px-3
  "
>
  The Mahaveer <span className="text-[#ffa500]">Gym</span>
</h1>

 
        {/* TAGLINE */}
        <h2 className="hero-tagline animate tagline-delay">
          Turning Sweat Into Strength Daily
            Gym Life. Fit Life. Best Life. 
        </h2>

        {/* TEXT */}
        <p className="hero-text animate text-delay">
         More than a gym, it’s a movement built to make you the strongest version of yourself.
        </p>

        {/* CTA */}

        <a href="#exercise-section" style={{textDecoration: "none", color:"black"}}>
          <button className="cta animate btn-delay">Start Training
        </button>
        </a>
        

      </div>
    </section>
  );
}
