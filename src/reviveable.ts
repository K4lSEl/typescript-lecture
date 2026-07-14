import type { Character } from "./character";

export interface Reviveable {
  // インターフェースを定義する
  reviveable(target: Character): void;
}
