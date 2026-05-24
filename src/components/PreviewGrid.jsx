import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`

function PageThumb({ pdfUrl, pageIndex, sourcePageNumber }) {
  const canvasRef = useRef(null)
  const [dims, setDims] = useState({ width: 120, height: 160 })

  useEffect(() => {
    if (!pdfUrl || sourcePageNumber === 0) return
    let cancelled = false

    async function render() {
      const loadingTask = pdfjsLib.getDocument(pdfUrl)
      const pdfDoc = await loadingTask.promise
      const page = await pdfDoc.getPage(pageIndex + 1)

      // higher scale = better resolution
      const scale = 2.5
      const viewport = page.getViewport({ scale })

      const canvas = canvasRef.current
      if (!canvas || cancelled) return

      canvas.width = viewport.width
      canvas.height = viewport.height

      // display smaller than actual pixels (crisp)
      const displayW = 200
      const displayH = (viewport.height / viewport.width) * displayW
      canvas.style.width = `${displayW}px`
      canvas.style.height = `${displayH}px`

      setDims({ width: displayW, height: displayH })

      const ctx = canvas.getContext('2d')
      await page.render({ canvasContext: ctx, viewport }).promise
    }

    render()
    return () => { cancelled = true }
  }, [pdfUrl, pageIndex, sourcePageNumber])

  if (sourcePageNumber === 0) return null

  return (
    <div className="flex flex-col items-center gap-2" style={{ width: 208 }}>
      <div
        style={{
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#fff',
          width: 204,
          minHeight: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <canvas ref={canvasRef} style={{ display: 'block' }} />
      </div>
      <span className="text-[11px]" style={{ color: '#5C6478' }}>
        p.{sourcePageNumber}
      </span>
    </div>
  )
}

function PreviewGrid({ pdfUrl, pageSequence }) {
  const nonBlankCount = pageSequence.filter(p => p !== 0).length

  return (
    <div className="w-full max-w-3xl">
      <p className="text-sm mb-4 text-left" style={{ color: '#9BA3B8' }}>
        Showing {nonBlankCount} pages · {pageSequence.length - nonBlankCount} blank pages hidden
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 208px)',
          gap: '20px',
          maxHeight: '520px',
          overflowY: 'auto',
          paddingRight: '8px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#333 transparent',
        }}
      >
        {pageSequence.map((pageNum, i) => (
          <PageThumb
            key={i}
            pdfUrl={pdfUrl}
            pageIndex={i}
            sourcePageNumber={pageNum}
          />
        ))}
      </div>
    </div>
  )
}

export default PreviewGrid