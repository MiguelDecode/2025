import { buildLogger, logger } from "../../src/plugins/logger.plugin";

describe("Tests on file logger.plugin", () => {
  test("should return a function logger  ", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("should log a message", () => {
    const winstonLoggerMock = jest.spyOn(logger, "log");

    const message = "Test message";
    const service = "Test service";

    const newLog = buildLogger(service);

    newLog.log(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });
});

