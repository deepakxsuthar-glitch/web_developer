# Deepak | Full-Stack Web Developer & UI Designer Portfolio

A production-ready, full-stack business and portfolio website for **Deepak** (Junior Web Developer), designed to convert small business owners and individuals into paying clients.

---

## 🚀 Live Demo & Tech Stack

- **Frontend**: React 18 (Vite), Tailwind CSS, Framer Motion, GSAP, Lucide Icons, Canvas Particles
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose) with seamless fallback mode
- **Security & Utilities**: Helmet, CORS, Express-Rate-Limit, Express-Validator, JWT, Nodemailer
- **Deployments**: Vercel (Frontend) + Render (Backend) + MongoDB Atlas (Cloud Database)

---

## 📁 Project Structure

```text
deepak-portfolio/
├── package.json                 # Monorepo management scripts
├── README.md                    # Setup & deployment guide
├── server/                      # Node.js + Express backend
│   ├── .env.example             # Environment variables blueprint
│   ├── .env                     # Local environment settings
│   ├── package.json             # Server dependencies & scripts
│   └── src/
│       ├── server.js            # Express entry point, security headers & rate limiter
│       ├── config/
│       │   └── db.js            # MongoDB Mongoose connection & auto-seeder
│       ├── models/
│       │   ├── Contact.js       # Contact inquiry schema (stores chosen package)
│       │   ├── Package.js       # Pricing packages schema
│       │   ├── Project.js       # Portfolio projects schema
│       │   └── User.js          # Admin user model
│       ├── controllers/
│       │   ├── authController.js    # JWT login & auth verification
│       │   ├── contactController.js # Validate, persist & trigger dual emails
│       │   ├── packageController.js # Get pricing packages
│       │   └── projectController.js # Public read & protected admin create
│       ├── routes/
│       │   ├── authRoutes.js
│       │   ├── contactRoutes.js
│       │   ├── packageRoutes.js
│       │   └── projectRoutes.js
│       ├── middleware/
│       │   ├── authMiddleware.js # Bearer JWT protection
│       │   └── errorHandler.js   # Global error handling
│       └── utils/
│           └── mailer.js         # Nodemailer template & delivery logic
└── client/                      # React (Vite) frontend
    ├── package.json
    ├── vite.config.js           # Vite config with backend proxy
    ├── tailwind.config.js       # Custom colors, fonts, and dark mode
    ├── postcss.config.js
    ├── index.html               # Meta tags, SEO, and Open Graph cards
    ├── public/
    │   └── favicon.svg          # Modern SVG logo monogram (< D />)
    └── src/
        ├── main.jsx
        ├── App.jsx              # Routing & global animated layout
        ├── index.css            # Glassmorphism & custom cursor styles
        ├── context/
        │   ├── ThemeContext.jsx   # Dark / Light mode toggle
        │   └── PackageContext.jsx # Auto-selects package from Get Started
        ├── components/
        │   ├── Logo.jsx             # Animated stroke-draw monogram (< D />)
        │   ├── Navbar.jsx           # Blur on scroll, mobile drawer, theme toggle
        │   ├── Footer.jsx           # Social links & © Deepak 2026
        │   ├── CustomCursor.jsx     # Dot + follower ring with device detection
        │   ├── CanvasBackground.jsx # Floating particles & mouse spotlight
        │   ├── ScrollProgressBar.jsx# Top gradient indicator
        │   ├── TiltCard.jsx         # 3D interactive tilt cards
        │   ├── StatsCounter.jsx     # Scroll-triggered count-up animation
        │   ├── WhatsAppButton.jsx   # Floating sticky chat button (+91 9256729688)
        │   └── ProjectModal.jsx     # Detailed project preview modal
        └── pages/
            ├── Home.jsx             # Hero, typing effect, stats, preview, process
            ├── About.jsx            # Story, animated skill bars, journey timeline
            ├── Services.jsx         # The 2 packages (₹5,000 & ₹9,000), comparison table
            ├── Projects.jsx         # Filterable portfolio grid & modal preview
            ├── Contact.jsx          # Working form with package selection & email alerts
            └── FAQ.jsx              # Interactive accordion with small-business answers
```

---

## ⚡ Quick Start (Local Setup)

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- (Optional) MongoDB local instance or MongoDB Atlas URI

### 1. Install Dependencies
From the root directory:
```bash
# In the server folder:
cd server
npm install

# In the client folder:
cd ../client
npm install
```

### 2. Configure Environment Variables
Inside `server/`, create or adjust `.env` (a template is provided in `server/.env.example`):
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/deepak_portfolio
JWT_SECRET=replace_with_a_long_random_secret
ADMIN_EMAIL=your_admin_email@example.com
ADMIN_PASSWORD=replace_with_a_unique_strong_password

# Nodemailer SMTP setup (For Gmail, generate an App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=rjdeepu00@gmail.com
SMTP_PASS=your_gmail_app_password_here
NOTIFICATION_EMAIL=rjdeepu00@gmail.com
```
> **Note**: If you run without MongoDB or without live SMTP credentials, the server automatically uses in-memory data and simulates email delivery in the terminal, ensuring smooth local development out of the box!

### 3. Start Development Servers
**Terminal 1 (Backend API):**
```bash
cd server
npm run dev
# Running on http://localhost:5000
```

**Terminal 2 (Frontend Client):**
```bash
cd client
npm run dev
# Running on http://localhost:5173
```

---

## 🌐 Deployment Instructions

### 1. MongoDB Atlas Setup
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Build a free shared cluster (M0).
3. Under **Database Access**, create a user (e.g. `deepak_admin`) with password.
4. Under **Network Access**, add IP `0.0.0.0/0` (allow from anywhere).
5. Click **Connect** → **Drivers** and copy your connection string:
   `mongodb+srv://deepak_admin:<password>@cluster0.mongodb.net/deepak_portfolio?retryWrites=true&w=majority`

### 2. Deploy Backend to Render
1. Push your code to GitHub.
2. Sign in to [Render](https://render.com) and click **New +** → **Web Service**.
3. Connect your repository and configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. In the **Environment Variables** tab, add:
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: (Your MongoDB Atlas connection URI)
   - `JWT_SECRET`: (A secure random string)
   - `CLIENT_URL`: (Your Vercel frontend URL, e.g. `https://deepak-webdev.vercel.app`)
   - `SMTP_USER`: `rjdeepu00@gmail.com`
   - `SMTP_PASS`: (Your Gmail App Password)
   - `NOTIFICATION_EMAIL`: `rjdeepu00@gmail.com`
5. Click **Deploy**. Copy your Render backend URL (e.g., `https://deepak-portfolio-api.onrender.com`).

### 3. Deploy Frontend to Vercel
1. Sign in to [Vercel](https://vercel.com) and click **Add New** → **Project**.
2. Select your repository.
3. In **Project Settings**:
   - **Root Directory**: Select `client`
   - **Framework Preset**: `Vite`
4. Add environment variable or Vite proxy rewrites for `/api` to route to your Render backend URL.
5. Click **Deploy**.

---

## 💼 Packages & Pricing

| Package | Price | Features Included |
|---|---|---|
| **BASIC PORTFOLIO WEBSITE** | ₹5,000 | 1–2 pages, personal portfolio, mobile responsive, interactive contact form, basic scroll animations, basic SEO |
| **BUSINESS WEBSITE (Most Popular)** | ₹9,000 | >2 pages (multi-page), custom branding with logo, landing page, advanced animations & mouse effects, dual email notifications, Google Maps, WhatsApp button, full SEO & 30-day support |

---

## 📬 Contact & Socials

- **Owner**: Deepak (Junior Web Developer)
- **Email**: [rjdeepu00@gmail.com](mailto:rjdeepu00@gmail.com)
- **Phone / WhatsApp**: [+91 9256729688](https://wa.me/919256729688)
- **GitHub**: [github.com/rjdeepu00](https://github.com/rjdeepu00)
- **LinkedIn**: [linkedin.com/in/deepak-webdev](https://linkedin.com/in/deepak-webdev)
- **Instagram**: [instagram.com/deepak_webdev](https://instagram.com/deepak_webdev)
- **Copyright**: © Deepak 2026. All rights reserved.
