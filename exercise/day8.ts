class Employee {
  name: string;
  gender: string;
  workingHour: number;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
    this.workingHour = 0;
  }
}

class FulltimeEmployee extends Employee {
  normalSalary: number;
  overtimeSalary: number;
  constructor(name: string, gender: string) {
    super(name, gender);
    this.normalSalary = 100_000;
    this.overtimeSalary = 0;
  }

  addWorkingHour(hour: number) {
    this.workingHour += hour;
  }

  calculateSalary() {
    if (this.workingHour < 6) {
      this.normalSalary *= this.workingHour;
    } else {
      this.normalSalary *= this.workingHour - (this.workingHour - 6);
      console.log(this.normalSalary);

      if (this.workingHour >= 7) {
        this.overtimeSalary = (this.workingHour - 6) * 75_000;
      }
    }

    return {
      name: this.name,
      gender: this.gender,
      normalSalary: `Rp ${this.normalSalary.toLocaleString("id-ID")},00`,
      overtimeSalary: `Rp ${this.overtimeSalary.toLocaleString("id-ID")},00`,
      totalSalary: `Rp ${(
        this.normalSalary + this.overtimeSalary
      ).toLocaleString("id-ID")},00`,
    };
  }
}

class ParttimeEmployee extends Employee {
  normalSalary: number;
  overtimeSalary: number;

  constructor(name: string, gender: string) {
    super(name, gender);
    this.normalSalary = 50_000;
    this.overtimeSalary = 0;
  }

  addWorkingHour(hour: number) {
    this.workingHour += hour;
  }

  calculateSalary(): {} {
    if (this.workingHour < 6) {
      this.normalSalary *= this.workingHour;
    } else {
      this.normalSalary *= this.workingHour - (this.workingHour - 6);
      console.log(this.normalSalary);

      if (this.workingHour >= 7) {
        this.overtimeSalary = (this.workingHour - 6) * 30_000;
      }
    }

    return {
      name: this.name,
      gender: this.gender,
      normalSalary: `Rp ${this.normalSalary.toLocaleString("id-ID")},00`,
      overtimeSalary: `Rp ${this.overtimeSalary.toLocaleString("id-ID")},00`,
      totalSalary: `Rp ${(
        this.normalSalary + this.overtimeSalary
      ).toLocaleString("id-ID")},00`,
    };
  }
}

const pegawai1 = new FulltimeEmployee("Budi Tabuti", "Male");
pegawai1.addWorkingHour(2);
pegawai1.addWorkingHour(2);
console.log(pegawai1.calculateSalary());

const pegawai2 = new ParttimeEmployee("Susi Tabuti", "Male");
pegawai2.addWorkingHour(3);
pegawai2.addWorkingHour(3);
pegawai2.addWorkingHour(3);
pegawai2.addWorkingHour(3);
console.log(pegawai2.calculateSalary());

// 2
class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string) {
    this.name = name;
    // 👇 Health dan power gabisa diubah
    this.health = 100;
    this.power = 10;
  }

  damage(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    if (this.health <= 0) {
      this.health = 0;
    }

    if (this.power <= 0) {
      this.power = 0;
    }

    return {
      health: this.health,
      power: this.power,
    };
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
    const number: number[] = [0, 10];
    return {
      health: number[Math.floor(Math.random() * 1.9)],
      power: number[Math.floor(Math.random() * 1.9)],
    };
  }

  start() {
    const beforeGame: {} = {};
    const afterGame: any[] = [];

    beforeGame["PlayerA"] = this.player1.showStatus();
    beforeGame["PlayerB"] = this.player2.showStatus();
    
    while (this.player1.health >= 0 || this.player2.health >= 0) {
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());

      afterGame.push({
        PlayerA: this.player1.showStatus(),
        PlayerB: this.player2.showStatus(),
      });

      this.player2.damage(this.player1.power);
      this.player1.damage(this.player2.power);

      afterGame.push({
        PlayerA: this.player1.showStatus(),
        PlayerB: this.player2.showStatus(),
      });

      if (this.player1.health <= 0 && this.player2.health <= 0) {
        this.player1.health = 0;
        return {
          beforeGame,
          afterGame,
          winName: `Draw.`,
        };
      } else if (this.player2.health <= 0) {
        this.player2.health = 0;
        return {
          beforeGame,
          afterGame,
          winName: `${this.player1.name} Win.`,
        };
      } else if (this.player1.health <= 0) {
        this.player1.health = 0;
        return {
          beforeGame,
          afterGame,
          winName: `${this.player2.name} Win.`,
        };
      }
    }
  }
}

const playerA: Player = new Player("PlayerA");
const playerB: Player = new Player("PlayerB");
const game1: ShootingGame = new ShootingGame(playerA, playerB);
console.log(game1.start());
