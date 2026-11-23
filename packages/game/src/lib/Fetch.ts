export async function sendJSON<T = any>(
  url: string,
  options: { method?: string; json?: any } = {}
): Promise<T> {
  const res = await fetch(url, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: options.json ? JSON.stringify(options.json) : undefined,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: res.statusText }));
    const err = new Error(body.message || 'Request failed') as any;
    err.body = body;
    throw err;
  }
  return res.json();
}
