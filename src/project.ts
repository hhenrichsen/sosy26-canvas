import { makeProject } from '@motion-canvas/core'
import example from './scenes/example?scene'
import authz from './scenes/authz-screen?scene'

const font = new FontFace(
  'Sriracha',
  'url(https://fonts.gstatic.com/s/sriracha/v16/0nkrC9D4IuYBgWcI9NbfTwE.woff2)'
)

font.load().then(() => document.fonts.add(font))

export default makeProject({
  scenes: [example, authz],
})
