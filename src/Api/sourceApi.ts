// export const api = 'https://small-officer.herokuapp.com/api/user';

// export const api = 'http://localhost:8000/api/user';

const ap = process.env.REACT_APP_API_URL

console.log(ap)

export const api = `${ap}/api/user`
