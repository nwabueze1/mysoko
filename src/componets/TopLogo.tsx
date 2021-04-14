import StyleSheet from "./Stylesheet";

interface TopLogoProps {
  title: string | JSX.Element;
}

export default function TopLogo({ title }: TopLogoProps): JSX.Element {
  return (
    <div style={styles.container} className="sticky-top">
      <span className="text-white text-capitalize ml-5">{title}</span>
    </div>
  );
}

const styles: StyleSheet = {
  container: {
    alignItems: "center",
    backgroundColor: "rgb(138, 138, 138)",
    display: "flex",
    height: 50,
    width: "100%",
  },
};
