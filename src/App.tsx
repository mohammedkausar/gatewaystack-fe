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
    <div style={{ padding: 24 }}>
      <h2>GatewayStack</h2>
      <button onClick={startFlow}>Trigger Order + Payment Flow</button>
    </div>
  );
}

export default App;
