import { useState } from 'react'
import EditorHero from './components/EditorHero'
import Header from './components/Header'
import { GravityStarsBackground } from './components/GravityStars'

function App() {
  const [file, setFile] = useState(null)

  function handleFileSelect(selectedFile) {
    setFile(selectedFile)
  }

  return (
    <div
      className="relative min-h-screen pt-[29px]"
      style={{ backgroundColor: '#000000ff', color: '#F0F2F7' }}
    >
      <div className="fixed inset-0 z-0">
        <GravityStarsBackground
          starsCount={80}
          starsOpacity={0.6}
          glowIntensity={12}
          mouseGravity="attract"
        />
      </div>

      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-99px)] flex-col items-center justify-center px-4">
        {!file ? (
          <EditorHero onFileSelect={handleFileSelect} />
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium">File selected:</p>
            <p className="mt-1" style={{ color: '#9BA3B8' }}>
              {file.name}
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
