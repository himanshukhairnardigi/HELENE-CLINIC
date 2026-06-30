/* ============================================================
   All SVG icons used across the site.
   Every icon is 24×24 with stroke="currentColor".
   ============================================================ */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function IconPhone()   { return <svg {...base}><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01z"/></svg>; }
export function IconMail()    { return <svg {...base}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>; }
export function IconMap()     { return <svg {...base}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
export function IconClock()   { return <svg {...base}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>; }
export function IconCheck()   { return <svg {...base}><path d="M20 6L9 17l-5-5"/></svg>; }
export function IconX()       { return <svg {...base}><path d="M18 6L6 18M6 6l12 12"/></svg>; }
export function IconChevronDown() { return <svg {...base}><path d="M6 9l6 6 6-6"/></svg>; }
export function IconChevronRight() { return <svg {...base}><path d="M9 18l6-6-6-6"/></svg>; }
export function IconArrowRight()   { return <svg {...base}><path d="M5 12h14M12 5l7 7-7 7"/></svg>; }
export function IconMenu()    { return <svg {...base}><path d="M4 6h16M4 12h16M4 18h16"/></svg>; }
export function IconWhatsApp() { return <svg {...base} fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>; }
export function IconStar()    { return <svg {...base}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>; }
export function IconShield()  { return <svg {...base}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>; }
export function IconAward()   { return <svg {...base}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>; }
export function IconUsers()   { return <svg {...base}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>; }
export function IconGlobe()   { return <svg {...base}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>; }
export function IconTarget()  { return <svg {...base}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>; }
export function IconLeaf()    { return <svg {...base}><path d="M17 8C8 10 5.9 16.17 3.82 19.29a1.2 1.2 0 001.96 1.41C7 19 7.94 18 9 18c4 0 8-2 11-7-1 0-3 1-4 1s-2-1-2-2c3 0 5-1 6-4-1 0-2 0-3 1z"/></svg>; }
export function IconActivity(){ return <svg {...base}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>; }
export function IconDna()     { return <svg {...base}><path d="M2 15c6.667-6 13.333 0 20-6M2 9c6.667 6 13.333 0 20 6M17 4l-1 2M8 4l1 2M8 20l1-2M17 20l-1-2"/></svg>; }
export function IconYoutube() { return <svg {...base} fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>; }
export function IconInstagram(){ return <svg {...base}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
export function IconQuote()   { return <svg {...base} fill="currentColor" stroke="none"><path d="M10 7H4v6h5l-1 4H4l-1-4V7h7zm11 0h-6v6h5l-1 4h-4l-1-4V7h7z" opacity=".25"/></svg>; }

/* Treatment icons */
export function IconJoint()   { return <svg {...base}><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/><path d="M9 10l6 4"/></svg>; }
export function IconBrain()   { return <svg {...base}><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24A2.5 2.5 0 019.5 2zm5 0A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96-.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24A2.5 2.5 0 0014.5 2z"/></svg>; }
export function IconLongevity(){ return <svg {...base}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 8v8M8 12h8" strokeWidth="1.2"/></svg>; }

const ICONS = {
  joint:         IconJoint,
  brain:         IconBrain,
  shield:        IconShield,
  longevity:     IconLongevity,
  needle:        IconActivity,
  dna:           IconDna,
  clock:         IconClock,
  globe:         IconGlobe,
  'shield-check': IconShield,
  person:        IconUsers,
  target:        IconTarget,
  leaf:          IconLeaf,
  award:         IconAward,
  users:         IconUsers,
  check:         IconCheck,
};

export function Icon({ name, className, style }) {
  const Component = ICONS[name];
  if (!Component) return null;
  return (
    <span className={className} style={style} aria-hidden="true">
      <Component />
    </span>
  );
}
