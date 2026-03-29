import { Node, Layout, Img, Txt, Rect } from '@motion-canvas/2d';
import { shadow } from "./styles"

interface ActorProps {
  name: string
  icon: string
}

export function makeActor(props: ActorProps) {
  return new Layout({
    layout: true,
    direction: 'column',
    alignItems: 'center',
    opacity: 0,
    ...shadow,

    children: [
      new Img({
        src: props.icon,
        width: 200,
      }),
      new Rect({
        marginTop: -20,
        width: 160,
        padding: 10,
        radius: 8,
        fill: 'white',
        stroke: 'black',
        lineWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        children: new Txt({
          text: props.name,
          fontFamily: 'Sriracha',
          fontSize: 32,
          fontWeight: 400,
          fill: 'black',
        }),
      })
    ]
  })
}

export const actors = {
  bank: {
    name: 'BigBank',
    icon: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png',
  },
  sme: {
    name: 'SME',
    icon: 'https://cdn-icons-png.flaticon.com/512/1810/1810755.png',
  },
  tao: {
    name: 'TAO',
    icon: 'https://cdn-icons-png.flaticon.com/512/1810/1810755.png',
  },
  acme: {
    name: 'ACME',
    icon: 'https://cdn-icons-png.flaticon.com/512/1839/1839296.png',
  },
  lisa: {
    name: 'Lisa',
    icon: 'https://cdn-icons-png.flaticon.com/512/2423/2423822.png',
  },
  tom: {
    name: 'Tom',
    icon: 'https://cdn-icons-png.flaticon.com/512/2423/2423845.png',
  },
  max: {
    name: 'Max',
    icon: 'https://cdn-icons-png.flaticon.com/512/2423/2423903.png',
  },
  app: {
    name: 'App',
    icon: 'https://cdn-icons-png.flaticon.com/512/7409/7409516.png',
  },
}

