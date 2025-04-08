import fs from "fs";

export interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * repository: StorageRepository
   */ {}

  execute({
    fileContent,
    destination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);

      console.log("File was created");

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
