import { emailTemplate } from "../../src/js-foundation/01-template";

describe("Test on file 01-template.js", () => {
  test("should contain a greeting", () => {
    expect(emailTemplate).toBeTruthy();

    expect(emailTemplate).toContain("Hi,");
  });

  test("should contain {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
