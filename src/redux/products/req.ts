export const environment = {
  apiUrl : 'http://localhost:4201',
  };

export async function callApiProducts(method: string, path: string, data ?: object, url: string = environment.apiUrl) {
  const response = await fetch(`${url}/${path}`, {
    method : method,
    headers:{ 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: !(method === "GET") ? JSON.stringify(data) : null
  }).then(d => d.json()) 
   return await response
}
