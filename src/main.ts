import { Enemy } from "./enemy";
import { Warrior } from "./warrior";
import { Archer } from "./archer";
import { Mage } from "./mage";
import { HolyPriest } from "./holy-priest";

const slime = new Enemy("スライム", 150, 30);
const warrior = new Warrior("勇者", 100, "エクスカリバー", 20);
const archer = new Archer("弓氏", 120, 15, 20);
const mage = new Mage("魔法使い", 200, 20);
const priest = new HolyPriest("僧侶", 300, 0);

while (!warrior.isDead() && !slime.isDead()) {
  warrior.attack(slime);
  slime.showStatus();

  if (slime.isDead()) {
    console.log(`${warrior.getName()}を倒した`);
    break;
  }

  slime.attack(warrior);
  warrior.showStatus();

  if (warrior.isDead()) {
    console.log(`${warrior.getName()}は倒された`);

    priest.revive(warrior);
    console.log(`${priest.getName()}は${warrior.getName()}を復活させた`);
    warrior.showStatus();
    break;
  }
}
