"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });
exports.characters = ["Flash", "Superman", "Green Lantern", "Batman"];
const [hero1, hero2, hero3, hero4] = exports.characters;
// console.log(hero3);
