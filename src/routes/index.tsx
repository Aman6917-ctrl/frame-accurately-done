import { useEffect, useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Heart, HandHeart, MessageCircleHeart, Ear } from "lucide-react";

import { Button } from "@/components/ui/button";
import letterArtwork from "@/assets/veduu-letter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Veduu, with all my heart" },
      {
        name: "description",
        content: "A little heartfelt apology, written just for Veduu.",
      },
      { property: "og:title", content: "For Veduu, with all my heart" },
      {
        property: "og:description",
        content: "A little heartfelt apology, written just for Veduu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApologyPage,
});

const promises = [
  { icon: Ear, text: "I'll listen before I react" },
  { icon: MessageCircleHeart, text: "I'll communicate instead of fighting" },
  { icon: HandHeart, text: "I'll show you through my actions" },
];

const burstHearts = Array.from({ length: 17 }, (_, index) => ({
  id: index,
  left: 7 + ((index * 37) % 86),
  delay: (index % 6) * 70,
  drift: ((index * 29) % 170) - 85,
  size: 16 + ((index * 7) % 15),
}));

export function ApologyPage() {
  const [hugSent, setHugSent] = useState(false);

  useEffect(() => {
    if (!hugSent) return;
    const timer = window.setTimeout(() => setHugSent(false), 3600);
    return () => window.clearTimeout(timer);
  }, [hugSent]);

  return (
    <main className="apology-page overflow-hidden bg-background text-foreground">
      <header className="page-header">
        <a className="wordmark" href="#home" aria-label="Veduu, back to the beginning">
          <span className="wordmark-heart" aria-hidden="true"><Heart fill="currentColor" /></span>
          <span>veduu <span className="wordmark-ampersand">&</span> me</span>
        </a>
        <span className="header-note">a little note from my heart</span>
      </header>

      <section className="apology-hero" id="home" aria-labelledby="hero-title">
        <img
          className="hero-artwork"
          src={letterArtwork}
          alt="A blush ribbon tied around a letter beside soft pink roses"
          width={1536}
          height={1200}
          fetchPriority="high"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-hearts" aria-hidden="true">
          <span className="float-heart float-heart-one">♡</span>
          <span className="float-heart float-heart-two">♥</span>
          <span className="float-heart float-heart-three">♡</span>
          <span className="sparkle sparkle-one">✳</span>
          <span className="sparkle sparkle-two">✧</span>
        </div>
        <div className="hero-copy">
          <div className="little-heart" aria-hidden="true">
            <Heart fill="currentColor" />
            <span className="heart-glint">✧</span>
          </div>
          <p className="hero-eyebrow">A little something for my Veduu <span>💗</span></p>
          <h1 id="hero-title">I'm Sorry,<br /><em>Veduu…</em> <span className="title-tears">🥺</span></h1>
          <p className="hero-subtitle">For the moments I hurt you, and for the words I wish I could take back.</p>
          <Button asChild className="heart-button hero-button">
            <a href="#letter">Open my heart <span aria-hidden="true">💌</span><ArrowDown aria-hidden="true" /></a>
          </Button>
          <span className="hero-footnote"><span className="tiny-star">✳</span> made with all my love, for you</span>
        </div>
        <a className="scroll-cue" href="#letter" aria-label="Scroll down to the letter">
          <span />
        </a>
        <span className="hero-side-note" aria-hidden="true">A LITTLE NOTE · JUST FOR YOU</span>
      </section>

      <section className="letter-section" id="letter" aria-labelledby="letter-title">
        <div className="section-kicker"><span>01</span><i aria-hidden="true" /><span>A NOTE FROM ME TO YOU</span></div>
        <div className="letter-heading">
          <p className="section-eyebrow">written with a full heart</p>
          <h2 id="letter-title">A few words<br /><em>I mean with all of me.</em></h2>
        </div>
        <article className="letter-paper">
          <div className="paper-topline">
            <span>for my favourite person</span>
            <Heart size={17} fill="currentColor" aria-hidden="true" />
          </div>
          <div className="letter-copy">
            <p className="letter-salutation">Meri pyaari Veduuuu, <span>❤️🥺</span></p>
            <p>I'm really, really sorry, Vedu. Aaj jo bhi bhasad hui, jo bhi maine bola ya kiya, usse agar maine tujhe hurt kiya hai toh I'm genuinely sorry. Mera intention kabhi bhi tujhe hurt karne ka nahi tha, but mujhe samajh hai ki meri wajah se tujhe bura laga, and I don't want to ignore your feelings.</p>
            <p>Vedu, I trust you poora. Sach mein. Aur main chahta hoon ki tu bhi mujhpe trust kare. Main nahi chahta ki chhoti-chhoti misunderstandings humare beech itni badi ho jaayein. Mujhe tere saath ladne se zyada tere saath peacefully rehna, hasna, baatein karna aur khush rehna pasand hai. 🫶🏻</p>
            <p>I'm sorry for the way I handled things today. I know sirf sorry bolna enough nahi hota, isliye main apne actions se bhi tujhe feel karwana chahta hoon ki tu mere liye kitni important hai. Main koshish karunga ki aage se situation ko better handle karun, teri baat patiently sunun, aur bina soche-samjhe react na karun.</p>
            <p>Tu mere liye bahut special hai, Veduu. I care about you, your feelings, your happiness, and our bond. Main nahi chahta ki meri kisi galti ki wajah se tere face ki smile kam ho. ❤️‍🩹</p>
            <p>Please, jab tera mann kare, mujhse baat kar lena. Main teri baat sunna chahta hoon, bina argue kiye aur bina apni baat prove karne ki zid kiye.</p>
            <p>I'm really sorry, meri jaan. I love you so much. 🥹❤️</p>
          </div>
          <div className="letter-signoff">
            <span>— Tera pagal sa person,</span>
            <span>jo tujhe bahut pyaar karta hai <span aria-hidden="true">💗</span></span>
          </div>
          <div className="paper-seal" aria-hidden="true"><Heart fill="currentColor" /></div>
        </article>
        <p className="letter-postscript"><span>p.s.</span> You and your feelings matter. Always.</p>
      </section>

      <section className="promises-section" aria-labelledby="promises-title">
        <div className="promise-ornament" aria-hidden="true">✳</div>
        <div className="section-kicker section-kicker-center"><span>02</span><i aria-hidden="true" /><span>NOT JUST WORDS</span></div>
        <div className="promise-heading">
          <p className="section-eyebrow">small things, that matter</p>
          <h2 id="promises-title">What I want to do <em>better.</em></h2>
          <p className="promise-intro">Not perfect promises. Just things I want to keep showing up for.</p>
        </div>
        <div className="promise-list">
          {promises.map(({ icon: Icon, text }, index) => (
            <article className="promise-item" key={text}>
              <span className="promise-number">0{index + 1}</span>
              <span className="promise-icon"><Icon aria-hidden="true" /></span>
              <p>{text}</p>
              <Heart className="promise-heart" size={16} aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="promise-note">one day at a time, and always with love <span>♡</span></p>
      </section>

      <section className="hug-section" aria-labelledby="hug-title" aria-live="polite">
        <div className="hug-decoration hug-decoration-left" aria-hidden="true">✿</div>
        <div className="hug-decoration hug-decoration-right" aria-hidden="true">✧</div>
        <div className={`hug-heart${hugSent ? " hug-heart-sent" : ""}`} aria-hidden="true">
          <Heart fill="currentColor" />
          <span>♡</span>
        </div>
        <p className="section-eyebrow">if you're okay with it...</p>
        <h2 id="hug-title">Can I give you a<br /><em>tiny virtual hug?</em> <span>🫂</span></h2>
        <Button className="heart-button hug-button" onClick={() => setHugSent(true)} aria-label="Tap for a hug">
          Tap for a hug <span aria-hidden="true">💗</span>
        </Button>
        <p className={`hug-message${hugSent ? " hug-message-visible" : ""}`} role="status">
          {hugSent ? "Sending you the biggest, warmest hug, Veduu! 🫂❤️" : ""}
        </p>
        {hugSent && (
          <div className="heart-burst" aria-hidden="true">
            {burstHearts.map(({ id, left, delay, drift, size }) => (
              <span
                className="burst-heart"
                key={id}
                style={{
                  "--burst-left": `${left}%`,
                  "--burst-delay": `${delay}ms`,
                  "--burst-drift": `${drift}px`,
                  "--burst-size": `${size}px`,
                } as CSSProperties}
              >{id % 3 === 0 ? "♡" : "♥"}</span>
            ))}
          </div>
        )}
        <p className="hug-signoff">wrapped up in all my love, always</p>
      </section>

      <footer className="ending-section">
        <div className="ending-rule"><span>♡</span></div>
        <p className="section-eyebrow">before I go...</p>
        <p className="ending-words">No fancy words can replace a real conversation. I just wanted you to know that I'm sorry, and you matter to me. <span>❤️</span></p>
        <p className="ending-signature">Always your <em>Vedu's person</em> <span>💌</span></p>
        <div className="ending-heart" aria-hidden="true"><Heart fill="currentColor" /></div>
        <Button asChild variant="outline" className="read-again-button">
          <a href="#letter">Read my letter again <span aria-hidden="true">↗</span></a>
        </Button>
        <p className="footer-caption">made softly, and sent with love <span>♡</span></p>
      </footer>
    </main>
  );
}