# Link-in-Bio Site — Free, One File, Smart App-Store Routing

A single-file "link in bio" page (like Linktree) that lists all your apps and social channels — and **automatically sends each visitor to the right app store**: the App Store on iPhone/iPad, Google Play on Android. No framework, no build step. Hosted **free** on Cloudflare Pages with free SSL and your own custom domain.

🔗 **Live demo:** https://bio.360link.app

---

## Features

- **One file.** `index.html` holds the HTML, CSS, and JavaScript. Open it in a browser and it just works.
- **Smart store routing.** The same app button opens the App Store on Apple devices and Google Play on Android.
- **Real app icons** pulled straight from the App Store (no downloading or hosting images yourself).
- **Dark, modern, mobile-first** design with an animated gradient background.
- **Edit one block.** Everything you change lives in a single `CONFIG` object — no need to understand the code.
- **Free hosting** + free HTTPS on Cloudflare Pages.

**Total cost:** $0. A custom domain is optional (~$10/yr).

---

## What you need

| Thing | Why | Cost |
|---|---|---|
| A code editor (VS Code, or even TextEdit) | To edit one file | Free |
| A free [Cloudflare account](https://dash.cloudflare.com/sign-up) | Hosting | Free |
| A domain (optional) | A custom URL like `bio.yourname.com` | ~$10/yr |
| [Node.js](https://nodejs.org) (optional) | Only if you deploy with the command line | Free |

---

## 1. Get the page

Download this repo (green **Code** button → **Download ZIP**, or `git clone`). You only ever edit two files:

```
index.html   ← the website
avatar.jpg   ← your profile photo (swap in your own)
```

Open `index.html` in your editor and scroll to the bottom. Find the block that starts with `const CONFIG = {`. **That object is your entire website.** It has four parts: your profile, your socials, your apps, and the footer.

---

## 2. Edit your profile

```js
const CONFIG = {
  name: "Chris James",
  tagline: "Indie app developer · Apps by Cannappy LLC",
  verified: true,                 // little check mark next to your name
  avatarImage: "avatar.jpg",      // your photo, OR "" to show your initials instead
  avatarInitials: "CJ",

  // On a desktop computer, which store should app buttons open? "ios" or "android"
  desktopDefaultStore: "ios",
  ...
```

To use your own photo: drop a square image named `avatar.jpg` in the same folder as `index.html` (or point `avatarImage` at any image URL).

---

## 3. Add your socials

These are the small round icons at the top. Edit the `socials` list:

```js
socials: [
  { icon: "youtube", url: "https://www.youtube.com/@yourhandle", label: "YouTube" },
  { icon: "tiktok",  url: "https://www.tiktok.com/@yourhandle",  label: "TikTok" },
  { icon: "email",   url: "mailto:you@example.com",              label: "Email" },
],
```

Built-in icons: `youtube`, `tiktok`, `instagram`, `x`, `threads`, `facebook`, `linkedin`, `github`, `email`, `web`. Add or remove rows freely.

---

## 4. Add your apps

Each app button needs three things: your **iOS link**, your **Android link**, and an **icon**.

```js
{
  title: "Strain Guide",
  sub: "Find your perfect cannabis strain",
  rating: "4.6",                 // optional ⭐ — delete this line to hide it
  icon: "https://is1-ssl.mzstatic.com/.../512x512bb.jpg",
  ios: "https://apps.apple.com/us/app/strain-guide/id1596314933",
  android: "https://play.google.com/store/apps/details?id=us.kushy.news",
},
```

**iOS link** — open your app's App Store page and copy the URL (the part that matters is `id1596314933`).

**Android link** — open your app on Google Play and copy the URL (the part that matters is `id=us.kushy.news`).

**Icon (free, hosted by Apple)** — open this in a browser, replacing the app name:

```
https://itunes.apple.com/search?term=YOUR+APP+NAME&entity=software&country=us
```

In the JSON that appears, find your app and copy the `artworkUrl512` value into `icon:`.

> **Tip — grab all your apps at once.** Find your developer `artistId` (it's in any search result above), then list everything you've published, each with its icon and store link:
> ```
> https://itunes.apple.com/lookup?id=YOUR_ARTIST_ID&entity=software&limit=200
> ```

**How the routing works:** the page detects the visitor's device automatically — iPhone/iPad users get the `ios` link, Android users get `android`, and desktop visitors get whatever `desktopDefaultStore` is set to. You just provide both links.

---

## 5. Preview it on your computer

Double-click `index.html` — it opens in your browser. (If you set a photo, keep `avatar.jpg` in the same folder.) To see the phone layout: right-click → **Inspect** → click the phone/tablet icon.

---

## 6. Publish it free with Cloudflare Pages

Pick whichever fits you. All three give you a free `https://yourproject.pages.dev` URL.

> First, create a free Cloudflare account: **[dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)**. You'll need one for every option below.

### Option A — Just hand it to Claude (easiest)

Once you have a Cloudflare account, you can let Claude do the whole deploy for you:

- **[Claude Code](https://claude.com/claude-code)** (terminal/desktop): open this folder and say *"Deploy this to Cloudflare Pages."* It installs Wrangler if needed, logs you in, creates the project, and ships it — then gives you the live URL.
- **[Claude for Chrome](https://claude.com/chrome)** (browser extension): log in to the Cloudflare dashboard, then ask Claude to *"create a Cloudflare Pages project and upload this folder."* It clicks through the dashboard for you. (You stay in control and approve actions as it goes.)

You can also ask it to set up your custom domain in the same breath (see Part 7).

### Option B — Upload in the dashboard (no command line)

1. **[dash.cloudflare.com](https://dash.cloudflare.com)** → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name your project (e.g. `mybio`) and **drag in your folder** (the one with `index.html`).
3. Click **Deploy**. You'll get a URL like `https://mybio.pages.dev`.

To update later, repeat with **Create new deployment**.

### Option C — Wrangler CLI (for the command line)

Wrangler is Cloudflare's CLI — makes redeploys a one-liner. Needs Node.js.

```bash
npm install -g wrangler          # install once
wrangler login                   # opens your browser to authorize

# create the project (once):
wrangler pages project create mybio --production-branch=main

# deploy (run this anytime you want to publish):
wrangler pages deploy . --project-name=mybio --branch=main
```

---

## 7. Use your own domain (optional)

Want `bio.yourname.com` instead of `mybio.pages.dev`? Your domain needs to be on Cloudflare first (Cloudflare → **Add a site** → point your registrar's nameservers at Cloudflare). Then:

- **Easiest:** ask Claude (Option A) to *"add the custom domain bio.yourname.com to my Pages project,"* or
- **Dashboard:** **Workers & Pages** → your project → **Custom domains** → **Set up a custom domain** → type your subdomain → **Activate**. Cloudflare creates the DNS record and SSL certificate for you. Live in 1–5 minutes.

> Seeing a **522** error right after setup? That's normal — the SSL certificate is still issuing. Wait a couple minutes and refresh.

---

## 8. Update it later

1. Edit the `CONFIG` block in `index.html`, save.
2. Re-deploy the same way you published (hand it to Claude, re-drag in the dashboard, or run the Wrangler deploy command again).

Your live site updates in seconds.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Avatar doesn't show | The image must be in the **same folder** as `index.html`, and the filename must match `avatarImage` exactly (case-sensitive). |
| App icon is broken | Re-copy the full `artworkUrl512` link from the iTunes URL. |
| Custom domain shows 522 / "not secure" | Normal right after setup — the SSL cert is still issuing. Wait 1–5 min. |
| Domain won't attach | Your domain must be **on Cloudflare** (nameservers pointed at Cloudflare) first. |
| `wrangler: command not found` | Install Node.js, then `npm install -g wrangler`. |

---

## File layout

```
.
├── index.html     ← the entire website (edit the CONFIG block at the bottom)
├── avatar.jpg     ← your profile photo (swap in your own)
└── README.md      ← this guide
```

---

Free to use and adapt for your own bio page. ⭐ the repo if it helped!
