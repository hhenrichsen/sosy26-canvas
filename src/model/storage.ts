import { Node, Polygon, Rect, Txt, Img } from '@motion-canvas/2d';
import { shadow, shapes } from "./styles"

function makeEntity(shapeKey: keyof typeof shapes, glyphs: string) {
  const shape = shapes[shapeKey]
  return new Rect({
    layout: true,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    fill: 'white',
    stroke: 'black',
    lineWidth: 5,
    children: [
      new Polygon({
        sides: shape.sides,
        size: 60,
        fill: shape.color,
      }),
      new Txt({
        text: glyphs,
        fontSize: 32,
      }),
    ],
  })
}

const modeGlyphs = {
  create: '➕ 🌐🏷️',
  read: '👁️ 🌐🏷️',
  update: '✏️ 🌐🏷️',
  delete: '🗑️ 🌐🏷️',
}

export function makeMode(mode: keyof typeof modeGlyphs) {
  return new Rect({
    layout: true,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    fill: 'white',
    stroke: 'black',
    lineWidth: 5,
    children: [
      new Txt({
        text: modeGlyphs[mode],
        fontSize: 32,
      }),
    ],
  })
}

export function makeResource(shapeKey: keyof typeof shapes) {
  return makeEntity(shapeKey, ' 🌐🏷️')
}

export function makeNeed(shapeKey: keyof typeof shapes) {
  return makeEntity(shapeKey, ' 👁️ 🌐ℹ️')
}

export function makeCombined(shapeKey: keyof typeof shapes) {
  return makeEntity(shapeKey, ' 🏷️ 👁️ ℹ️')
}

export function makeManager() {
  return new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/11614/11614445.png',
    width: 200,
    opacity: 0,
  })
}

export function makeStorage(override = {}) {
  const radius = 30; // distance from center for inner shapes

  const dataRegistrations = {
    triangle: true,
    square: true,
    pentagon: true,
    ...override
  }

  const storage = new Node({
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
    ],
  });
  if (dataRegistrations.triangle) {
    storage.children().push(
      new Polygon({
        sides: shapes.triangle.sides,
        size: 40,
        fill: shapes.triangle.color,
        x: Math.cos((4 * Math.PI) / 3) * radius,
        y: Math.sin((4 * Math.PI) / 3) * radius,
      }),
    )
  }
  if (dataRegistrations.square) {
    storage.children().push(
      new Polygon({
        sides: shapes.square.sides,
        size: 40,
        fill: shapes.square.color,
        x: Math.cos(0) * radius,
        y: Math.sin(0) * radius,
      }),
    )
  }
  if (dataRegistrations.pentagon) {
    storage.children().push(
      new Polygon({
        sides: shapes.pentagon.sides,
        size: 40,
        fill: shapes.pentagon.color,
        x: Math.cos((2 * Math.PI) / 3) * radius,
        y: Math.sin((2 * Math.PI) / 3) * radius,
      }),
    )
  }
  return storage
}
