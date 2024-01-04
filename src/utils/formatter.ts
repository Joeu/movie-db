export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatRate = (rate: number) => {
  return parseFloat(rate.toFixed(1));
};

export const formatCurrency = (value: number, code: string = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
  }).format(value);
};
