import Head from 'next/head';
import { useMemo, useState } from 'react';

const commandGroups = [
  { name: 'Music', icon: '🎧', items: ['play', 'pause', 'resume', 'skip', 'queue', 'volume', 'loop', 'autoplay', 'lyrics'] },
  { name: 'Effects', icon: '🎛️', items: ['bassboost', 'vaporwave', 'nightcore', 'slowed', 'lofi', '8d', 'karaoke', 'vibrato'] },
  { name: 'Playlists', icon: '🌙', items: ['create', 'add', 'save', 'load', 'view', 'list', 'rename'] },
  { name: 'Community', icon: '💬', items: ['afk', 'welcome', 'sticky', 'poll', 'embed', 'say', 'translate'] },
  { name: 'Utility', icon: '🛰️', items: ['help', 'botinfo', 'serverinfo', 'userinfo', 'avatar', 'ping', 'shards'] },
  { name: 'Panels', icon: '✨', items: ['music panel', 'queue panel', 'filter panel', 'theme panel'] }
];

const features = [
  ['Animated music panels', 'A premium now-playing experience with queue state, filters and clean controls.'],
  ['Lavalink sound core', 'Smooth playback with bass, vaporwave, nightcore, slowed, 8D and lofi presets.'],
  ['Lunar playlists', 'Save, load, rename and organize music collections with a soft Moon identity.'],
  ['Community layer', 'AFK, welcome, sticky messages, polls and useful server tools.'],
  ['Premium branding', 'A consistent Moon aesthetic across the website, music UI and help pages.'],
  ['Responsive design', 'Built to feel polished on phone, tablet and desktop.']
];

const flow = ['Invite Moon', 'Start a session', 'Tune the vibe', 'Grow your community'];

export default function Home() {
  const [query, setQuery] = useState('');
  const inviteUrl = process.env.NEXT_PUBLIC_INVITE_URL || '#invite';
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_SERVER || '#support';
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commandGroups;
    return commandGroups.map((g) => ({ ...g, items: g.items.filter((x) => `${g.name} ${x}`.toLowerCase().includes(q)) })).filter((g) => g.items.length);
  }, [query]);

  return (
    <>
      <Head>
        <title>Moon Music — Premium Lunar Website</title>
        <meta name="description" content="A premium lunar landing page for Moon Music." />
      </Head>
      <main className="shell">
        <div className="stars" />
        <div className="glow g1" />
        <div className="glow g2" />

        <nav className="nav glass">
          <a className="brand" href="#top"><span>☾</span>Moon Music</a>
          <div className="links"><a href="#product">Product</a><a href="#features">Features</a><a href="#commands">Commands</a><a href="#launch">Launch</a></div>
          <a className="miniBtn" href={inviteUrl}>Invite</a>
        </nav>

        <section id="top" className="hero3d">
          <div className="copy">
            <p className="eyebrow">Lunar SaaS-style music website</p>
            <h1>A music bot website that actually feels premium.</h1>
            <p className="lead">Moon Music blends cinematic visuals, smooth panels, playlists, filters and community features into one high-end public landing page.</p>
            <div className="actions"><a className="primary" href={inviteUrl}>Launch Moon</a><a className="secondary" href={supportUrl}>Support Server</a></div>
            <div className="stats"><div><b>190+</b><span>Commands</span></div><div><b>24/7</b><span>Music</span></div><div><b>3D</b><span>Landing</span></div><div><b>∞</b><span>Vibes</span></div></div>
          </div>
          <div className="visual"><div className="scene"><div className="ring r1" /><div className="ring r2" /><div className="ring r3" /><div className="moon"><span>☾</span><i /><i /><i /></div><div className="sat s1">♪</div><div className="sat s2">✦</div><div className="sat s3">♫</div></div></div>
        </section>

        <section id="product" className="preview">
          <article className="player glass"><div className="cover">🌙</div><div className="track"><p>Now Playing</p><h2>Moonlight Drive</h2><span>Premium panel preview</span></div><div className="bar"><i /></div><div className="controls"><button>⏮</button><button>⏸</button><button>⏭</button><button>🔁</button></div></article>
          <article className="filters glass"><p>Live Filters</p><span>Bassboost</span><span>Vaporwave</span><span>Nightcore</span><span>8D Audio</span></article>
        </section>

        <section id="features" className="section"><p className="eyebrow">Feature constellation</p><h2>Built like a SaaS product for music communities.</h2><div className="features">{features.map(([title, text], index) => <article className="feature glass" key={title}><em>0{index + 1}</em><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="commands glass"><p className="eyebrow">Experience flow</p><h2>From invite to orbit.</h2><div className="cmdGrid">{flow.map((step, index) => <article className="cmdCard" key={step}><h3><span>{index + 1}</span>{step}</h3><p>Designed as a smooth step in the Moon Music experience.</p></article>)}</div></section>

        <section id="commands" className="commands glass"><div className="commandTop"><div><p className="eyebrow">Command galaxy</p><h2>Search Moon systems.</h2></div><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search command or category..." /></div><div className="cmdGrid">{shown.map((group) => <article className="cmdCard" key={group.name}><h3><span>{group.icon}</span>{group.name}</h3><div>{group.items.map((cmd) => <code key={cmd}>/{cmd}</code>)}</div></article>)}</div></section>

        <section id="launch" className="cta glass"><div><p className="eyebrow">Ready to orbit?</p><h2>Make Moon Music feel like a product.</h2><p>Deploy the website on Vercel and give your bot a premium public face.</p></div><a className="primary" href={inviteUrl}>Invite Moon</a></section>
        <footer>Moon Music · High-end lunar website · Vercel ready</footer>
      </main>
    </>
  );
}
