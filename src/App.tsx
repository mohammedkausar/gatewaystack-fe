import { triggerOrderAndPayment } from "./api";
import { logger } from "./logger";

function App() {
  const startFlow = async (): Promise<void> => {
    logger.info("User triggered order + payment flow");

    try {
      await triggerOrderAndPayment(1);
    } catch {
      // failures already logged
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>GatewayStack</h2>
        <p style={styles.subtitle}>
          Trigger order and payment flow across services
        </p>

        <button style={styles.button} onClick={startFlow}>
          Trigger Flow
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    color: "#e5e7eb",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: 12,
    padding: 32,
    width: 360,
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    textAlign: "center",
  },
  title: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 600,
  },
  subtitle: {
    marginBottom: 24,
    fontSize: 14,
    color: "#94a3b8",
  },
  button: {
    width: "100%",
    padding: "12px 16px",
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
  },
};

export default App;
