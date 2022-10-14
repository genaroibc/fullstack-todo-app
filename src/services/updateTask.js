export const updateTask = (task_id, task_data) => {
  const URL = `${process.env.NEXT_PUBLIC_TASKS_API_URL}/${task_id}`;

  return fetch(URL, {
    method: "PUT",
    body: JSON.stringify(task_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
