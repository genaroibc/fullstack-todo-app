export const deleteTask = task_id => {
  return fetch(
    `${process.env.VERCEL_URL}${process.env.NEXT_PUBLIC_TASKS_API_ENDPOINT}/${task_id}`,
    {
      method: "DELETE",
    }
  );
};
