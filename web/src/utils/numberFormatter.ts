function numberFormatter(number: string | number | undefined) {
  return Intl.NumberFormat("en-US").format(Number(number));
}

export { numberFormatter };
