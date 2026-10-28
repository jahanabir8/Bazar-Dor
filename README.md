<div align="center">

<!-- <img src="public/logo-icon.png" alt="BazarDor logo" width="72" /> -->

# বাজার দর · BazarDor

**আজকের বাজারের দাম এক নজরে**
Daily Bangladesh market prices for rice, lentils, oil, vegetables, fish, meat, eggs and spices, compared across markets in one place.



</div>

---

## 📖 About the Project

**BazarDor (বাজার দর)** is a Bangla-first web app that helps everyday shoppers check the current prices of essential grocery items. Instead of visiting market after market, users can see today's price, how it changed since yesterday, and where each product is cheapest or most expensive, all in a clean, mobile-friendly interface.

Signed-in users get access to detailed price information and a personal profile.


---

## ✨ Key Features

1. **Today's prices at a glance**
   The home page shows a hero section with the current date in Bangla (Asia/Dhaka time zone), plus separate sections for products whose prices went **up**, went **down**, and the full product list.

2. **Live price ticker**
   A scrolling marquee in the header shows each product's current price, unit and percentage change, and it appears on every page. The data is cached and refreshed hourly.

3. **Category browsing and sorting**
   A category navigation bar links to a page per category (rice, vegetables, fish, etc.). Products can be sorted by **price low → high**, **price high → low**, **biggest rise** or **biggest fall**.

4. **Market-wise price comparison**
   Each product page shows today's price against yesterday's, the lowest, highest and average price, and a table of prices per market and division, sorted from cheapest to most expensive.

5. **Secure authentication**
   Sign up and sign in with **email and password**, **Google** or **GitHub**, powered by Better Auth and MongoDB. The `/profile` route is protected, and users can update their name there.

**Also included:** fully Bangla UI and Bangla numerals, responsive layout, toast notifications, and server-side rendering with Next.js caching.

---

## 🛠️ Technologies Used

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Cache Components) |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), [HeroUI v3](https://www.heroui.com/) |
| Authentication | [Better Auth](https://www.better-auth.com/) (email/password, Google, GitHub) |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) with `@better-auth/mongo-adapter` |
| Icons and UI helpers | `react-icons`, `react-toastify`, `react-marquee-text` |
| Fonts | Noto Serif Bengali (`next/font/google`) |
| Data source | [Bazar Dor Open API](https://openapi.programming-hero.com/api/bazardor/products) |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
bazar-dor-24/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/page.tsx        # Sign in (email, Google, GitHub)
│   │   └── sign-up/page.tsx        # Sign up
│   ├── api/auth/[...all]/route.ts  # Better Auth API handler
│   ├── category/[categoryId]/      # Category page with sorting
│   ├── product/[productId]/        # Product details and market table
│   ├── profile/page.tsx            # Protected profile page
│   ├── Components/
│   │   ├── Header/                 # Header, NavBar, Marquee, AuthBtns
│   │   ├── Hero/                   # Hero section and Bangla date badge
│   │   ├── Products/               # ProductCard, PriceIncrease, PriceDecrease, AllProducts
│   │   ├── SortSelect/             # Sort dropdown
│   │   └── Footer/
│   ├── Type/                       # TypeScript types
│   ├── layout.tsx
│   └── page.tsx                    # Home page
├── lib/
│   ├── auth.ts                     # Better Auth server config
│   └── auth-client.ts              # Better Auth client helpers
├── proxy.ts                        # Route protection for /profile
├── public/                         # Static images
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or any MongoDB connection string)
- Google and GitHub OAuth apps (only needed for social login)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jahanabir8/Bazar-Dor.git
cd Bazar-Dor

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env     # or create .env manually (see below)

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env` file in the project root:

```env
# Better Auth
BETTER_AUTH_SECRET=your_random_secret          # openssl rand -base64 32
BETTER_AUTH_URL=http://localhost:3000

# MongoDB
BETTER_AUTH_DB_URL=your_mongodb_connection_string

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

**OAuth callback URLs**

| Provider | Local | Production |
| --- | --- | --- |
| Google | `http://localhost:3000/api/auth/callback/google` | `https://your-app.vercel.app/api/auth/callback/google` |
| GitHub | `http://localhost:3000/api/auth/callback/github` | `https://your-app.vercel.app/api/auth/callback/github` |

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint the code with ESLint |

---

## ☁️ Deployment (Vercel)

1. Push the project to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new). Next.js is detected automatically.
3. Add all environment variables from the section above. Set `BETTER_AUTH_URL` to your production URL.
4. In MongoDB Atlas, open **Network Access** and allow `0.0.0.0/0` so Vercel can connect.
5. Add the production callback URLs to your Google and GitHub OAuth apps.
6. Deploy, then redeploy once if you changed `BETTER_AUTH_URL` after the first deploy.

---

## 🗺️ Roadmap

- [ ] Price history charts (last week and month)
- [ ] Search products by name
- [ ] Favourite or watchlist products for signed-in users
- [ ] Price alert notifications
- [ ] Dark mode
- [ ] English and Bangla language toggle

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. Add a `LICENSE` file to the repository to make it official.

---

## 👤 Author

**Jahan Abir**
GitHub: [@jahanabir8](https://github.com/jahanabir8)

---

<div align="center">

Made with ❤️ in Bangladesh · বাজার দর

</div>