type IconProps = { className?: string };

export function Arrow({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Check({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none"><path d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Phone({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none"><path d="M6.1 2.8 8 6.9 5.9 8.3c1.2 2.5 3.3 4.5 5.8 5.8l1.4-2.1 4.1 1.9-.6 3c-.2.8-.9 1.3-1.7 1.2C8.1 17.3 2.7 11.9 1.9 5.1c-.1-.8.4-1.5 1.2-1.7l3-.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}
