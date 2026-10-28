export default function CountdownPage({ timeLeft }) {
    function CountdownBox({ value, label }) {
  return (
    <div className="countdown-box">
      <span className="countdown-number">
        {String(value).padStart(2, "0")}
      </span>
      <span className="countdown-label">{label}</span>
    </div>
  );
}
  return (
    <main className="countdown-page">
      <div className="countdown-glow" />

      <img
        src="/rose.png"
        className="rose countdown-rose"
        alt=""
        aria-hidden="true"
      />

      <section className="countdown-content">
        <span className="eyebrow">SOMETHING BEAUTIFUL IS COMING</span>

        <div className="little-heart">♡</div>

        <h1 className="countdown-title">
          My special's
          <span>Big Day</span>
        </h1>

        <p className="countdown-description">
          A little countdown to a day filled with love, roses,
          cake, and unforgettable memories.
        </p>

        <div className="countdown-timer" aria-label="Birthday countdown">
          <CountdownBox value={timeLeft.days} label="Days" />
          <span className="timer-separator">:</span>
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <span className="timer-separator">:</span>
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <span className="timer-separator">:</span>
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="countdown-date">
          <span>✦</span> November 4, 2026 <span>✦</span>
        </p>

        <p className="countdown-note">
          Until then, let the excitement bloom. 🌹
        </p>

        <div className="countdown-flower-decoration" aria-hidden="true">
          ✿　♡　✿
        </div>
      </section>

      <footer className="countdown-footer">
        A special day deserves a special surprise.
      </footer>
    </main>
  );
}