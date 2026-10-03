# Orbit CRM

A single-page CRM dashboard built with React (Vite) and Tailwind CSS. Includes a
dashboard, deal pipeline (kanban-style), leads, contacts, and tasks — all wired
to mock data so it runs immediately, no backend required.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
crm-app/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .gitignore
├── README.md
└── src/
    ├── main.jsx              # React entry point + router
    ├── App.jsx                # Layout + route definitions
    ├── index.css              # Tailwind directives + base styles
    ├── data/
    │   └── mockData.js        # Mock stats, deals, leads, contacts, tasks
    ├── components/
    │   ├── Sidebar.jsx         # Left navigation
    │   ├── Topbar.jsx          # Page header + search + primary action
    │   ├── StatCard.jsx        # Dashboard metric card
    │   ├── PipelineBoard.jsx   # Kanban-style deal stages
    │   ├── DealCard.jsx        # Single deal card used in the board
    │   ├── ContactTable.jsx    # Contacts data table
    │   ├── LeadTable.jsx       # Leads data table with score bar
    │   └── TaskList.jsx        # Checkable task list
    └── pages/
        ├── Dashboard.jsx       # Stats + pipeline summary + tasks
        ├── Deals.jsx           # Full pipeline board
        ├── Leads.jsx           # Leads table
        ├── Contacts.jsx        # Contacts table
        └── Tasks.jsx           # Full task list
```

## Design tokens

- **Colors** — `ink` (#12172B, sidebar/text), `surface` (#F7F8FA, app background),
  `signal` (#0EA5A3, primary teal accent), `amber` (#F59E0B, medium priority),
  `coral` (#EF6461, high priority / at-risk).
- **Type** — Space Grotesk (display/headings), Inter (body), JetBrains Mono
  (data, currency, timestamps).

## Wiring up real data

Replace the arrays in `src/data/mockData.js` with API calls (e.g. `fetch` inside
a `useEffect`, or a data-fetching library like React Query) once you connect a
backend. Component props are already shaped to accept the same structure.
