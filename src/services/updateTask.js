export const updateTask = (task_id, task_data) => {
  return fetch(
    `${process.env.VERCEL_URL}${process.env.NEXT_PUBLIC_TASKS_API_ENDPOINT}/${task_id}`,
    {
      method: "PUT",
      body: JSON.stringify(task_data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
