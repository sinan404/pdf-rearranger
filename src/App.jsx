import { useState } from 'react'
import UploadZone from './components/UploadZone'
import GravityStarsBackground from './components/GravityStars'

function App() {
  const [file, setFile] = useState(null)

  function handleFileSelect(selectedFile) {
    setFile(selectedFile)
  }

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: '#0D0F14', color: '#F0F2F7' }}
    >
      <div className="fixed inset-0 z-0">
        <GravityStarsBackground
          starsCount={80}
          starsOpacity={0.6}
          glowIntensity={12}
          mouseGravity="attract"
        />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mb-8 w-full max-w-2xl text-center">
          <h1 className="text-4xl font-semibold">PDF Rearranger</h1>
          <p className="mt-2 text-sm" style={{ color: '#9BA3B8' }}>
            Reorder pages instantly - 100% in your browser
          </p>
        </div>

        <div className="w-full max-w-2xl">
          {!file ? (
            <UploadZone onFileSelect={handleFileSelect} />
          ) : (
            <div className="text-center">
              <p className="text-lg font-medium">File selected:</p>
              <p className="mt-1" style={{ color: '#9BA3B8' }}>
                {file.name}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App