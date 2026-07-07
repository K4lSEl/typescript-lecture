import { Character } from "./character.ts";

export class Mage extends Character {
  constructor(name: string, hp: number, power: number) {
    super(name, hp, power);
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);
  }
}
