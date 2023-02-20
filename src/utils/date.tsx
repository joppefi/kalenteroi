export const format = (date: string) => {
  return new Date(date).toLocaleDateString("fi-fi", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
