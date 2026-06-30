import { Enemy } from "./enemy";

const slime = new Enemy("スライム", 50, 10);
slime.showStatus();
slime.attack();
slime.takeDamage(40);
slime.showStatus();
slime.attack();
