
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
  makeRequest('GET', `/api/tasks/`)
  .then ( (tasks) => {
    // TODO
    console.log(tasks);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const getUsers = () => {
  makeRequest('GET', `/api/users/`)
  .then ( (users) => {
    // TODO
    console.log(users);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const getTaskById = (id) => {
  makeRequest('GET', `/api/tasks/${id}`)
  .then ( (tasks) => {
    // TODO
    console.log(tasks);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const getUserById = (id) => {
  makeRequest('GET', `/api/users/${id}`)
  .then ( (users) => {
    // TODO
    console.log(users);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const postTask = (body) => {
  makeRequest('POST', `/api/tasks/`, body)
  .then ( (tasks) => {
    // TODO
    console.log(tasks);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const postUser = (body) => {
  makeRequest('POST', `/api/users/`, body)
  .then ( (users) => {
    // TODO
    console.log(users);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const putTask = (id, body) => {
  makeRequest('PUT', `/api/tasks/${id}`, body)
  .then ( (tasks) => {
    // TODO
    console.log(tasks);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const putUser = (id, body) => {
  makeRequest('PUT', `/api/users/${id}`, body)
  .then ( (users) => {
    // TODO
    console.log(users);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const deleteTask = (id, body) => {
  makeRequest('DELETE', `/api/tasks/${id}`, body)
  .then ( (tasks) => {
    // TODO
    console.log(tasks);
  })
  .catch ( (error) => {
    console.log(error);
  });
}

const deleteUser = (id, body) => {
  makeRequest('DELETE', `/api/users/${id}`, body)
  .then ( (users) => {
    // TODO
    console.log(users);
  })
  .catch ( (error) => {
    console.log(error);
  });
}