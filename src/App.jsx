import { useState } from 'react'
import UploadZone from './components/UploadZone'
import GravityStarsBackground from './components/GravityStars'

function App() {
  const [file, setFile] = useState(null)

  function handleFileSelect(selectedFile) {
    setFile(selectedFile)
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D0F14', color: '#F0F2F7' }}>

      {/* Stars background — fixed, fills whole screen */}
      <div className="fixed inset-0 z-0">
        <GravityStarsBackground
          starsCount={80}
          starsOpacity={0.6}
          glowIntensity={12}
          mouseGravity="attract"
        />
      </div>

      {/* App content — sits on top of stars */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center mb-8">
          <h1 className="text-4xl font-semibold">PDF Rearranger</h1>
          <p className="text-sm mt-2" style={{ color: '#9BA3B8' }}>
            Reorder pages instantly — 100% in your browser
          </p>
        </div>

        <div className="w-full max-w-2xl">
          {!file ? (
            <UploadZone onFileSelect={setFile} />
          ) : (
            <div className="text-center">
              <p className="text-lg font-medium">✅ File selected:</p>
              <p className="mt-1" style={{ color: '#9BA3B8' }}>{file.name}</p>
            </div>
          )}
        </div>
      </main>

    </div>
  )
}

export default App