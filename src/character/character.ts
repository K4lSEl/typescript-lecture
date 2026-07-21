export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない
  protected power: number;
  protected defense: number;

  constructor(name: string, hp: number, power: number, defense: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
    this.defense = defense;
  }

  // 名前を返すメソッド
  getName() {
    return this.name;
  }

  // ステータスを表示
  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  // 回復させる
  takeHeal(amount: number): void {
    this.hp += amount;
  }

  //TODO: ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  // HPga０以下かどうか
  isDead(): boolean {
    return this.hp <= 0;
  }

  // 攻撃する相手を引数にとる
  abstract attack(opponent: Character): void;
}
