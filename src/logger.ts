type LogLevel = "info" | "warn" | "error";

interface LogMeta {
  [key: string]: unknown;
}

const ENV = import.meta.env.MODE || "development";
const SERVICE = "gatewaystack-web-ui";

function emit(level: LogLevel, message: string, meta: LogMeta = {}): void {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    service: SERVICE,
    env: ENV,
    message,
    ...meta,
  };

  const out = level === "error" ? console.error : console.log;
  out(JSON.stringify(entry));
}

export const logger = {
  info: (msg: string, meta?: LogMeta) => emit("info", msg, meta),
  warn: (msg: string, meta?: LogMeta) => emit("warn", msg, meta),
  error: (msg: string, meta?: LogMeta) => emit("error", msg, meta),
};
