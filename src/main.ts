import { Enemy } from "./enemy";
import { Warrior } from "./warrior";

const slime = new Enemy("スライム", 50, 10);
const warrior = new Warrior("勇者", 100, "エクスカリバー", 20);

while (!warrior.isDead() && !slime.isDead()) {
  warrior.attack(slime);
  slime.showStatus();

  if (slime.isDead()) {
    console.log("スライムを倒した");
    break;
  }

  slime.attack(warrior);
  warrior.showStatus;

  if (warrior.isDead()) {
    console.log("勇者は倒された");
    break;
  }
}
