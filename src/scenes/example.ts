import { Node, Camera, makeScene2D, Code, LezerHighlighter, Rect, lines } from '@motion-canvas/2d';
import { beginSlide, all, DEFAULT } from '@motion-canvas/core';
import { parser } from '@lezer/yaml';
import { actors, makeActor } from '../model/actors';
import { makeStorage } from '../model/storage';
import { makeGrant } from '../model/grants';
import { grid } from '../model/layout';
import { CatppuccinMocha } from '../model/styles';
import { FixedCamera } from '../model/fixedcamera';

Code.defaultHighlighter = new LezerHighlighter(parser, CatppuccinMocha);

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

  const code = new Code({
    fontSize: 32,
    code: `\
"@context": https://...
grantee: Max
grantedBy: SME
dataOwner: SME
hasStorage: https://eu.sme.ex
registeredShapeTree: TaxFilings 🔷
scopeOfGrant: AllFromRegistry
accessMode: [ Read, Create ]`,
  })

  const snippetS2M = new Rect({
    layout: true,
    padding: 32 * 1.5,
    radius: 12,
    fill: '#1e1e2e',
    stroke: '#585b70',
    lineWidth: 4,
    children: code
  });
  snippetS2M.position(grid(6, 0.5))

  const code2 = new Code({
    fontSize: 32,
    code: `\
"@context": https://...
grantee: App
grantedBy: Max
dataOwner: SME
hasStorage: https://eu.sme.ex
registeredShapeTree: TaxFilings 🔷
scopeOfGrant: SelectedFromRegistry
hasDataInstance:
  - https://eu.sme.ex/june25
  - https://eu.sme.ex/july25
accessMode: [ Read ]`,
  })

  const snippetS2M2A = new Rect({
    layout: true,
    padding: 32 * 1.5,
    radius: 12,
    fill: '#1e1e2e',
    stroke: '#585b70',
    lineWidth: 4,
    children: code2
  });
  snippetS2M2A.position(grid(6, 0.75))


  const elements = [sme, acme, max, app, smeStorage, acmeStorage, grantS2M, grantA2M, grantS2M2A, grantA2M2A]
  const snippets = [snippetS2M, snippetS2M2A]

  const camera = new FixedCamera({ children : [...elements, ...snippets]});
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
  yield* beginSlide('Snippet')
  yield* all(
    camera.centerOn(grid(1, 0), 1),
    ...elements.filter(el => el !== grantS2M).map(el => el.opacity(0.5, 1)),
    snippetS2M.position(grid(2.75, 0.5), 1),
  )
  yield* beginSlide('Agents')
  yield* all(
    max.opacity(1, 1),
    sme.opacity(1, 1),
    code.selection(lines(1, 3), 1),
  )
  yield* beginSlide('scope')
  yield* all(
    max.opacity(0.5, 1),
    sme.opacity(0.5, 1),
    smeStorage.opacity(1, 1),
    code.selection(lines(4, 7), 1),
  )
  yield* beginSlide('Reset')
  yield* all(
    smeStorage.opacity(0.5, 1),
    code.selection(DEFAULT, 1)
  )
  yield* beginSlide('Snippet 2')
  yield
  yield* all(
    snippetS2M.position(grid(2.75, -1), 0.5),
  )
  yield* all(
    grantS2M2A.opacity(1, 1),
    snippetS2M2A.position(grid(2.75, 0.75), 1),
  )
  yield* beginSlide('Compare Agents')
  yield* all(
    max.opacity(1, 1),
    app.opacity(1, 1),
    code.selection(lines(1, 3), 1),
    code2.selection(lines(1, 3), 1),
  )
  yield* beginSlide('Compare Scope')
  yield* all(
    max.opacity(0.5, 1),
    app.opacity(0.5, 1),
    smeStorage.opacity(1, 1),
    code.selection(lines(6, 7), 1),
    code2.selection(lines(6, 10), 1),
  )
  yield* beginSlide('End')
});
