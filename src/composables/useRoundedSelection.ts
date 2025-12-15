// src/composables/useRoundedSelection.ts
import { onMounted, onBeforeUnmount } from 'vue'

export function useRoundedSelection() {
	let overlay: HTMLDivElement | null = null

	const updateOverlay = () => {
		const sel = window.getSelection()
		if (!sel || sel.isCollapsed) {
			if (overlay) overlay.style.display = 'none'
			return
		}

		const range = sel.getRangeAt(0)
		const rect = range.getBoundingClientRect()
		if (!overlay) {
			overlay = document.createElement('div')
			overlay.className =
				'rounded-md bg-blue-500 opacity-50 pointer-events-none transition-all duration-100'
			document.body.appendChild(overlay)
		}

		overlay.style.display = 'block'
		overlay.style.top = `${rect.top + window.scrollY}px`
		overlay.style.left = `${rect.left + window.scrollX}px`
		overlay.style.width = `${rect.width}px`
		overlay.style.height = `${rect.height}px`
	}

	onMounted(() => {
		document.addEventListener('selectionchange', updateOverlay)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('selectionchange', updateOverlay)
		if (overlay) overlay.remove()
	})
}
