import Head from 'next/head';
import { useMemo, useState } from 'react';

const groups = [
  { name: 'Music', icon: '🎧', cmds: ['play', 'pause', 'resume', 'skip', 'stop', 'queue', 'nowplaying', 'volume', 'loop', 'autoplay', 'lyrics'] },
  { name: 'Effects', icon: '🎛️', cmds: ['bassboost', 'vaporwave', 'nightcore', 'slowed', 'lofi', '8d', '3d', 'chipmunk', 'karaoke', 'vibrato'] },
  { name: 'Playlist', icon: '🌙', cmds: ['playlist create', 'playlist add', 'playlist save', 'playlist load', 'playlist view', 'playlist list', 'playlist rename', 'playlist delete'] },
  { name: 'Community', icon: '💬', cmds: ['afk', 'afk status', 'afk list', 'welcome', 'sticky set', 'poll', 'embed', 'say'] },
  { name: 'Utility', icon: '🛰️', cmds: ['help', 'botinfo', 'serverinfo', 'userinfo', 'avatar', 'ping', 'permissions', 'shards'] },
  { name: 'Owner', icon: '👑', cmds: ['reload', 'restart', 'noprefix', 'maintenance', 'commandstate', 'lockdown'] }
];

const features = ['Canva-style music panels', 'Lavalink powered playback', 'Moon themed playlists', 'AFK and welcome tools', 'Owner control system', 'Mobile-first premium UI'];

export default function Home() {
  const [query, setQuery] = useState('');
  const inviteUrl = process.env.NEXT_PUBLIC_INVITE_URL || '#invite';
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_SERVER || '#support';
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return groups;
    return groups.map(g => ({ ...g, cmds: g.cmds.filter(c => `${g.name} ${c}`.toLowerCase().includes(q)) })).filter(g => g.cmds.length);
  }, [query]);

  return (
    <>
      <Head>
        <title>Moon Music Bot — Lunar Discord Music</title>
        <meta name="description" content="Premium lunar themed website for Moon Music Bot." />
      </Head>
      <main className="shell">
        <div className="stars" />
        <div className="glow g1" />
        <div className="glow g2" />

        <nav className="nav glass">
          <a className="brand" href="#top"><span>☾</span>Moon Music</a>
          <div className="links"><a href="#features">Features</a><a href="#commands">Commands</a><a href="#preview">Preview</a></div>
          <a className="miniBtn" href={inviteUrl}>Invite</a>
        </nav>

        <section id="top" className="hero3d">
          <div className="copy">
            <p className="eyebrow">Premium Discord Music Bot</p>
            <h1>Music that feels like moonlight.</h1>
            <p className="lead">Smooth Lavalink playback, dreamy panels, powerful filters, playlists, AFK tools and a polished lunar experience for your Discord server.</p>
            <div className="actions"><a className="primary" href={inviteUrl}>Invite Moon</a><a className="secondary" href={supportUrl}>Support Server</a></div>
            <div className="stats"><div><b>190+</b><span>Commands</span></div><div><b>24/7</b><span>Music</span></div><div><b>V2</b><span>Panels</span></div><div><b>Moon</b><span>Theme</span></div></div>
          </div>
          <div className="visual" aria-hidden="true">
            <div className="scene"><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/><div className="moon"><span>☾</span><i/><i/><i/></div><div className="sat s1">♪</div><div className="sat s2">✦</div><div className="sat s3">♫</div></div>
          </div>
        </section>

        <section id="preview" className="preview">
          <article className="player glass"><div className="cover">🌙</div><div className="track"><p>Now Playing</p><h2>Moonlight Drive</h2><span>Requested by itz_axiom</span></div><div className="bar"><i/></div><div className="controls"><button>⏮</button><button>⏸</button><button>⏭</button><button>🔁</button></div></article>
          <article className="filters glass"><p>Live Filters</p><span>Bassboost</span><span>Vaporwave</span><span>Nightcore</span><span>8D</span></article>
        </section>

        <section id="features" className="section"><p className="eyebrow">Feature constellation</p><h2>Everything a serious music bot needs.</h2><div className="features">{features.map((f,i)=><article className="feature glass" key={f}><em>0{i+1}</em><h3>{f}</h3><p>Designed to make Moon feel aesthetic, fast and premium in every server.</p></article>)}</div></section>

        <section id="commands" className="commands glass"><div className="commandTop"><div><p className="eyebrow">Command galaxy</p><h2>Search Moon commands.</h2></div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search command or category..." /></div><div className="cmdGrid">{filtered.map(g=><article className="cmdCard" key={g.name}><h3><span>{g.icon}</span>{g.name}</h3><div>{g.cmds.map(c=><code key={c}>/{c}</code>)}</div></article>)}</div></section>

        <section className="cta glass"><div><p className="eyebrow">Ready to orbit?</p><h2>Add Moon Music to your server.</h2><p>Bring aesthetic panels, smooth music and powerful tools into one clean Discord bot.</p></div><a className="primary" href={inviteUrl}>Invite Moon</a></section>
        <footer>Moon Music Bot · Lunar themed website · Built for Vercel</footer>
      </main>
    </>
  );
}
