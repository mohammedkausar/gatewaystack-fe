import { logger } from "./logger";

export async function triggerOrderFlow(orderId: number): Promise<void> {
  const endpoint = `/api/orders/${orderId}`;

  logger.info("API request initiated", {
    endpoint,
    orderId,
  });

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    logger.info("API request completed", {
      endpoint,
      orderId,
      status: res.status,
    });
  } catch (err) {
    logger.error("API request failed", {
      endpoint,
      orderId,
      error: (err as Error).message,
    });

    throw err;
  }
}
