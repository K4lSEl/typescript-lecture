// src/characters/holy-priest.ts
import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Reviveable } from "./reviveable.ts";

// extends, implements を正しく設定する
export class HolyPriest extends XXX implements XXX {
  attack() {
    // 実装する
  }

  heal(target: Character) {
    // 実装する
  }

  revive(target: Character) {
    // 実装する
  }
}
