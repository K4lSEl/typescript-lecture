import { Enemy } from "./enemy";
import { Warrior } from "./warrior";

const slime = new Enemy("スライム", 50, 10);
const warrior = new Warrior("勇者", 100, "エクスカリバー", 20);

slime.showStatus();
slime.attack(warrior);
slime.takeDamage(40);

warrior.showStatus();
warrior.attack(slime);
warrior.takeDamage(10);
