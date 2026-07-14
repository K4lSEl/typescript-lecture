import type { Character } from "./character";

export interface Reviveable {
  // インターフェースを定義する
  revive(target: Character): void;
}
