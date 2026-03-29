import { Node, Polygon } from '@motion-canvas/2d';
import { shadow, shapes } from "./styles"

export function makeStorage() {
  const radius = 30; // distance from center for inner shapes

  return new Node({
    opacity: 0,
    children: [
      new Polygon({
        sides: shapes.hexagon.sides,
        size: 150,
        fill: shapes.hexagon.color,
        stroke: "white",
        lineWidth: 5,
        rotation: 90,
        ...shadow,
      }),

      new Polygon({
        sides: shapes.triangle.sides,
        size: 40,
        fill: shapes.triangle.color,
        x: Math.cos((4 * Math.PI) / 3) * radius,
        y: Math.sin((4 * Math.PI) / 3) * radius,
      }),

      new Polygon({
        sides: shapes.square.sides,
        size: 40,
        fill: shapes.square.color,
        x: Math.cos(0) * radius,
        y: Math.sin(0) * radius,
      }),

      new Polygon({
        sides: shapes.pentagon.sides,
        size: 40,
        fill: shapes.pentagon.color,
        x: Math.cos((2 * Math.PI) / 3) * radius,
        y: Math.sin((2 * Math.PI) / 3) * radius,
      }),
    ],
  });
}
