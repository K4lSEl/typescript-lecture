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
    if (!target.isDead()) {
      target.takeHeal(15);
    } else {
      console.log(`${target.getName}は倒れていて回復できない`);
    }
  }

  revive(target: Character) {
    // 実装する
    if (target.isDead()) {
      target.takeHeal(50);
    } else {
      console.log(`${target.getName}はまだ倒れていない`);
    }
  }
}
