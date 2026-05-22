const featureCards = [
    { accent: '#0099ff', title: 'Annotate PDFs' },
    { accent: '#1ed760', title: 'Annotate PDFs' },
    { accent: '#d000ff', title: 'Annotate PDFs' },
]

function UploadIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
            <path
                d="M12 16V4m0 0-4 4m4-4 4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            <path
                d="M5 15.5v2.75A1.75 1.75 0 0 0 6.75 20h10.5A1.75 1.75 0 0 0 19 18.25V15.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
            />
        </svg>
    )
}

function DocumentIcon({ accent }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 96 96" className="size-[104px]" fill="none">
            <path
                d="M29 11h27l16 16v51a7 7 0 0 1-7 7H29a7 7 0 0 1-7-7V18a7 7 0 0 1 7-7Z"
                stroke={accent}
                strokeLinejoin="round"
                strokeWidth="4"
            />
            <path d="M56 11v16h16" stroke={accent} strokeLinejoin="round" strokeWidth="4" />
            <path d="M35 43h10m-10 15h25m-25 14h25" stroke={accent} strokeLinecap="round" strokeWidth="4" />
        </svg>
    )
}

function FeatureCard({ accent, title }) {
    return (
        <article className="flex h-[270px] w-[340px] flex-col items-center border border-white/80 bg-black px-8 pt-6 text-center">
            <DocumentIcon accent={accent} />
            <h3 className="mt-5 text-[26px] font-semibold leading-8 text-white">{title}</h3>
            <p className="mt-4 max-w-[290px] text-[17px] leading-[22px] text-[#f2f2f2]">
                Add text, highlights, shapes, and more to your documents
            </p>
        </article>
    )
}

function EditorHero({ onFileSelect }) {
    function handleChange(e) {
        const file = e.target.files[0]

        if (file) onFileSelect(file)
    }

    return (
        <section className="flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
            <div className="flex w-full flex-col items-center gap-8">
                <div className="w-full self-start pl-[64px] uppercase text-white">
                    <h1 className="text-[80px] font-bold leading-[0.94] tracking-[0]">
                        <span className="block">Cheat Smarter</span>
                        <span className="block">
                            Score <span className="font-black italic text-[#dc0d0d]">Higher</span>
                        </span>
                    </h1>
                    <p className="mt-5 text-[26px] font-normal normal-case leading-9">
                        Edit PDFs Online with Ease
                    </p>
                </div>

                <label className="flex h-14 cursor-pointer items-center gap-3 border border-black bg-white px-6 text-[22px] font-medium leading-8 text-black transition-colors hover:bg-white/90">
                    <UploadIcon />
                    <span>Get Started - Upload PDF</span>
                    <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-9">
                {featureCards.map((card) => (
                    <FeatureCard key={card.accent} {...card} />
                ))}
            </div>
        </section>
    )
}

export default EditorHero
