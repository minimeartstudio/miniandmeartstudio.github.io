/* ===== COLORS ===== */
:root{
  --warm-cream:#FFF6EE;
  --soft-blush:#F2B6A0;
  --muted-sage:#9DB8A0;
  --dusty-sky:#AFC6D9;
  --clay:#C97A5D;
  --text:#333;
}

/* ===== BASE ===== */
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Open Sans',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  background:var(--warm-cream);
  color:var(--text);
  line-height:1.6;
}

a{
  text-decoration:none;
  color:inherit;
}

ul{
  list-style:none;
}

/* ===== BUTTONS ===== */
.btn{
  display:inline-block;
  padding:12px 24px;
  border-radius:12px;
  font-weight:700;
  cursor:pointer;
  transition:.25s ease;
}

.btn-primary{
  background:var(--soft-blush);
  color:#fff;
}

.btn-secondary{
  background:var(--muted-sage);
  color:#fff;
}

/* ===== LAYOUT ===== */
.container{
  max-width:1200px;
  margin:0 auto;
  padding:60px 20px;
}

.section{
  padding:60px 20px;
}

/* ===== NAV ===== */
.topnav{
  position:sticky;
  top:0;
  z-index:999;
  background:rgba(255,246,238,.95);
}

.nav-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:12px 20px;
}

/* ===== HERO ===== */
.hero{
  text-align:center;
  padding:90px 20px;
  background:url("hero-bg.jpg") center/cover no-repeat;
}

/* ===== CARDS (used for shop too) ===== */
.class-card,
.embed-card{
  background:#fff;
  border-radius:16px;
  padding:20px;
  box-shadow:0 6px 14px rgba(0,0,0,.12);
}
