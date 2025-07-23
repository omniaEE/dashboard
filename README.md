# Dashboard Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup Instructions

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

## Implementation Approach

This dashboard is built using Next.js App Router and React components. The UI is modular, with reusable components for the header, navigation links, and dashboard sections.

- **Header**: The header is implemented as a fixed element at the top of the page using Tailwind CSS utility classes (`position-fixed top-0 left-0 w-full z-50`). This ensures it remains visible at all times, providing consistent branding and navigation access.

- **Navigation Links**: The navigation sidebar uses a dynamic list of links, each with an icon and label. The active link is highlighted based on the current route using `usePathname` and `clsx` for conditional styling. This provides clear navigation feedback to users.

- **Component Structure**: Components are organized by feature (e.g., `dashboard`, `customers`, `invoices`) for maintainability. UI elements are styled with Tailwind CSS for rapid development and consistent design.

This approach ensures a scalable, maintainable, and user-friendly dashboard experience.

...existing code...
