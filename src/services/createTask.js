export const createTask = taskData => {
  return fetch(
    `${process.env.VERCEL_URL}${process.env.NEXT_PUBLIC_TASKS_API_ENDPOINT}`,
    {
      method: "POST",
      body: JSON.stringify(taskData),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
};
