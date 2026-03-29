import { Node, Camera, makeScene2D } from '@motion-canvas/2d';
import { beginSlide, Vector2, all } from '@motion-canvas/core';
import { actors, makeActor } from '../model/actors';
import { makeStorage } from '../model/storage';
import { makeGrant } from '../model/grants';

function grid(x: number, y: number): [number, number] {
  return [x * 300, y * 300]
}

export default makeScene2D(function* (view) {

  const max = makeActor(actors.max)
  max.position(grid(0, 0))

  const sme = makeActor(actors.sme)
  sme.position(grid(2, -1))

  const smeStorage = makeStorage()
  smeStorage.position(grid(1, -1))

  const grantS2M = makeGrant({ shape: 'square' })
  grantS2M.position(smeStorage.position)

  const acme = makeActor(actors.acme)
  acme.position(grid(-2, -1))

  const acmeStorage = makeStorage()
  acmeStorage.position(grid(-1, -1))

  const grantA2M = makeGrant({ shape: 'square' })
  grantA2M.position(acmeStorage.position)

  const app = makeActor(actors.app)
  app.position(grid(0, 1))

  const grantS2M2A = makeGrant({ shape: 'square' })
  grantS2M2A.position(grantS2M.position)

  const grantA2M2A = makeGrant({ shape: 'square' })
  grantA2M2A.position(grantA2M.position)

  // const arrow = new Line({
  //   lineDash: [20, 20],
  //   startArrow: true,
  //   endArrow: false,
  //   stroke: "black",
  //   lineWidth: 5,
  //   arrowSize: 15,
  //   opacity: 0,
  //   ...shadow,
  // })
  // arrow.points([[50, 250], [50, 250]])

  const width = 1920;
  const height = 1080;

  const scene = new Node({
    position: new Vector2(width / 2, height / 2),
    cachePadding: [width, height, width, height],
    children: [sme, acme, max, app, smeStorage, acmeStorage, grantS2M, grantA2M, grantS2M2A, grantA2M2A],
  });

  const camera = new Camera({
    scene,
  })
  view.add(camera)

  yield* beginSlide('Max')
  yield* all(
    max.opacity(1, 1),
  )
  yield* beginSlide('SME')
  yield* all(
    sme.opacity(1, 1),
    smeStorage.opacity(1, 1),
  )
  yield* beginSlide('Grant S2M')
  yield* all(
    grantS2M.opacity(1, 1),
    grantS2M.position(grid(1, 0), 1)
  )
  yield* beginSlide('ACME')
  yield* all(
    acme.opacity(1, 1),
    acmeStorage.opacity(1, 1),
  )
  yield* beginSlide('Grant A2M')
  yield* all(
    grantA2M.opacity(1, 1),
    grantA2M.position(grid(-1, 0), 1)
  )
  yield* beginSlide('App')
  yield* all(
    app.opacity(1, 1),
  )
  yield* beginSlide('Grant M2A')
  yield* all(
    grantS2M2A.opacity(1, 1),
    grantS2M2A.position(grid(1, 1), 1),
    grantA2M2A.opacity(1, 1),
    grantA2M2A.position(grid(-1, 1), 1)
    // arrow.opacity(1, 1),
    // arrow.points([[250, 50], [50, 250]], 1),
  )
  yield* beginSlide('End')
});
