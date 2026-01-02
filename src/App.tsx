import type { JSX } from "react";
import { triggerOrderFlow } from "./api";
import { logger } from "./logger";

function App(): JSX.Element {
  const startFlow = async (): Promise<void> => {
    logger.info("User triggered order flow");

    try {
      await triggerOrderFlow(1);
    } catch {
      // failure already logged
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>GatewayStack</h2>
      <button onClick={startFlow}>Trigger Order Flow</button>
    </div>
  );
}

export default App;
