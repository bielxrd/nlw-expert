import logo from './assets/Logo-nlw-expert.svg'

export function App() {


  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='Nlw Expert' />

      <form className='w-full'>
        <input
          type='text'
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500'
        />
      </form>


      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-200'>
            Adicionar nota
          </span>

          <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>

        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>
            há 2 dias
          </span>

          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui eum reprehenderit! Porro veniam voluptatibus assumenda reiciendis saepe omnis perspiciatis quod voluptate? Hic consectetur eos amet debitis nisi eius vel.
          </p>

          <div className='absolute botton-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0' />
        </div>


        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>
            há 4 dias
          </span>

          <p className='text-sm leading-6 text-slate-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam autem, ex unde rem repudiandae vel fugiat qui illo consectetur sequi, quisquam facilis quod. Quos blanditiis labore sequi, totam aliquam illo?
          </p>

          <div className='absolute botton-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0' />
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-200'>
            há 6 dias
          </span>

          <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum optio modi, corrupti quo fugit voluptas tempore accusantium nam veritatis aspernatur, ullam beatae cupiditate maiores ad ea architecto labore alias?</p>

          <div className='absolute botton-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0' />
        </div>

      </div>
    </div >

  )
}
