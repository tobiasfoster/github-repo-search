function truncateText(text: string | undefined) {
  if (!text) {
    return "";
  }

  if (text.length >= 300) {
    const substring = text.substring(0, 297);
    return substring + "...";
  }

  return text;
}

export default truncateText;
