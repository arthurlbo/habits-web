import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'phosphor-react';

import logoImage from '../assets/logo.svg';
import NewHabitForm from './NewHabitForm';

const Header = () => {
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logoImage} alt="Habits" />

            <Dialog.Root>
                <Dialog.Trigger
                    type="button"
                    className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
                >
                    <Plus size={20} className="text-violet-500" /> Novo hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.DialogOverlay className="w-screen h-screen bg-black/80 fixed inset-0" />
                    <Dialog.DialogContent className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.DialogClose className="absolute right-6 text-zinc-400 hover:text-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                            <X size="24" aria-label="fechar" />
                        </Dialog.DialogClose>
                        <Dialog.Title className="text-3xl leading-tight font-extrabold text-white">
                            Criar hábito
                        </Dialog.Title>
                        <NewHabitForm />
                    </Dialog.DialogContent>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
};

export default Header;