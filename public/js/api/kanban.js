const makeRequest = (method, url, body) => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (body) xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    (body) ? xhr.send(body) : xhr.send();
  });
}

const getTasks = () => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/tasks/`)
    .then ( (tasks) => {
      resolve(tasks);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/users/`)
    .then ( (users) => {
      resolve(users);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const getTaskById = (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/tasks/${id}`)
    .then ( (tasks) => {
      resolve(tasks);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const getUserById = (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/users/${id}`)
    .then ( (users) => {
      resolve(users);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const postTask = (body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/tasks/`, body)
    .then ( (tasks) => {
      resolve(tasks);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const postUser = (body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/users/`, body)
    .then ( (users) => {
      resolve(users);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const putTask = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('PUT', `/api/tasks/${id}`, body)
    .then ( (tasks) => {
      resolve(tasks);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const putUser = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('PUT', `/api/users/${id}`, body)
    .then ( (users) => {
      resolve(users);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const deleteTask = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('DELETE', `/api/tasks/${id}`, body)
    .then ( (tasks) => {
      resolve(tasks);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}

const deleteUser = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('DELETE', `/api/users/${id}`, body)
    .then ( (users) => {
      resolve(users);
    })
    .catch ( (error) => {
      reject(error);
    });
  });
}