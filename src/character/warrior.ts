import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;

  constructor(
    name: string,
    hp: number,
    weapon: string,
    power: number,
    defense: number,
  ) {
    super(name, hp, power, defense); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);

    opponent.takeDamage(this.power);
  }
}
