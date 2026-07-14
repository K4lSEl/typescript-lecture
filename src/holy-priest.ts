// src/characters/holy-priest.ts
import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Reviveable } from "./reviveable.ts";

// extends, implements を正しく設定する
export class HolyPriest extends Character implements Healable, Reviveable {
  attack(opponent: Character) {
    // 実装する
    console.log(`${this.name}は攻撃ができない`);
  }

  heal(target: Character) {
    // 実装する
    target.takeHeal(15);
  }

  revive(target: Character) {
    // 実装する
    if (target.isDead()) {
      target.takeHeal(50);
    } else {
      console.log(`${this.name}はまだ倒れていない`);
    }
  }
}
