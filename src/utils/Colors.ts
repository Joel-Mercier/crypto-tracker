const colors = {
  primary: "#4b7bec",
  textColor: "#2C3A47",
  mutedTextColor: "#70879c",
  lightBorder: "#f1f2f6",
  error: "#e55039",
  errorLight: "#f8c291",
  success: "#78e08f",
  successLight: "#b8e994",
};

export const colorShade = (col: string, amt: number): string => {
  col = col.replace(/^#/, "");
  if (col.length === 3) {
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];
  }

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
};

export default colors;
