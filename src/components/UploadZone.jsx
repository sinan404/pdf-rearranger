function UploadZone({ onFileSelect }) {
    function handleChange(e) {
        const file = e.target.files[0]
        if (file) onFileSelect(file)
    }

    function handleDrop(e) {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file) onFileSelect(file)
    }

    function handleDragOver(e) {
        e.preventDefault()
    }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-white/20 rounded-2xl p-16 flex flex-col items-center gap-4 text-center hover:border-blue-500/50 transition-colors cursor-pointer"
        >
            {/* Icon */}
            <div className="text-5xl">📄</div>

            {/* Heading */}
            <div>
                <p className="text-xl font-semibold text-white">Upload your PDF</p>
                <p className="text-sm text-white/40 mt-1">Drag & drop or click to browse · PDF files only</p>
            </div>

            {/* Button */}
            <label className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                Browse files
                <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}

export default UploadZone