/**
 * Build a URL for anything that lives in /public.
 *
 * Vite serves the public folder from the configured `base`, which is '/portfolio/'
 * here. Hard-coding '/portfolio/...' in components would break the dev server and
 * break again if the repo is ever renamed, so every static path goes through this.
 *
 * Pass paths relative to /public, with or without a leading slash:
 *   asset('cv.pdf')                        -> /portfolio/cv.pdf
 *   asset('images/projects/shot.png')      -> /portfolio/images/projects/shot.png
 */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
}
