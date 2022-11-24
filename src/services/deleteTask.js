export const deleteTask = taskId => {
  const URL = `${process.env.NEXT_PUBLIC_TASKS_API_URL}/${taskId}`;

  return fetch(URL, {
    method: "DELETE"
  });
};
