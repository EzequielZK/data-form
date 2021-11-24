function removeMask(value) {
  return value ? `${value}`.replace(/[^\d]/g, "") : value;
}

export { removeMask };
