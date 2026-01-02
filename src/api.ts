import { logger } from "./logger";

async function callApi(
  method: "GET" | "POST",
  endpoint: string,
  meta: Record<string, unknown>
): Promise<void> {
  logger.info("API request started", {
    method,
    endpoint,
    ...meta,
  });

  try {
    const res = await fetch(endpoint, { method });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    logger.info("API request successful", {
      method,
      endpoint,
      status: res.status,
      ...meta,
    });
  } catch (err) {
    logger.error("API request failed", {
      method,
      endpoint,
      error: (err as Error).message,
      ...meta,
    });

    throw err;
  }
}

export async function triggerOrderAndPayment(orderId: number): Promise<void> {
  await callApi("GET", `/api/orders/${orderId}`, {
    orderId,
    service: "orders-service",
  });

  await callApi("POST", `/api/payments/${orderId}`, {
    orderId,
    service: "payments-service",
  });
}
