const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

export const makeRequest = async (url, method, body) => {
  const headers = WITHOUT_BODY_METHODS.includes(method)
    ? {}
    : { 'Content-Type': 'application/json' };

  const res = await fetch(url, {
    method,
    headers,
    body: WITHOUT_BODY_METHODS.includes(method) ? null : body,
  });

  return res.json();
};
