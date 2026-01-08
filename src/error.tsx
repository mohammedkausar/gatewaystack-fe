export default function Error404() {
  return (
    <div style={styles.page}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#020617",
    color: "#e5e7eb",
  },
};
