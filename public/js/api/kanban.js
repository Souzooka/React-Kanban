
const makeRequest = (method, url) => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
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
    xhr.send();
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
