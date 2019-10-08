import axios from 'axios';

export const environment = {
  apiUrl: 'http://localhost:4201',
};

export function callApi(method: any, path: string, body?: object) {
  const local: any = localStorage.getItem('state');
  const localParce:any = JSON.parse(local);
  return (
    axios({
      url: `${environment.apiUrl}/${path}`,
      method: method,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localParce.login.token}` || '',
      }
    }
    ).then((response: any) => response.data)
  );
}
