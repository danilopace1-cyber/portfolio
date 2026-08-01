import { useEffect, useRef, useState } from 'react'
import styles from './CopyButton.module.css'

/**
 * Copies a value to the clipboard and says what happened.
 *
 * Why this exists instead of a `mailto:` link: a mailto only resolves if the
 * machine has a mail client configured. On a machine that does not, and that is
 * most machines where the reader lives in webmail, clicking it does nothing
 * visible at all. Nothing happening reads as a broken site, which is worse than
 * no link, and it happens on the one row that matters most.
 *
 * The address is rendered as plain selectable text next to this button, so the
 * fallback is always a manual copy and this is only the convenience on top.
 */
export default function CopyButton({ value, label }) {
  const [state, setState] = useState('idle')
  const timer = useRef(null)

  // A click late in the component's life would otherwise set state after it has
  // gone, for example if the reader navigates away inside the reset window.
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    clearTimeout(timer.current)

    try {
      await navigator.clipboard.writeText(value)
      setState('copied')
    } catch {
      /* Clipboard access can be refused: an insecure context, a browser with
         it locked down, or a denied permission. Report the failure rather than
         showing a success that did not happen, because a reader who trusts a
         false "Copied" pastes nothing into their mail client. */
      setState('failed')
    }

    timer.current = setTimeout(() => setState('idle'), 3000)
  }

  const faces = { idle: 'Copy', copied: 'Copied', failed: 'Failed' }

  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${state === 'copied' ? styles.buttonCopied : ''}`}
        onClick={copy}
      >
        {/* The visible word changes, the accessible name does not. A control
            whose name moves under a screen reader is a control they lose. */}
        <span aria-hidden="true">{faces[state]}</span>
        <span className="visually-hidden">Copy {label}</span>
      </button>

      {/* The visible state change is invisible to a screen reader, so the
          outcome is announced here instead. */}
      <span className="visually-hidden" role="status">
        {state === 'copied' ? `${label} copied to clipboard` : ''}
        {state === 'failed' ? `Could not copy. Select the ${label} to copy it manually.` : ''}
      </span>
    </>
  )
}
