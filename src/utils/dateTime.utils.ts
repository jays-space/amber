export const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("za", {
    day: "numeric",
    weekday: "short",
    month: "short",
    year: "numeric",
  });
};
