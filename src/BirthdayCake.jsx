export default function BirthdayCake() {
  return (
    <div className="cake-scene" aria-label="Birthday cake with candles">
      <div className="cake-glow" />

      <div className="cake">
        <div className="cake-candles">
          <span className="candle candle-one">
            <span className="flame" />
          </span>
          <span className="candle candle-two">
            <span className="flame" />
          </span>
          <span className="candle candle-three">
            <span className="flame" />
          </span>
        </div>

        <div className="cake-top" />
        <div className="cake-middle">
          <span className="icing icing-one" />
          <span className="icing icing-two" />
          <span className="icing icing-three" />
        </div>
        <div className="cake-bottom">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>
        <div className="cake-plate" />
      </div>

      <p className="cake-caption">Made with love ♡</p>
    </div>
  );
}