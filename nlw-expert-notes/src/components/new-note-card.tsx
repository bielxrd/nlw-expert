import * as Dialog from "@radix-ui/react-dialog"
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null;

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
    const [isRecording, setIsRecording] = useState(false);
    const [content, setContent] = useState('')

    function handleStartEditor() {
        setShouldShowOnBoarding(false)
    }

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
        if (event.target.value === '')
            setShouldShowOnBoarding(true)
    }

    function handleContent() {
        setContent('')
        setShouldShowOnBoarding(true)
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault()

        if (content === '') {
            toast.error("Conteúdo da nota não pode ser vazio!")
            return
        }

        onNoteCreated(content)

        setContent('')
        setShouldShowOnBoarding(true)

        toast.success("Nota criada com sucesso!")
    }

    function handleStartRecording() {

        const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

        if (!isSpeechRecognitionAPIAvailable) {
            alert("Infelizmente seu navegador nao suporta a API de gravação de voz.")
            return;
        }

        setIsRecording(true)
        setShouldShowOnBoarding(false)

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

        speechRecognition = new SpeechRecognitionAPI();

        speechRecognition.lang = 'pt-BR';
        speechRecognition.continuous = true;
        speechRecognition.maxAlternatives = 1;
        speechRecognition.interimResults = true;

        speechRecognition.onresult = (event) => {
            const transcription = Array.from(event.results).reduce((text, result) => {
                return text.concat(result[0].transcript)
            }, '')

            setContent(transcription)
        }

        speechRecognition.onerror = (event) => {
            console.error(event.error)
        }

        speechRecognition.start();
    }

    function handleStopRecording() {
        setIsRecording(false);

        if (speechRecognition !== null) {
            speechRecognition.stop();
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md flex flex-col bg-slate-700 text-left p-5 gap-3 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus:ring-lime-400 outline-none'>
                <span className='text-sm font-medium text-slate-200'>
                    Adicionar nota
                </span>
                <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none">
                    <Dialog.Close onClick={() => { handleContent(); handleStopRecording(); }} className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5" />
                    </Dialog.Close>

                    <form className="flex-1 flex flex-col">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className='text-sm font-medium text-slate-300'>
                                Adicionar nota
                            </span>

                            {shouldShowOnBoarding ? (
                                <p className='text-sm leading-6 text-slate-400'>
                                    Comece <button type="button" onClick={handleStartRecording} className="font-medium text-lime-400 hover:underline">gravando uma nota</button> em áudio ou se preferir <button type="button" onClick={handleStartEditor} className="font-medium text-lime-400 hover:underline">utilize apenas texto</button>.
                                </p>
                            ) : (
                                <textarea autoFocus className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                    onChange={handleContentChange}
                                    value={content}
                                />
                            )}
                        </div>

                        {isRecording ? (
                            <button
                                onClick={handleStopRecording}
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100"
                            >
                                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                                Gravando! (clique para interromper)
                            </button>
                        ) : (
                            <button
                                onClick={handleSaveNote}
                                type="button"
                                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
                            >
                                Salvar nota
                            </button>
                        )}
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    )
}