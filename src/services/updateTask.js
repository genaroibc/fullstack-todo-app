export const updateTask = ({ taskId, taskData }) => {
  const URL = `${process.env.NEXT_PUBLIC_TASKS_API_URL}/${taskId}`;

  return fetch(URL, {
    method: "PUT",
    body: JSON.stringify(taskData),
    headers: {
      "Content-Type": "application/json"
    }
  });
};
