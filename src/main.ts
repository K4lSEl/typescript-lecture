import { Enemy } from "./enemy";
import { Warrior } from "./warrior";
// import { Archer } from "./archer";
import { Mage } from "./mage";
import type { Character } from "./character";
// import { HolyPriest } from "./holy-priest";

const enemy = new Enemy("ドラゴン", 200, 30, 10);
const warrior = new Warrior("勇者", 100, "エクスカリバー", 20, 20);
// const archer = new Archer("弓氏", 120, 15, 20);
const mage = new Mage("魔法使い", 80, 20);
// const holy-priest = new HolyPriest("僧侶", 300, 0);

// パーティ
const party: Character[] = [warrior, mage];
let battleOver = false;

while (true) {
  for (const member of party) {
    if (!member.isDead()) {
      member.attack(enemy);
    }

    if (enemy.isDead()) {
      battleOver = true;
      console.log(`${enemy.getName()}を倒した`);
      break;
    }
  }

  if (battleOver) break;

  // 敵の反撃
  const aliveParty = party.filter((m) => !m.isDead());
  enemy.attack(aliveParty[0]);

  if (party.every((m) => m.isDead())) {
    console.log("パーティは全滅した");
    break;
  }

  for (const member of party) {
    member.showStatus();
  }
  enemy.showStatus();
}
