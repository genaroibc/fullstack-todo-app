export const deleteTask = task_id => {
  return fetch(`${process.env.VERCEL_URL}/${task_id}`, {
    method: "DELETE",
  });
};
