export const deleteTask = task_id => {
  return fetch(`${process.env.NEXT_PUBLIC_TASKS_API_URL}/${task_id}`, {
    method: "DELETE",
  });
};
