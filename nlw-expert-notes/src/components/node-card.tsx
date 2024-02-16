import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
interface NoteCardProps {
    note: {
        date: Date
        content: string
    }
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md text-left flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus:ring-lime-400 outline-none">
                <span className='text-sm font-medium text-slate-300'>
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>

                <p className='text-sm leading-6 text-slate-400'>
                    {note.content}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none">
                    <div className="flex flex-1 flex-col gap-3 p-5">
                        <span className='text-sm font-medium text-slate-300'>
                            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                        </span>

                        <p className='text-sm leading-6 text-slate-400'>
                            {note.content}
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}