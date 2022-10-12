export const createTask = taskData => {
  return fetch(process.env.VERCEL_URL, {
    method: "POST",
    body: JSON.stringify(taskData),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
