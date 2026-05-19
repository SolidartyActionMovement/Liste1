<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>YETER ARTIK! — Liste 1 · Solidarity Action Movement</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />

  <style>
    :root {
      --red:    #D72B2B;
      --red-dk: #A81E1E;
      --red-lt: #F03535;
      --bg:     #0A0A0A;
      --bg2:    #111111;
      --bg3:    #181818;
      --line:   #2A2A2A;
      --muted:  #888;
      --text:   #F0EDE8;
      --sans: 'DM Sans', sans-serif;
      --display: 'Bebas Neue', sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--sans);
      font-size: 17px;
      line-height: 1.6;
      overflow-x: hidden;
    }

    a { color: inherit; text-decoration: none; }

    /* ─── NAV ─────────────────────────────────────────────── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 48px;
      background: rgba(10,10,10,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--line);
    }

    .nav-logo {
      font-family: var(--display);
      font-size: 1.5rem;
      letter-spacing: .06em;
      color: var(--red);
    }

    .nav-links { display: flex; gap: 32px; }

    .nav-links a {
      font-size: .82rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--muted);
      transition: color .2s;
    }
    .nav-links a:hover { color: var(--text); }

    .nav-cta {
      background: var(--red);
      color: #fff !important;
      padding: 9px 20px;
      border-radius: 6px;
      font-size: .82rem !important;
      letter-spacing: .1em;
      font-weight: 600;
      transition: background .2s !important;
    }
    .nav-cta:hover { background: var(--red-lt) !important; }

    /* ─── HERO ────────────────────────────────────────────── */
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 120px 48px 80px;
      gap: 64px;
      border-bottom: 1px solid var(--line);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -120px; right: -120px;
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(215,43,43,.18) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--red);
      color: var(--red);
      padding: 6px 16px;
      border-radius: 999px;
      font-size: .75rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      margin-bottom: 28px;
    }

    .hero-badge span { width: 6px; height: 6px; background: var(--red); border-radius: 50%; }

    h1.headline {
      font-family: var(--display);
      font-size: clamp(5rem, 12vw, 10rem);
      line-height: .92;
      letter-spacing: .01em;
      margin-bottom: 28px;
    }

    h1.headline em {
      display: block;
      color: var(--red);
      font-style: normal;
    }

    .hero-sub {
      font-size: 1.15rem;
      color: #bbb;
      max-width: 480px;
      line-height: 1.7;
      margin-bottom: 40px;
    }

    .btn-group { display: flex; gap: 14px; flex-wrap: wrap; }

    .btn-primary {
      background: var(--red);
      color: #fff;
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: 600;
      font-size: .95rem;
      letter-spacing: .04em;
      transition: background .2s, transform .15s;
    }
    .btn-primary:hover { background: var(--red-lt); transform: translateY(-2px); }

    .btn-outline {
      border: 1px solid rgba(255,255,255,.25);
      color: var(--text);
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: 500;
      font-size: .95rem;
      letter-spacing: .04em;
      transition: border-color .2s, color .2s, transform .15s;
    }
    .btn-outline:hover { border-color: var(--red); color: var(--red); transform: translateY(-2px); }

    /* why-card */
    .why-card {
      background: var(--bg2);
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 40px;
    }

    .why-card h2 {
      font-family: var(--display);
      font-size: 2.2rem;
      letter-spacing: .04em;
      color: var(--red);
      margin-bottom: 24px;
    }

    .why-card p {
      color: #bbb;
      font-size: 1rem;
      line-height: 1.75;
      padding: 14px 0;
      border-bottom: 1px solid var(--line);
    }
    .why-card p:last-child { border-bottom: none; }

    /* ─── INFO STRIP ──────────────────────────────────────── */
    .info-strip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      border-bottom: 1px solid var(--line);
    }

    .info-block {
      padding: 40px 48px;
      border-right: 1px solid var(--line);
    }
    .info-block:last-child { border-right: none; }

    .info-block.accent {
      background: var(--red);
    }

    .info-label {
      font-size: .72rem;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 14px;
    }

    .info-block.accent .info-label { color: rgba(255,255,255,.65); }

    .info-block h3 {
      font-family: var(--display);
      font-size: 1.6rem;
      letter-spacing: .06em;
      margin-bottom: 8px;
      color: var(--red);
    }

    .info-block.accent h3 { color: #fff; font-size: 2rem; line-height: 1.15; }

    .info-block p { color: #bbb; font-size: .95rem; }
    .info-block.accent p { color: rgba(255,255,255,.85); font-size: 1.05rem; margin-top: 10px; }

    .info-date { margin-bottom: 4px; }
    .info-date strong { color: var(--text); font-size: 1.05rem; }
    .info-date span { color: var(--muted); font-size: .9rem; display: block; }

    /* ─── GOALS ───────────────────────────────────────────── */
    .goals-section {
      padding: 96px 48px;
      border-bottom: 1px solid var(--line);
    }

    .section-eyebrow {
      font-size: .72rem;
      letter-spacing: .25em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 12px;
    }

    .section-title {
      font-family: var(--display);
      font-size: clamp(2.5rem, 5vw, 4rem);
      letter-spacing: .03em;
      line-height: 1.05;
      margin-bottom: 16px;
    }

    .section-title em { color: var(--red); font-style: normal; }

    .section-sub {
      color: var(--muted);
      font-size: 1.05rem;
      max-width: 580px;
      margin-bottom: 56px;
    }

    .goals-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .goal-card {
      background: var(--bg2);
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 32px;
      transition: border-color .25s, transform .25s;
      position: relative;
      overflow: hidden;
    }

    .goal-card:hover {
      border-color: var(--red);
      transform: translateY(-4px);
    }

    .goal-num {
      font-family: var(--display);
      font-size: 4rem;
      color: var(--red);
      opacity: .35;
      line-height: 1;
      margin-bottom: 20px;
      transition: opacity .25s;
    }

    .goal-card:hover .goal-num { opacity: .8; }

    .goal-text {
      font-size: 1.05rem;
      font-weight: 600;
      line-height: 1.5;
      color: var(--text);
    }

    /* ─── Q&A ─────────────────────────────────────────────── */
    .qa-section {
      padding: 96px 48px;
      background: var(--bg2);
      border-bottom: 1px solid var(--line);
    }

    .qa-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .qa-header {
      text-align: center;
      margin-bottom: 56px;
    }

    .qa-item {
      border: 1px solid var(--line);
      border-radius: 14px;
      margin-bottom: 12px;
      overflow: hidden;
    }

    .qa-question {
      width: 100%;
      background: none;
      border: none;
      color: var(--text);
      font-family: var(--sans);
      font-size: 1rem;
      font-weight: 600;
      text-align: left;
      padding: 22px 28px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      transition: color .2s;
    }

    .qa-question:hover { color: var(--red); }

    .qa-question .arrow {
      font-size: 1.2rem;
      color: var(--red);
      flex-shrink: 0;
      transition: transform .3s;
    }

    .qa-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height .35s ease, padding .3s;
      padding: 0 28px;
      color: #bbb;
      line-height: 1.75;
    }

    .qa-item.open .qa-answer {
      max-height: 300px;
      padding: 0 28px 22px;
    }

    .qa-item.open .arrow { transform: rotate(90deg); }

    /* ─── CANDIDATES ──────────────────────────────────────── */
    .candidates-section {
      padding: 96px 48px;
      background: var(--red);
      border-bottom: 1px solid #a81e1e;
    }

    .candidates-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      margin-bottom: 56px;
      align-items: end;
    }

    .candidates-header .section-eyebrow { color: rgba(255,255,255,.65); }

    .candidates-section .section-title { color: #fff; }
    .candidates-section .section-title em { color: rgba(255,255,255,.55); }

    .candidates-sub {
      color: rgba(255,255,255,.8);
      font-size: 1.1rem;
      line-height: 1.7;
    }

    .candidate-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .candidate-card {
      background: rgba(0,0,0,.22);
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 12px;
      padding: 16px 20px;
      font-size: .95rem;
      font-weight: 500;
      color: rgba(255,255,255,.92);
      transition: background .2s, border-color .2s;
      display: flex;
      gap: 10px;
      align-items: baseline;
    }

    .candidate-card:hover {
      background: rgba(0,0,0,.38);
      border-color: rgba(255,255,255,.3);
    }

    .cand-num {
      font-family: var(--display);
      font-size: 1.1rem;
      color: rgba(255,255,255,.38);
      min-width: 22px;
    }

    /* ─── CTA ─────────────────────────────────────────────── */
    .cta-section {
      padding: 120px 48px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at center, rgba(215,43,43,.12) 0%, transparent 70%);
      pointer-events: none;
    }

    .cta-headline {
      font-family: var(--display);
      font-size: clamp(4rem, 14vw, 12rem);
      line-height: .9;
      letter-spacing: .01em;
      color: var(--red);
      margin-bottom: 32px;
    }

    .cta-sub {
      font-size: clamp(1rem, 2.5vw, 1.4rem);
      color: #bbb;
      line-height: 1.7;
      margin-bottom: 48px;
    }

    .cta-btn {
      display: inline-block;
      background: var(--red);
      color: #fff;
      font-family: var(--display);
      font-size: 1.6rem;
      letter-spacing: .08em;
      padding: 20px 52px;
      border-radius: 12px;
      transition: background .2s, transform .15s;
    }
    .cta-btn:hover { background: var(--red-lt); transform: translateY(-3px); }

    /* ─── NEDEN BİZ ──────────────────────────────────────── */
    .neden-section {
      padding: 96px 48px;
      border-bottom: 1px solid var(--line);
    }

    .neden-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: start;
      margin-top: 56px;
    }

    .neden-body p {
      color: #bbb;
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--line);
    }

    .neden-body p:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .neden-body strong { color: var(--text); font-weight: 600; }

    .neden-aside {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .neden-stat {
      background: var(--bg2);
      border: 1px solid var(--line);
      border-left: 3px solid var(--red);
      border-radius: 12px;
      padding: 22px 24px;
    }

    .neden-stat .label {
      font-size: .72rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 6px;
    }

    .neden-stat .value {
      font-family: var(--display);
      font-size: 1.4rem;
      letter-spacing: .04em;
      color: var(--text);
      line-height: 1.2;
    }

    .wa-card {
      background: var(--bg2);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .wa-card img {
      width: 90px;
      height: 90px;
      border-radius: 8px;
      flex-shrink: 0;
      image-rendering: pixelated;
    }

    .wa-card-text .wa-title {
      font-family: var(--display);
      font-size: 1.1rem;
      letter-spacing: .06em;
      color: var(--text);
      margin-bottom: 4px;
    }

    .wa-card-text p {
      font-size: .88rem;
      color: var(--muted);
      line-height: 1.5;
    }

    @media (max-width: 900px) {
      .neden-grid { grid-template-columns: 1fr; gap: 40px; }
      .neden-section { padding: 64px 24px; }
    }

    /* ─── FOOTER ──────────────────────────────────────────── */
    footer {
      border-top: 1px solid var(--line);
      padding: 32px 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: .82rem;
      color: var(--muted);
    }

    footer a { color: var(--muted); transition: color .2s; }
    footer a:hover { color: var(--text); }

    /* ─── SCROLL REVEAL ───────────────────────────────────── */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity .65s ease, transform .65s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: none;
    }

    /* ─── RESPONSIVE ──────────────────────────────────────── */
    @media (max-width: 900px) {
      nav { padding: 16px 24px; }
      .nav-links { display: none; }
      .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; gap: 40px; }
      .info-strip { grid-template-columns: 1fr; }
      .info-block { border-right: none; border-bottom: 1px solid var(--line); }
      .info-block:last-child { border-bottom: none; }
      .goals-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
      .goals-section, .qa-section, .candidates-section, .cta-section { padding: 64px 24px; }
      .candidates-header { grid-template-columns: 1fr; gap: 20px; }
      .candidate-grid { grid-template-columns: repeat(2, 1fr); }
      footer { flex-direction: column; gap: 12px; text-align: center; }
    }

    @media (max-width: 540px) {
      .goals-grid { grid-template-columns: 1fr; }
      .candidate-grid { grid-template-columns: 1fr 1fr; }
      h1.headline { font-size: 5rem; }
      .cta-headline { font-size: 4.5rem; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <div class="nav-logo">
      YETER ARTIK!
      <span style="display:block;font-family:var(--sans);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.75);font-weight:600;margin-top:1px;">Liste 1 · Solidarity Action Movement</span>
    </div>
    <div class="nav-links">
      <a href="#hedefler">Hedefler</a>
      <a href="#qa">S.S.S.</a>
      <a href="#adaylar">Adaylar</a>
      <a href="#neden">Neden Biz?</a>
      <a href="#cta" class="nav-cta">OY VER →</a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div>
      <div class="hero-badge">
        <span></span>
        Liste 1 &nbsp;·&nbsp; Solidarity Action Movement
      </div>
      <h1 class="headline">
        YETER
        <em>ARTIK!</em>
      </h1>
      <p class="hero-sub">
        Turkish Market çalışanları için güçlü, şeffaf ve mücadeleci bir Works Council temsilini birlikte kuruyoruz.
      </p>
      <div class="btn-group">
        <a href="#hedefler" class="btn-primary">Hedeflerimiz →</a>
        <a href="#adaylar" class="btn-outline">Adaylarımız</a>
      </div>
    </div>

    <div class="why-card reveal">
      <h2>Neden Biz?</h2>
      <p>Alman İş Hukuku ve Almanca konusunda yetkin, eğitimli ve deneyimli bir ekibiz.</p>
      <p>Uzun yıllardır ver.di üyesi olarak çalışan hakları için dayanışma içinde mücadele ediyoruz.</p>
      <p>Mevcut WoCo üyelerinden bağımsız, taze ve şeffaf bir yönetim anlayışı sunuyoruz.</p>
      <p>Tamamı operasyonun içinde çalışan "Rep" pozisyonundaki ekip arkadaşlarımızdan oluşuyoruz.</p>
    </div>
  </section>

  <!-- INFO STRIP -->
  <div class="info-strip">
    <div class="info-block">
      <p class="info-label">Oy Kullanma Tarihleri</p>
      <div class="info-date"><strong>27 Mayıs 2026</strong><span>21:00 – 01:00</span></div>
      <div class="info-date" style="margin-top:14px"><strong>28 Mayıs 2026</strong><span>10:00 – 18:00</span></div>
      <p style="margin-top:14px; font-size:.88rem;">📍 Cafeteria (Erdgeschoss)</p>
    </div>

    <div class="info-block accent">
      <h3>BİRLİKTE<br>GÜÇLÜYÜZ!</h3>
      <p>Sesini duyurmak, haklarını korumak ve daha güçlü bir temsil oluşturmak için Liste 1'e oy ver!</p>
    </div>

    <div class="info-block">
      <p class="info-label">İletişim</p>
      <p style="margin-bottom:8px;">✉️ <a href="mailto:solidarityactionmovement@gmail.com" style="color:#bbb;text-decoration:underline;text-underline-offset:3px;">solidarityactionmovement@gmail.com</a></p>
      <p style="font-size:.9rem; line-height:1.6;">Election Board ofisi:<br>4. kat, speed gate yanı, Oda 401<br><span style="color:var(--muted)">Pzt, Salı, Cuma — 12:00–14:00</span></p>
    </div>
  </div>

  <!-- GOALS -->
  <section id="hedefler" class="goals-section">
    <p class="section-eyebrow">Hedeflerimiz</p>
    <h2 class="section-title">Çalışan Hakları İçin<br><em>Mücadele</em></h2>
    <p class="section-sub">Daha adil maaşlar, daha güçlü haklar ve daha şeffaf bir temsil için kararlılıkla çalışacağız.</p>

    <div class="goals-grid">
      <div class="goal-card reveal">
        <div class="goal-num">01</div>
        <p class="goal-text">Sendika ile güçlü iletişim ve dayanışma</p>
      </div>
      <div class="goal-card reveal" style="transition-delay:.07s">
        <div class="goal-num">02</div>
        <p class="goal-text">Hukuksuz işten çıkarmalara karşı net duruş</p>
      </div>
      <div class="goal-card reveal" style="transition-delay:.14s">
        <div class="goal-num">03</div>
        <p class="goal-text">Toplu iş sözleşmesi ve maaş artışı mücadelesi</p>
      </div>
      <div class="goal-card reveal" style="transition-delay:.21s">
        <div class="goal-num">04</div>
        <p class="goal-text">Yıllık izin günlerinin artırılması</p>
      </div>
      <div class="goal-card reveal" style="transition-delay:.28s">
        <div class="goal-num">05</div>
        <p class="goal-text">Weihnachtsgeld, Urlaubsgeld ve 13. maaş hakkı</p>
      </div>
      <div class="goal-card reveal" style="transition-delay:.35s">
        <div class="goal-num">06</div>
        <p class="goal-text">Şeffaf, ulaşılabilir ve çalışan odaklı temsil</p>
      </div>
    </div>
  </section>

  <!-- Q&A -->
  <section id="qa" class="qa-section">
    <div class="qa-inner">
      <div class="qa-header">
        <p class="section-eyebrow">Sık Sorulan Sorular</p>
        <h2 class="section-title">Sorularınıza<br><em>Açık Cevaplar</em></h2>
      </div>

      <div class="qa-item">
        <button class="qa-question" onclick="toggleQA(this)">
          Alman İş Hukuku konusunda yetkin misiniz?
          <span class="arrow">›</span>
        </button>
        <div class="qa-answer">
          Ekibimiz farklı alanlarda eğitim almış uzmanlardan oluşmakta olup gerektiğinde deneyimli sendika danışmanları ve hukuki mekanizmalardan destek alabilecek yetkinliğe sahiptir.
        </div>
      </div>

      <div class="qa-item">
        <button class="qa-question" onclick="toggleQA(this)">
          Oy bölüyor musunuz?
          <span class="arrow">›</span>
        </button>
        <div class="qa-answer">
          Aksine, Turkish Market çalışanlarını ortak bir ses altında toplayan tek liste olarak temsilde gücü ve adaleti artırmayı hedefliyoruz.
        </div>
      </div>

      <div class="qa-item">
        <button class="qa-question" onclick="toggleQA(this)">
          ver.di ile ilişkiniz nedir?
          <span class="arrow">›</span>
        </button>
        <div class="qa-answer">
          Hepimiz uzun yıllardır ver.di üyesiyiz ve sendikayla işbirliğimizi sürdüreceğiz; ancak bu seçimde kendi marketimizin çoğunluğunu yansıtan bağımsız bir liste çıkarmayı stratejik olarak daha uygun gördük.
        </div>
      </div>

      <div class="qa-item">
        <button class="qa-question" onclick="toggleQA(this)">
          Aranızda mevcut WoCo üyesi var mı?
          <span class="arrow">›</span>
        </button>
        <div class="qa-answer">
          Aramızda mevcut bir WoCo üyesi bulunmuyor; bunu daha dinamik, şeffaf ve yeni bir yönetim anlayışı sunabilmek adına önemli bir avantaj olarak görüyoruz.
        </div>
      </div>

      <div class="qa-item">
        <button class="qa-question" onclick="toggleQA(this)">
          Neden yalnızca Turkish Market çalışanlarından oluşuyorsunuz?
          <span class="arrow">›</span>
        </button>
        <div class="qa-answer">
          Birbirini tanıyan ve ortak çalışma kültürüne sahip uyumlu bir ekibin dayanışmayı çok daha güçlü sürdüreceğine ve tüm çalışanlara faydalı olacağına inanıyoruz.
        </div>
      </div>

      <div class="qa-item">
        <button class="qa-question" onclick="toggleQA(this)">
          Önceliğiniz ne olacak?
          <span class="arrow">›</span>
        </button>
        <div class="qa-answer">
          Hukuksuz işten çıkarmalara karşı sert bir duruş sergileyecek; ardından maaş artışı, ek tatil günleri, ikramiyeler (Weihnachtsgeld, Urlaubsgeld) ve şeffaf bir temsil için mücadele edeceğiz.
        </div>
      </div>
    </div>
  </section>

  <!-- CANDIDATES -->
  <section id="adaylar" class="candidates-section">
    <div class="candidates-header">
      <div>
        <p class="section-eyebrow">Liste 1</p>
        <h2 class="section-title">Adaylarımız</h2>
      </div>
      <p class="candidates-sub">Güçlü iletişim kültürüne sahip, yıllardır birlikte çalışan ve çalışan haklarını savunmaya kararlı bir ekip.</p>
    </div>

    <div class="candidate-grid">
      <div class="candidate-card"><span class="cand-num">1</span> Ozan Şimşek</div>
      <div class="candidate-card"><span class="cand-num">2</span> İsmail Erkam Köseoğlu</div>
      <div class="candidate-card"><span class="cand-num">3</span> Mahmut Esat Ata</div>
      <div class="candidate-card"><span class="cand-num">4</span> Selen Elif Ayar</div>
      <div class="candidate-card"><span class="cand-num">5</span> Samiha Hande Toprak</div>
      <div class="candidate-card"><span class="cand-num">6</span> Selin Taş</div>
      <div class="candidate-card"><span class="cand-num">7</span> Yusuf Koç</div>
      <div class="candidate-card"><span class="cand-num">8</span> Mahmut İsmail Hasırcı</div>
      <div class="candidate-card"><span class="cand-num">9</span> Ahmet Berkan Yılmaz</div>
      <div class="candidate-card"><span class="cand-num">10</span> Petek Zorluer</div>
      <div class="candidate-card"><span class="cand-num">11</span> Çağrı Berkay Demirci</div>
      <div class="candidate-card"><span class="cand-num">12</span> Şükrü Gürsel Hatunoğlu</div>
      <div class="candidate-card"><span class="cand-num">13</span> Seda Özbozdağlı</div>
      <div class="candidate-card"><span class="cand-num">14</span> Bekir Kartal</div>
      <div class="candidate-card"><span class="cand-num">15</span> Furkan Aydoğan</div>
      <div class="candidate-card"><span class="cand-num">16</span> Ercan Orkan Çelik</div>
      <div class="candidate-card"><span class="cand-num">17</span> Okan Çelik</div>
      <div class="candidate-card"><span class="cand-num">18</span> Emin Ata Becer</div>
      <div class="candidate-card"><span class="cand-num">19</span> Özgür Berkay Dağlı</div>
      <div class="candidate-card"><span class="cand-num">20</span> Melike Utku</div>
      <div class="candidate-card"><span class="cand-num">21</span> Doğancan Yaralı</div>
      <div class="candidate-card"><span class="cand-num">22</span> Engin Cansu</div>
    </div>
  </section>

  <!-- NEDEN BİZ -->
  <section id="neden" class="neden-section">
    <p class="section-eyebrow">Hakkımızda</p>
    <h2 class="section-title">Neden <em>Biz?</em></h2>

    <div class="neden-grid">
      <div class="neden-body">
        <p>Biz, <strong>Solidarity Action Movement (Liste 1)</strong> olarak, Turkish Market çalışanlarını ortak bir ses altında toplamak ve Works Council'da demokratik, güçlü bir temsil sağlamak için yola çıktık.</p>
        <p>Listemizde; Alman İş Hukuku ve Almanca konusunda yetkin; <strong>lisans, master ve doktora</strong> seviyesinde eğitim almış arkadaşlarımız bulunuyor. Hepimiz uzun yıllardır <strong>ver.di</strong> üyesiyiz ve seçildiğimizde de sendikamızla tam bir dayanışma içinde hareket edeceğiz.</p>
        <p>Diğer listelerin aksine, aramızda mevcut WoCo üyesi barındırmıyoruz. Geçmişteki eksiklikleri doğrudan gözlemlemiş ve ders çıkarmış bir ekip olarak, sizlere taze, şeffaf ve dinamik bir yönetim anlayışı sunuyoruz.</p>
        <p>Tamamı operasyona değer katan <strong>"Rep"</strong> pozisyonundaki çalışanlardan oluşan kadromuzla, yönetimle yaşanabilecek çıkar çatışmalarının önüne geçiyor ve doğrudan sizin yanınızda durmayı taahhüt ediyoruz. <strong>Beş yılı aşkın süredir birlikte çalışan</strong>, birbirini iyi tanıyan ve güçlü bir iletişim kültürüne sahip en uyumlu ekibiz.</p>
      </div>

      <div class="neden-aside">
        <div class="neden-stat">
          <p class="label">Deneyim</p>
          <p class="value">5+ Yıl Birlikte Çalışma</p>
        </div>
        <div class="neden-stat">
          <p class="label">Sendika Üyeliği</p>
          <p class="value">Uzun Yıllardır ver.di Üyesiyiz</p>
        </div>
        <div class="neden-stat">
          <p class="label">Bağımsızlık</p>
          <p class="value">Mevcut WoCo Üyesinden Bağımsızız</p>
        </div>

        <div class="wa-card">
          <img src="data:image/png;base64,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" alt="WhatsApp QR Kodu" />
          <div class="wa-card-text">
            <p class="wa-title">WhatsApp Grubuna Katıl!</p>
            <p>Sorularını sor,<br>gelişmelerden haberdar ol.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section id="cta" class="cta-section">
    <div class="cta-headline">YETER<br>ARTIK!</div>
    <p class="cta-sub">
      Haklarımız için birlikte hareket etme zamanı.<br>
      Liste 1'e oy ver, sesini duyur.
    </p>
    <a href="mailto:solidarityactionmovement@gmail.com" class="cta-btn">LİSTE 1'E OY VER!</a>
  </section>

  <!-- FOOTER -->
  <footer>
    <div>© 2026 Solidarity Action Movement · Liste 1</div>
    <div>
      <a href="mailto:solidarityactionmovement@gmail.com">solidarityactionmovement@gmail.com</a>
    </div>
  </footer>

  <script>
    // Accordion
    function toggleQA(btn) {
      const item = btn.closest('.qa-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.qa-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  </script>
</body>
</html>
