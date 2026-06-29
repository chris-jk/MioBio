# Link-in-Bio Site — Free, One File, Smart App-Store Routing

A single-file "link in bio" page (like Linktree) that lists all your apps and social channels — and **automatically sends each visitor to the right app store**: the App Store on iPhone/iPad, Google Play on Android. No framework, no build step. Hosted **free** on Cloudflare Pages with free SSL and your own custom domain.

🔗 **Live demo:** https://bio.360link.app

> 👋 **Came from the video? Start here →** [🚀 Build it with an AI agent (the 5-minute version)](#-build-it-with-an-ai-agent-the-5-minute-version)

---

## 🚀 Build it with an AI agent (the 5-minute version)

This is the path from the video. You don't touch the code yourself — a coding agent downloads this site, interviews you to fill it in, and deploys it. You just answer questions and click **Deploy**.

### Step 1 — Make a free Cloudflare account

This is where your site will live (free hosting, free SSL). Sign up here: **[dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)**. That's the only account you *have* to create.

### Step 2 — Install a coding agent (CLI)

A "coding agent CLI" is an AI you talk to in your terminal that can read files, edit them, and run commands for you. **Any of these work** — pick one. We use **Claude Code** in the video.

| Agent | Install | Cost | Link |
|---|---|---|---|
| **Claude Code** *(used in the video)* | `npm install -g @anthropic-ai/claude-code` | Free tier available; more with a Claude Pro/Max plan | [claude.com/claude-code](https://claude.com/claude-code) |
| **Gemini CLI** | `npm install -g @google/gemini-cli` | **Free** with a Google account (generous limits) | [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| **OpenAI Codex CLI** | `npm install -g @openai/codex` | Included with ChatGPT plans / API | [github.com/openai/codex](https://github.com/openai/codex) |
| **Aider** *(open source)* | `pip install aider-install && aider-install` | Free tool; you bring your own API key | [aider.chat](https://aider.chat) |

> **Need Node.js first?** Most of these need it. Install once from **[nodejs.org](https://nodejs.org)** (pick the "LTS" button), then run the install command above.

### Step 3 — Sign in to the agent

Open your terminal and run the agent (e.g. type `claude`, or `gemini`). The first time, it walks you through a quick sign-in/sign-up in your browser. Do that once and you're in.

### Step 4 — Hand it this repo

Copy this link:

```
https://github.com/chris-jk/MioBio
```

Then paste this to your agent (swap in the link):

> **"Download this repo to my Desktop and open the folder so we can work on it: https://github.com/chris-jk/MioBio"**

It'll clone the project onto your Desktop and open it up.

### Step 5 — Let it interview you

Now tell the agent:

> **"This is a link-in-bio site. Ask me questions one at a time to fill it out for me — my name, tagline, my social links, and each of my apps with their App Store and Google Play links — then update the CONFIG block in index.html."**

Answer as it asks. It fills in the `CONFIG` block for you, no code knowledge needed. Ask it to **preview the page** when you're done so you can eyeball it.

### Step 6 — Deploy it (the agent does the work, you do the login)

Tell the agent:

> **"Deploy this to Cloudflare Pages."**

It'll install Wrangler (Cloudflare's deploy tool) if needed and then hit the login step. **It can't log in *as* you** — so it'll either run `wrangler login` and pop open your browser to authorize, or it'll ask you to open a terminal and run:

```bash
wrangler login
```

Click **Allow** in the browser that opens. Back in the terminal, the agent finishes the deploy and hands you your live URL — something like `https://yourname.pages.dev`. 🎉

> Want a custom domain like `bio.yourname.com`? Just add: *"and set up my custom domain bio.yourname.com"* — see [Part 7](#7-use-your-own-domain-optional) for the one prerequisite.

### That's it 🙌

You shipped a real website. **If this worked for you, drop a "hell yeah" in the comments** — and ⭐ the repo so others can find it.

> Prefer to do it by hand (no AI)? The full manual guide is right below 👇

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
