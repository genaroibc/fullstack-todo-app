export const deleteTask = task_id => {
  const URL = `${process.env.NEXT_PUBLIC_TASKS_API_URL}/${task_id}`;

  return fetch(URL, { method: "DELETE" });
};
