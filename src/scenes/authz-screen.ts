import { beginSlide, all } from "@motion-canvas/core";
import { Camera, makeScene2D, Rect } from "@motion-canvas/2d"
import { makeActor, actors } from "../model/actors"
import { grid } from '../model/layout';
import { makeMode, makeStorage, makeResource, makeNeed, makeManager, makeCombined } from "../model/storage";
import { FixedCamera } from "../model/fixedcamera";

export default makeScene2D(function* (view) {
  const max = makeActor(actors.max)
  max.position(grid(0, -1))

  const muas = makeManager()
  muas.position(grid(-1, -1))

  const sm1 = makeStorage({ square: false })
  sm1.position(grid(-1.7, -1))

  const sm2 = makeStorage()
  sm2.position(grid(-2.3, -1))

  const sm3 = makeStorage({ pentagon: false })
  sm3.position(grid(-2.9, -1))

  const sm4 = makeStorage({ triangle: false })
  sm4.position(grid(-3.2, - 1))

  const sme = makeActor(actors.sme)
  sme.position(grid(-1, 0))

  const suas = makeManager()
  suas.position(grid(-1.6, 0))

  const ss1 = makeStorage({ triangle: false })
  ss1.position(grid(-2.3, 0))

  const ss2 = makeStorage({ pentagon: false })
  ss2.position(grid(-2.9, 0))

  const acme = makeActor(actors.acme)
  acme.position(grid(-1, 1))

  const auas = makeManager()
  auas.position(grid(-1.6, 1))

  const sa1 = makeStorage({ square: false })
  sa1.position(grid(-2.3, 1))

  const sa2 = makeStorage()
  sa2.position(grid(-2.9, 1))

  const app = makeActor(actors.app)
  app.position(grid(1, 1))

  const odi = makeActor(actors.solid)
  odi.position(grid(1, -1))

  const repo = new Rect({
    layout: true,
    direction: 'column',
    width: 200,
    opacity: 0,
    children: [
      makeResource('triangle'),
      makeResource('square'),
      makeResource('pentagon'),
    ]
  });
  repo.position(grid(2, -1))

  const modes = new Rect({
    layout: true,
    direction: 'column',
    width: 200,
    opacity: 0,
    children: [
      makeMode('create'),
      makeMode('read'),
      makeMode('update'),
      makeMode('delete'),
    ]
  });
  modes.position(grid(2.75, -1))

  const needs = new Rect({
    layout: true,
    direction: 'column',
    width: 250,
    opacity: 0,
    children: [
      makeNeed('square'),
    ]
  });
  needs.position(grid(2, 1))

  const screen = new Rect({
    layout: true,
    direction: 'column',
    width: 300,
    opacity: 0,
    children: [
      makeCombined('square'),
    ]
  });
  screen.position(grid(0, 0))

  const camera = new FixedCamera({ children: [max, odi, app, repo, needs, screen, modes, muas, sm1, sm2, sm3, sm4, sme, suas, ss1, ss2, acme, auas, sa1, sa2]});
  view.add(camera)

  yield* beginSlide('Max')
  yield* all(
    max.opacity(1, 1),
  )
  yield* beginSlide('App')
  yield* all(
    app.opacity(1, 1),
    needs.opacity(1, 1),
  )
  yield* beginSlide('Shape repo')
  yield* all(
    odi.opacity(1, 1),
    repo.opacity(1, 1),
  )
  yield* beginSlide('AuthZ Screen')
  yield* all(
    screen.opacity(1, 1),
  )
  yield* beginSlide('Modes show')
  yield* all(
    modes.opacity(1, 1),
  )
  yield* beginSlide('Modes hide')
  yield* all(
    modes.opacity(0, 1),
  )
  yield* beginSlide('Max stack')
  yield* all(
    sm1.opacity(1, 1),
    sm2.opacity(1, 1),
    sm3.opacity(1, 1),
  )
  yield* beginSlide('SME stack')
  yield* all(
    sme.opacity(1, 1),
    ss1.opacity(1, 1),
    ss2.opacity(1, 1),
  )
  yield* beginSlide('Managers')
  yield* all(
    muas.opacity(1, 1),
    suas.opacity(1, 1),
  )
  yield* beginSlide('Adjust Camera')
  yield* all(
    sm4.opacity(1, 1),
    camera.centerOn(grid(-1, 0), 1),
  )
  yield* beginSlide('ACME stack')
  yield* all(
    acme.opacity(1, 1),
    auas.opacity(1, 1),
    sa1.opacity(1, 1),
    sa2.opacity(1, 1),
  )
  yield* beginSlide('End')
})
