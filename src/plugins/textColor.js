import _ from 'lodash'
import flattenColorPalette from '../util/flattenColorPalette'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(flattenColorPalette(theme('textColor')), (value, modifier) => {
        return [
          `.${e(`text\:${modifier}`)}`,
          {
            color: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('textColor'))
  }
}
