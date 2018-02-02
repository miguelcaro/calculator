export const formatCurrency = (val) => {
  if (!val) return;
  return parseFloat(val)
    .toFixed(1)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    .replace(/(\.[0-9]*?)0+/g, "");
}