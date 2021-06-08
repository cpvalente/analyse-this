function validateURL(url) {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
}

export { validateURL };
