import { useState } from "react";
import { triggerOrderAndPayment } from "./api";
import { logger } from "./logger";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const startFlow = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    logger.info("User triggered order + payment flow");

    try {
      const res = await triggerOrderAndPayment(1);
      setResponse(res);
    } catch (err: any) {
      setError(err?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>GatewayStack</h2>

        <button onClick={startFlow} disabled={loading} style={styles.button}>
          {loading ? "Processing..." : "Trigger Flow"}
        </button>

        {response && (
          <pre style={styles.success}>{JSON.stringify(response, null, 2)}</pre>
        )}

        {error && <div style={styles.error}>{error}</div>}
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
    background: "#020617",
    color: "#e5e7eb",
  },
  card: {
    width: 420,
    padding: 32,
    borderRadius: 12,
    border: "1px solid #1e293b",
  },
  button: {
    width: "100%",
    padding: 12,
    marginTop: 12,
    fontWeight: 600,
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "#fff",
  },
  success: {
    marginTop: 16,
    padding: 12,
    border: "1px solid #14532d",
    color: "#4ade80",
    fontSize: 13,
  },
  error: {
    marginTop: 16,
    padding: 12,
    background: "#450a0a",
    color: "#fca5a5",
  },
};
