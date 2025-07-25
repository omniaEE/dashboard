# Dashboard Project

A modern dashboard built with [Next.js](https://nextjs.org), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

---

## 🚀 Setup Instructions

1. **Install dependencies**

   Using pnpm (recommended):

   ```bash
   pnpm install
   ```

   Or with npm:

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Implementation Approach

- **Framework & Structure:**  
  Built with Next.js App Router and modular React components for maintainability.
- **Styling:**  
  Tailwind CSS for utility-first styling, custom color system, and use of `next/font` & `next/image` for optimized assets.
- **Routing & Navigation:**  
  File-system routing for dashboard sections, dynamic sidebar navigation using `next/link` and active state with `usePathname`.
- **Database:**  
  PostgreSQL integration, Vercel deployment, and instant previews via GitHub linking.
- **Data Handling:**  
  Parallel data fetching, static rendering for layout, dynamic rendering for real-time data, and pagination for lists.

---

## 🔒 Authentication

Authentication is powered by [NextAuth.js](https://next-auth.js.org/) for secure, scalable user management.

- **Custom Login Route:**  
  `/login` route with a custom login form, wrapped in React Suspense.
- **NextAuth.js Integration:**  
  Credentials provider for email/password authentication, with passwords securely hashed using `bcryptjs`.
- **Middleware Protection:**  
  Next.js Middleware restricts dashboard routes to authenticated users only.
- **Error Handling:**  
  Login errors and pending states managed with React’s `useActionState`.
- **Logout Functionality:**  
  Secure logout from the dashboard sidebar.

This approach ensures your dashboard is secure, user-friendly, and production-ready.  
See [NextAuth.js documentation](https://next-auth.js.org/) for more details.

---

## 📦 Tech Stack

- **Next.js** 15
- **React** 19
- **Tailwind CSS** 4
- **PostgreSQL** (via [postgres.js](https://github.com/porsager/postgres))
- **bcryptjs** (password hashing)
- **clsx** (conditional classNames)
- **@heroicons/react** (icons)

---
