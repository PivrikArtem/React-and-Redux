const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept': 'application/json'
};
const ipUrl = 'http://repetitora.net/api/JS/Tasks';
const corsMode = 'cors';

function requestData(url, type, body) {
    return fetch(url, {
        method: type,
        body: body,
        headers: headers,
        mode: corsMode

    })
        .then(result => result.json());
}

export default function createTask(title, widgetId) {

    const data = new URLSearchParams();
    
    data.append('title', title);
    data.append('widgetId', widgetId)

    return requestData(ipUrl, 'POST', data);
}

export function removeTask(taskId, widgetId) {

    const data = new URLSearchParams();
    
    data.append('taskId', taskId);
    data.append('widgetId', widgetId)

    return requestData(ipUrl, 'DELETE', data);
}

export function upDateTask(widgetId, taskId, isDone = null, title = null) {

    const data = new URLSearchParams();

    data.append('widgetId', widgetId);
    data.append('taskId', taskId);
    
    if (isDone != null) data.append('done', isDone);
    else if (title != null) data.append('title', title);

    return requestData(ipUrl, 'PUT', data);
}

export function getTasks(widgetId) {
    return requestData(`${ipUrl}?widgetId=${widgetId}&count=30`, 'GET', null);
}


