const commands = [
  'play', 'pause', 'resume', 'skip', 'stop', 'queue', 'nowplaying', 'volume',
  'bassboost', 'vaporwave', 'nightcore', 'slowed', 'lofi', 'playlist', 'lyrics',
  'afk', 'welcome', 'sticky', 'musicpanel', 'voiceleaderboard', 'help'
];

const features = [
  ['Lunar Music Panels', 'A clean Moon themed music experience with queues, filters and interactive controls.'],
  ['Premium Effects', 'Bass, vaporwave, slowed, nightcore, 8D, lofi and studio style presets.'],
  ['Community Tools', 'AFK, welcome, sticky messages, playlists and utility commands.'],
  ['Owner Control', 'Private owner controls for maintenance, reloads and advanced management.']
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="orb">☾</div>
        <p className="eyebrow">Moon Music Bot</p>
        <h1>A cute lunar music bot for Discord.</h1>
        <p className="sub">High quality music, filters, playlists, panels and community tools wrapped in a soft moon themed website.</p>
        <div className="actions">
          <a href={process.env.NEXT_PUBLIC_INVITE_URL || '#'}>Invite Bot</a>
          <a href={process.env.NEXT_PUBLIC_SUPPORT_SERVER || '#'}>Support Server</a>
        </div>
      </section>

      <section className="grid">
        {features.map(([title, text]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="commands">
        <h2>Popular Commands</h2>
        <div className="chips">
          {commands.map((cmd) => <span key={cmd}>/{cmd}</span>)}
        </div>
      </section>

      <footer>Made for Moon Music Bot · Lunar aesthetic website</footer>
    </main>
  );
}
