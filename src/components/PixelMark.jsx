/**
 * The one game-dev flourish on the site: a five-square pixel glyph that marks
 * every section header. It inherits colour from its parent, so it can sit on
 * paper in accent green or invert inside a filled block.
 */
export default function PixelMark({ className, size = 12 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="4" height="4" />
      <rect x="8" y="0" width="4" height="4" />
      <rect x="4" y="4" width="4" height="4" />
      <rect x="0" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
    </svg>
  )
}
