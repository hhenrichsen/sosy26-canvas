import { Node, Polygon, Img, Line, Camera, makeScene2D } from '@motion-canvas/2d';
import { beginSlide, Vector2, createRef, all, loop, waitFor } from '@motion-canvas/core';

// canvas color rgb(37,99,103)
export default makeScene2D(function* (view) {
  // Create your animations here

  const shadow = {
    shadowColor: "black",
    shadowOffset: 5,
    shadowBlur: 10,
  }

  const bank = new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png',
    width: 200,
    opacity: 0,
    ...shadow,
  })
  bank.position([300, -300])

  const bankStorage = new Polygon({
    sides: 6,
    size: 150,
    fill: "#7C4DFF",
    stroke: "white",
    lineWidth: 5,
    rotation: 90,
    opacity: 0,
    ...shadow,
  })
  bankStorage.position([600, -300])

  const grantB2L = new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/2470/2470720.png',
    width: 120,
    opacity: 0,
    ...shadow,
  })
  grantB2L.position([300, 0])

  const lisa = new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/2423/2423822.png',
    width: 200,
    opacity: 0,
    ...shadow,
  })
  lisa.position([0, 0])

  const grantL2A = new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/2470/2470720.png',
    width: 120,
    opacity: 0,
    ...shadow,
  })
  grantL2A.position([0, 300])

  const app = new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/7409/7409516.png',
    width: 200,
    opacity: 0,
    ...shadow,
  })
  app.position([-300, 300])

  const arrow = new Line({
    lineDash: [20, 20],
    startArrow: true,
    endArrow: false,
    stroke: "black",
    lineWidth: 5,
    arrowSize: 15,
    opacity: 0,
    ...shadow,
  })
  arrow.points([[50, 250], [50, 250]])

  const width = 1920;
  const height = 1080;

  const scene = new Node({
    position: new Vector2(width / 2, height / 2),
    cachePadding: [width, height, width, height],
    children: [bank, lisa, app, bankStorage, grantB2L, grantL2A, arrow],
  });

  const camera = new Camera({
    scene,
  })
  view.add(camera)

  yield* beginSlide('Actors')
  yield* all(
    bank.opacity(1, 1),
    lisa.opacity(1, 1),
  )
  yield* beginSlide('Storage')
  yield* all(
    bankStorage.opacity(1, 1),
  )
  yield* beginSlide('Grant B2L')
  yield* all(
    grantB2L.opacity(1, 1),
  )
  yield* camera.centerOn([800, 0], 1)
  yield* beginSlide('App')
  yield* all(
    app.opacity(1, 1),
  )
  yield* beginSlide('Grant L2A')
  yield* all(
    grantL2A.opacity(1, 1),
    arrow.opacity(1, 1),
    arrow.points([[250, 50], [50, 250]], 1),
  )
  yield* beginSlide('End')
});
