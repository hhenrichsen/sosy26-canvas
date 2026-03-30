import { tags as t } from '@lezer/highlight'
import { HighlightStyle } from '@codemirror/language'

export const shadow = {
  shadowColor: "black",
  shadowOffset: 5,
  shadowBlur: 10,
}

export const shapes = {
  triangle: { sides: 3, color: '#FF6E6E' },
  square: { sides: 4, color: '#40C4FF' },
  pentagon: { sides: 5, color: '#4ED8A0' },
  hexagon: { sides: 6, color: '#7C4DFF' }
}

const mocha = {
  text: '#cdd6f4',
  subtext1: '#bac2de',
  surface1: '#45475a',

  blue: '#89b4fa',
  mauve: '#cba6f7',
  green: '#a6e3a1',
  yellow: '#f9e2af',
  red: '#f38ba8',
  peach: '#fab387',
  teal: '#94e2d5',
}

export const CatppuccinMocha = HighlightStyle.define([
  { tag: t.keyword, color: mocha.mauve },
  { tag: t.string, color: mocha.green },
  { tag: t.number, color: mocha.peach },
  { tag: t.bool, color: mocha.peach },

  { tag: t.propertyName, color: mocha.blue },
  { tag: t.variableName, color: mocha.text },

  { tag: t.comment, color: mocha.surface1, fontStyle: 'italic' },

  { tag: t.typeName, color: mocha.yellow },
  { tag: t.operator, color: mocha.teal },

  { tag: t.punctuation, color: mocha.subtext1 },
])
