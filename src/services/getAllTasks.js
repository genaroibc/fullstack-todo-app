export function getAllTasks({ cookie }) {
  const URL = process.env.NEXT_PUBLIC_TASKS_API_URL;

  return fetch(URL, {
    headers: {
      cookie
    }
  });
}
