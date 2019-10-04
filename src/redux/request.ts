const local: any = localStorage.getItem('state')

export const environment = {
  apiUrl : 'http://localhost:4201',
  localParce : JSON.parse(local)
  };

export async function callApi(method: string, path: string, data ?: object, url: string = environment.apiUrl) {  
  console.log('sss', method, path, ' ', data);
  const response = await fetch(`${url}/${path}`, {
    method : method,
    headers:{ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${environment.localParce.login.token}` || '',
    },
     body: !(method === "GET") ? JSON.stringify(data) : null
  }).then(d => d.json()) 
   return await response
}

