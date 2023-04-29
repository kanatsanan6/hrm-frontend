export const stringToColour = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

export const getContrastColor = (backgroundColor: string): string => {
  const rgb: number[] = backgroundColor.match(/\d+/g)?.map(Number) ?? [];

  const relativeLuminance =
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;

  if (relativeLuminance >= 0.5) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
};
