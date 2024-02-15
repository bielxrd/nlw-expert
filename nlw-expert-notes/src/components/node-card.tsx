export function NoteCard() {
    return (

        <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400'>
            <span className='text-sm font-medium text-slate-300'>
                há 2 dias
            </span>

            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui eum reprehenderit! Porro veniam voluptatibus assumenda reiciendis saepe omnis perspiciatis quod voluptate? Hic consectetur eos amet debitis nisi eius vel.
            </p>

            <div className='absolute botton-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />

        </button>
    )
}