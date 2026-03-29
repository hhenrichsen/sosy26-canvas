import { Node, Polygon, Rect } from '@motion-canvas/2d';
import { shadow, shapes } from "./styles"

type GrantShape = 'triangle' | 'square' | 'pentagon';

interface GrantProps {
  shape: GrantShape;
}

export function makeGrant({ shape }: GrantProps) {

  const selected = shapes[shape];

  return new Node({
    opacity: 0,
    children: [
      // Base hexagon
      new Rect({
        width: 120,
        height: 80,
        fill: 'lightgray',
        stroke: 'black',
        lineWidth: 5,
        ...shadow,
      }),

      new Polygon({
        sides: selected.sides,
        size: 40,
        fill: selected.color,
      }),
    ],
  });
}
