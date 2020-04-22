import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import freehand from '../src/index'
import config from '../stubs/defaultConfig.stub.js'

it('generates the right CSS', () => {
  const inputPath = path.resolve(`${__dirname}/fixtures/freehand-input.css`)
  const input = fs.readFileSync(inputPath, 'utf8')

  return postcss([freehand()])
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/fixtures/freehand-output.css`),
        'utf8'
      )

      expect(result.css).toBe(expected)
    })
})

it('generates the right CSS when "important" is enabled', () => {
  const inputPath = path.resolve(`${__dirname}/fixtures/freehand-input.css`)
  const input = fs.readFileSync(inputPath, 'utf8')

  return postcss([freehand({ ...config, important: true })])
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/fixtures/freehand-output-important.css`),
        'utf8'
      )

      expect(result.css).toBe(expected)
    })
})

it('generates the right CSS when using @import instead of @freehand', () => {
  const inputPath = path.resolve(`${__dirname}/fixtures/freehand-input-import.css`)
  const input = fs.readFileSync(inputPath, 'utf8')

  return postcss([freehand()])
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/fixtures/freehand-output.css`),
        'utf8'
      )

      expect(result.css).toBe(expected)
    })
})

it('does not add any CSS if no Freehand features are used', () => {
  return postcss([freehand()])
    .process('.foo { color: blue; }', { from: undefined })
    .then(result => {
      expect(result.css).toMatchCss('.foo { color: blue; }')
    })
})

it('generates the right CSS with implicit screen utilities', () => {
  const inputPath = path.resolve(
    `${__dirname}/fixtures/freehand-input-with-explicit-screen-utilities.css`
  )
  const input = fs.readFileSync(inputPath, 'utf8')

  return postcss([freehand()])
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/fixtures/freehand-output-with-explicit-screen-utilities.css`),
        'utf8'
      )

      expect(result.css).toBe(expected)
    })
})
