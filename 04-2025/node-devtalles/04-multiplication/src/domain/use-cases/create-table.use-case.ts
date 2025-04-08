export interface createTableOptions {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute: (options: createTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  execute({ base, limit = 10 }: createTableOptions) {
    let output = `
${"=".repeat(20)}
${" ".repeat(5)}Tabla del ${base}${" ".repeat(10)}
${"=".repeat(20)}\n\n`;

    for (let i = 1; i <= limit; i++) {
      output += `${base} * ${i} = ${base * i}\n`;
    }

    return output;
  }
}
