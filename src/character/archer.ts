import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;

  constructor(
    name: string,
    hp: number,
    power: number,
    arrows: number,
    defense: number,
  ) {
    super(name, hp, power, defense);
    this.arrows = arrows;
  }

  override attack(opponent: Character) {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows--;
    console.log(`${this.name} は矢を放った!`);

    opponent.takeDamage(this.power);
  }
}
