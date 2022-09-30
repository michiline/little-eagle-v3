export const registerRequest = data => {
  return postRequest({
    url: '/auth/register',
    data,
  })
}

export const loginRequest = data => {
  return postRequest({
    url: '/auth/login',
    data,
  })
}

export const checkSessionRequest = data => {
  return getRequest({
    url: '/auth/validateSession',
  })
}

export const logoutRequest = data => {
  return getRequest({
    url: '/auth/logout',
  })
}

const postRequest = async ({ url, data = {} }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response
}

export const getRequest = async ({ url }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'GET',
    credentials: 'include',
  })
  return response
}
