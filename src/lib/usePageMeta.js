import { useEffect } from 'react'

const BASE_TITLE = 'Danilo Pace'

/**
 * Sets the document title and meta description per route. React Router does not
 * touch the document head, and a single static title would leave every page
 * reading the same thing in browser tabs, search results and screen reader
 * announcements. This keeps that correct without pulling in a helmet library.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    // Pipe, not an em dash. The site's copy rule bans em dashes, and the tab
    // title is copy the visitor reads.
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
