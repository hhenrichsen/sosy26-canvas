import { SignalValue } from "@motion-canvas/core";
import { Node, ComponentChildren, Layout, useScene2D } from "@motion-canvas/2d";

export function grid(x: number, y: number): [number, number] {
  return [x * 300, y * 300]
}
