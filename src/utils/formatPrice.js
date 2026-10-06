const formatter = new Intl.NumberFormat('fa-IR');

export default function formatPrice(price) {
  return `${formatter.format(price)} تومان`;
}
