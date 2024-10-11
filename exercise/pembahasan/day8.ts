// 2
class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} -> Health: ${this.health} | Power: ${this.power}`;
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;

    return { health, power };
  }

  start() {
    while (this.player1.health >= 0 || this.player2.health >= 0) {
      // Show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // get random item
      const player1Item = this.getRandomItem();
      const player2Item = this.getRandomItem();

      // use random item
      this.player1.useItem(player1Item);
      this.player2.useItem(player2Item);

      // hit player
      this.player2.hit(this.player1.power);
      this.player1.hit(this.player2.power);

      // show status
      console.log(this.player1.showStatus);
      console.log(this.player2.showStatus);

      if (this.player1.health <= 0) {
        return `${this.player1.name} WIN`;
      } else {
        return `${this.player2.name} WIN`;
      }
    }
  }
}

const playerA: Player = new Player("PlayerA");
const playerB: Player = new Player("PlayerB");
const game1: ShootingGame = new ShootingGame(playerA, playerB);
game1.start();