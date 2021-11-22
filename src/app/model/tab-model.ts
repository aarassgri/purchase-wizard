export class Tab {
  heading: string;
  points: string[];
  price: number;

  constructor(heading: string, points: string[], price: number) {
    this.heading = heading;
    this.points = points;
    this.price = price;
  }
}
