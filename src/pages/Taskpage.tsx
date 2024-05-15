import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { WrapperComponent } from '../components/HOC/WrapperComponent';
import EachTask from '../components/EachTask';
import { createTask, deleteTask, getAllTasks, removeAllChecked, toggleTaskStatus, updateTask } from '../services/tasks';
import RemoveCheckedButton from '../components/RemoveCheckedButton';
import LogOutButton from '../components/LogOutButton';


const Taskpage: React.FC = () => {
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<TaskDto[]>([])
    const [errorMessage, setErrorMessage] = useState<string>('');


    useEffect(() => {
        document.title = 'Taskpage';
        const fetchTasks = async () => {
            const response = await getAllTasks()
            setTasks(response.data)
        }
        fetchTasks();
    }, [])

    const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await createTask(newTask);
        if (res.status === 201 || res.status === 200) {
            setTasks([res.data, ...tasks]);
            setNewTask('');
            setErrorMessage(''); // Clear error message on successful submission

        } else {
            setErrorMessage(res.data);
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }
    };

    const handleDeleteTask = async (id: string) => {
        const response = await deleteTask(id);
        if (response === 200) {
            setTasks(tasks.filter(task => task.id !== id));
        } else {
            setErrorMessage("Error failed to delete task");
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }
    }

    const handleToggleStatus = async (id: string) => {
        const taskToUpdate = tasks.find(task => task.id === id);
        if (!taskToUpdate) return;

        const newStatus = taskToUpdate.status === "DONE" ? "TODO" : "DONE";
        const response = await toggleTaskStatus(id, newStatus);
        if (response.status === 200) {
            setTasks(tasks.map(task => (task.id === id ? response.data : task)));
        }
    };


    const handleUpdateTask = async (id: string, newName: string) => {
        const response = await updateTask(id, { name: newName });
        if (response.status === 200) {
            setTasks(tasks.map(task => (task.id === id ? response.data : task)));
        }
    };


    const handleRemoveCheckedTasks = async () => {
        const res = await removeAllChecked();
        if (res === 200) {
            const updatedTasks = tasks.map(task => {
                if (task.status === 'DONE') {
                    return { ...task, status: 'TODO' };
                }
                return task;
            });
            setTasks(updatedTasks);
            setErrorMessage('');
        } else {
            setErrorMessage('Error failed to remove checked');
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }
    };







    return (
        <WrapperComponent>
            <LogOutButton />
            <div className='flex flex-col w-full pt-[40px] md:pt-[60px] lg:pt-[80px] md:w-4/5 lg:w-1/2 mx-auto'>
                <div className='text-center'>
                    <h1 className='uppercase font-poppins font-bold text-2xl md:text-3xl lg:text-5xl'>Todo list</h1>
                </div>
                <div className='w-full px-2 mt-4 md:mt-6 lg:mt-10 '>
                    <form onSubmit={handleCreateTask} className='flex flex-row justify-center items-center space-x-2 w-full'>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="font-poppins font-light h-10 md:h-14 lg:h-16 w-full bg-gray-50 border text-center border-gray-300 py-2 md:py-4 lg:py-4 px-3 md:px-5 lg:px-8 text-gray-900 text-lg md:text-xl lg:text-2xl rounded-lg"
                            placeholder="Add Todo"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            required={true}
                        />
                        <button type="submit" className="">
                            <Icon
                                icon="ooui:add"
                                className="md:mr-6 text-white-normal h-10 md:h-14 lg:h-16 w-10 md:w-14 lg:w-16 text-white bg-sky-600 hover:bg-sky-800"
                            />
                        </button>
                    </form>
                    <p className={` text-red-600 text-center mt-2 font-poppins h-10`}>{errorMessage}</p>

                </div>
                <div className=' flex px-2 mt-10'>
                    <ul className=' w-full'>
                        {
                            tasks.map((task: TaskDto, index: number) => (
                                <li key={index}>
                                    <EachTask
                                        id={task.id}
                                        name={task.name}
                                        status={task.status}
                                        onDelete={handleDeleteTask}
                                        onUpdateTask={handleUpdateTask}
                                        onToggleStatus={handleToggleStatus}
                                    />
                                    <hr className={`${index === tasks.length - 1 ? "hidden" : ""} my-[2px] md:my-[5px] lg:my-[10px] h-[1px] border-t-0 bg-gray-500 dark:bg-white/10`} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <RemoveCheckedButton onRemoveChecked={handleRemoveCheckedTasks} />
            </div>

        </WrapperComponent>
    )
}
export default Taskpage;