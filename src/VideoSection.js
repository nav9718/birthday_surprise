
export default function VideoGallery() {
    const videos = [
  {
    src: "/videos/mom_1.mp4",
    title: "A little memory for you ❤️",
  },
  {
    src: "/videos/mom_3.mp4",
    title: "A little memory for you ❤️",
  },
  {
    src: "/videos/mom_2.mp4",
    title: "Our special moments 🌹",
  },
  {
    src: "/videos/mom_4.mp4",
    title: "Our special moments 🌹",
  },
];
  return (
    <section className="video-section" id="memories">
      <div className="section-heading">
        <span className="eyebrow">A LITTLE GIFT FOR YOU</span>
        <h2>Our Memories 🎬</h2>
        <p>
          Every moment is a memory, and every memory is a reason to smile.
        </p>
      </div>

      <div className="video-grid">
        {videos.map((video, index) => (
          <article className="video-card" key={video.src}>
            <video
              className="birthday-video"
              controls
              playsInline
              preload="metadata"
              aria-label={video.title}
              autoPlay
              muted
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <div className="video-card-caption">
              <span className="video-number">
                MEMORY {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{video.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <p className="video-note">
        Replace these videos with your own edited birthday videos.
      </p>
    </section>
  );
}