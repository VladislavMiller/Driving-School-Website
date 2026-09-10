/**
 * ACTIVE BUILD SELECTOR
 *
 * The master always points at ./site. A prospect branch changes only this import
 * to ./prospects/<slug>; components never need to be rewritten.
 */
export { siteData } from "./site";
export type { Course } from "./site";
