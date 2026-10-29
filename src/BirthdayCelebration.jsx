import BirthdayCake from "./BirthdayCake";
import VideoGallery from "./VideoSection";

export default function BirthdayCelebration() {
  return (
    <main className="birthday-page">
      <div className="celebration-glow" />

      <img
        src="/rose.png"
        className="rose rose-left"
        alt=""
        aria-hidden="true"
      />

      <img
        src="/rose.png"
        className="rose rose-right"
        alt=""
        aria-hidden="true"
      />

      <section className="hero-section">
        <span className="eyebrow">TODAY IS ALL ABOUT YOU</span>

        <div className="birthday-heart" aria-hidden="true">
          ♥
        </div>

        <h1 className="birthday-title">
          Happy Birthday
          <span>Rozy </span>
        </h1>

        <p className="birthday-subtitle">
          To someone who makes the world a little more beautiful. 🌹
        </p>

        <div className="birthday-message">
          <span className="message-decoration">✦</span>
          <p>
            May your life bloom like a rose, your heart stay full of
            happiness, and your days be filled with love, laughter,
            and beautiful memories.
          </p>
          <span className="message-signature">With lots of love ♡</span>
        </div>

        <BirthdayCake />

        <a href="#memories" className="memory-button">
          Open Your Little Surprise <span>♡</span>
        </a>
      </section>

      <VideoGallery />

      <footer className="birthday-footer">
        Made with love, just for you <span>♥</span>
      </footer>
    </main>
  );
}