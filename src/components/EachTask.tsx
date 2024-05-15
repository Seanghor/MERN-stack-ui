import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface EachTaskProps {
    id: string;
    name: string;
    status: string;
    onDelete: (id: string) => void;
    onUpdateTask: (id: string, newName: string) => void;
    onToggleStatus: (id: string) => void;
}

const EachTask: React.FC<EachTaskProps> = ({ id, name, status, onDelete, onUpdateTask, onToggleStatus }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(name);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        onUpdateTask(id, newName);
        setIsEditing(false);
    };

    const handleToggle = () => {
        if (!isEditing) {
            onToggleStatus(id);
        }
    };

    return (
        <div className='w-full cursor-pointer hover:bg-white-active px-1 py-2'>
            <div className='flex justify-between'>
                <div onClick={handleToggle} className='flex items-center text-base md:text-xl lg:text-2xl h-10'>
                    <div className='flex items-center'>
                        <Icon
                            icon={status === "DONE" ? "pajamas:todo-done" : "icomoon-free:checkbox-unchecked"}
                            className="w-10  md:mr-4 lg:mr-6 text-xl md:text-2xl lg:text-4xl"
                        />
                    </div>
                    {isEditing ? (
                        <input
                            type="text"
                            value={newName}
                            required={true}
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full text-base md:text-lg lg:text-xl border rounded px-2 md:px-4 lg:px-6 py-2 md:py-1.5 lg:py-2"
                        />
                    ) : (
                        <h5 className='text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2'>{name}</h5>
                    )}
                </div>
                <div className='flex flex-row justify-end items-center'>
                    {isEditing ? (
                        <Icon
                            icon="mdi:check"
                            className="mr-2 md:mr-4 lg:mr-6 text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-green-800 dark:text-green-600"
                            onClick={handleUpdate}
                        />
                    ) : (
                        <Icon
                            icon="wpf:edit"
                            className="mr-2 md:mr-4 lg:mr-6 text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-green-800 dark:text-green-600"
                            onClick={handleEdit}
                        />
                    )}
                    <Icon
                        icon="maki:cross"
                        className="text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-red-800 dark:text-red-600"
                        onClick={() => onDelete(id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default EachTask;
