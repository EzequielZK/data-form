const BASE_URL = "http://challenge.rethinkweb.com.br/";

export function apiRequest(method) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    let data = null;

    request.open(method, BASE_URL, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    request.onload = (event) => {
      if (request.status === 200) {
        data = request.response;
        resolve({ data, status: request.status, ok: request.status === 200 });
      } else {
        reject(
          Object.assign(new Error("Ocorreu um erro na requisição"), {
            response: { ...request.response, status: request.status },
          })
        );
      }
    };
    request.send();
  });
}
