import { SignalValue, Vector2 } from "@motion-canvas/core";
import { Node, ComponentChildren } from "@motion-canvas/2d";

export function grid(x: number, y: number): [number, number] {
  return [x * 300, y * 300]
}

export function makeScene(children: SignalValue<ComponentChildren>): Node {

  const width = 1920;
  const height = 1080;

  return new Node({
    position: new Vector2(width / 2, height / 2),
    cachePadding: [width, height, width, height],
    children
  })
}
