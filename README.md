# M-3-PHD-Website — The Attention Ledger (Global Edition)

A static, research-paper-style website on the topic **"The Effect of AI / ChatGPT on Children"** — covering the cognitive baseline of children *before* AI (creativity, attention, memory, academics, ~2015–2022) and the first wave of evidence from the *AI era* (2022–2026), with a deliberate **global** (not US-centric) evidence base.

Includes a dedicated **Disadvantages & Risks** section (cognitive, educational, social, safety), a **Conclusion**, and a **Credits** section.

Every statistic carries a citation; the **References page** lists all 58 sources as clickable links, filterable by theme (AI & Cognition, Creativity, Mind & Screen, Surveys & Policy).

## Team

| Name | Role | Contact |
|---|---|---|
| Dr. Kavita Shinde | Research Lead | +91 98908 22423 |
| Rudra Sharma | Data & Source Verification | +91 99234 13689 |
| Aryan Ahirrao | Web Development & Design | +91 81809 44755 |
| Isha Sharma | Editorial & Reference Curation | +91 91686 19915 |

## Pages

| File | Purpose |
|---|---|
| `index.html` | The paper: hero, abstract, method, Part I (before AI), Part II (AI era), evidence table, disadvantages & risks, limitations, conclusion, credits |
| `references.html` | Full linked bibliography — searchable + theme filters, cross-referenced to paper sections |
| `styles.css` | "Ink on Vellum" academic theme (serif typography, amber/teal accents) |
| `script.js` | Reading progress bar, scroll reveals, animated charts/counters |

## Key sources cited

- MIT Media Lab, *Your Brain on ChatGPT* (EEG "cognitive debt" study, arXiv:2506.08872)
- Bastani et al., PNAS 2025 (GPT-4 tutors in a Turkish high school: −17% exam scores)
- Gerlich, *Societies* 2025 (AI use ↔ critical thinking, n=666)
- Kelly et al., *Thinking Skills and Creativity* 2025 (children's creativity −0.6 SD)
- UNESCO GEM Report 2023 (technology in education) & smartphone-ban tracker (114 systems / 58% of countries)
- UNICEF–ITU (1.3 billion children offline at home); IWF (AI-generated abuse imagery, +400%)
- UK National Literacy Trust (77% of 8–17s used GenAI); India ASER 2024 (~90% rural teen smartphone access)
- OECD PISA (65% device distraction; record 15-point decline); Kim 2011 Torrance norms; Pew Research teen AI surveys 2023–2025; NIH ABCD cohort

## Run

No build step. Serve statically:

```bash
freebuff-preview set-install "true"          # nothing to install
freebuff-preview set "python3 -m http.server $PORT --bind 0.0.0.0" 8080
freebuff-preview set-build "true"            # static site, no build
freebuff-preview start
```

(Any static server works — e.g. `npx serve .`)
