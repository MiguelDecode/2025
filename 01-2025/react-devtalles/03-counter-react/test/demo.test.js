test("This test is a demo", () => {
  // 1.Inicialización
  const msgOne = "Hola Mundo";

  // 2.Estímulo
  const msgTwo = msgOne.trim();

  // Observar el comportamiento
  expect(msgOne).toBe(msgTwo);
});
