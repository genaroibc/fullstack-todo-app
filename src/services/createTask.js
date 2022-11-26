export const createTask = ({ taskData }) => {
  const URL = process.env.NEXT_PUBLIC_TASKS_API_URL;

  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(taskData),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};
