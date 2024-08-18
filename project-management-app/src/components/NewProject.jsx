import { createPortal } from 'react-dom';
import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();



    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate === ''
        ) {
            modal.current.open()
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }

    return (
        <>
            <Modal ref={modal} buttonCaption={"Close"}>
                <h2 className="text-xl font-bold text-stone-800 mt-4 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Looks like you forgot to enter a value...</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" label={"Title"} ref={title} />
                    <Input label={"Description"} ref={description} textArea />
                    <Input type="date" label={"Due Date"} ref={dueDate} />
                </div>
            </div>
        </>
    )
}