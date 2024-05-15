import { getAccessToken } from "./auth";


let URL = import.meta.env.VITE_BASE_URL;

export const getAllTasks = async () => {
    console.log('url', URL);

    const response = await fetch(`${URL}/tasks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
        },
    });
    if (!response.ok) {
        throw new Error('Invalid credentials');
    }
    const tasks = await response.json();
    return tasks;
};

export const createTask = async (task: string) => {
    const response = await fetch(`${URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify({ name: task }),

    });
    const status = response.status;
    const res = await response.json();
    console.log('>>>>>> createTask API status', res.error)

    if (status === 201 || status === 200) {
        return { status, data: res.data };
    } else {
        console.log('Error', res.error);

        return { status, data: res.error };
    }
};


export const deleteTask = async (id: string) => {
    const response = await fetch(`${URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify({ id: id }),
    });
    console.log('>>>>>> deleteTask API status', response);
    return response.status;
}


export const updateTask = async (id: string, task: { name: string }) => {
    const response = await fetch(`${URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify(task),
    });
    const status = response.status;
    const res = await response.json();
    console.log('>>>>>> updateTask API status', res);
    if (status === 200) {
        return { status, data: res.data };
    } else {
        return { status, data: res.error };
    }
}

export const toggleTaskStatus = async (id: string, status: string) => {
    const response = await fetch(`${URL}/tasks/${id}/status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify({ status: status }),
    });
    const res = await response.json();
    console.log('>>>>>> toggleTaskStatus API status', res);
    return { status: response.status, data: res.data};
}


export const removeAllChecked = async () => {
    const response = await fetch(`${URL}/tasks/reset/uncheck-all`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
        },
    });
    return response.status;
}