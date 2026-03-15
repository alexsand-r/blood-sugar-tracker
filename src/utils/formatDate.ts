//.. функція форматує дату з  date: "2026-03-10", на 10.03.2026 щоб рендерити на сторінці
export const formatDate = (date: string) => {
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}.${month}.${year}`;
};
