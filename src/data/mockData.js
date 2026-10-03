

export const contacts = [
  { id: 1, name: "Priya Nair", company: "Atlas Freight", role: "Ops Director", email: "priya.nair@atlasfreight.com", phone: "+1 415 555 0132", status: "Active" },
  { id: 2, name: "Daniel Osei", company: "Kessler Group", role: "Procurement Lead", email: "d.osei@kesslergroup.com", phone: "+1 312 555 0187", status: "Active" },
  { id: 3, name: "Elena Vasquez", company: "Northline Retail", role: "VP Retail Ops", email: "elena.v@northline.com", phone: "+1 646 555 0121", status: "Active" },
  { id: 4, name: "Tom Bakker", company: "Verve Studio", role: "Founder", email: "tom@vervestudio.io", phone: "+1 206 555 0198", status: "Dormant" },
  { id: 5, name: "Aisha Rahman", company: "Bridgepoint Labs", role: "Head of Partnerships", email: "aisha@bridgepointlabs.com", phone: "+1 617 555 0143", status: "Active" },
  { id: 6, name: "Marco Ferra", company: "Ferra & Co", role: "CTO", email: "marco@ferraco.com", phone: "+1 212 555 0176", status: "Active" },
];


export const tasks = [
  { id: 1, title: "Send updated proposal to Northline Retail", due: "Today, 2:00 PM", owner: "S. Rowe", priority: "High", done: false },
  { id: 2, title: "Follow up call — Kessler Group onboarding", due: "Today, 4:30 PM", owner: "M. Dias", priority: "Medium", done: false },
  { id: 3, title: "Prepare contract redlines for Verve Studio", due: "Tomorrow, 10:00 AM", owner: "A. Kwan", priority: "High", done: false },
  { id: 4, title: "Log discovery notes — Loom & Line", due: "Tomorrow, 1:00 PM", owner: "M. Dias", priority: "Low", done: false },
  { id: 5, title: "QBR recap — Bridgepoint Labs", due: "Jul 29", owner: "S. Rowe", priority: "Medium", done: true },
];

export const currency = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
