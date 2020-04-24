// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.flex\\:wrap': {
          'flex-wrap': 'wrap',
        },
        '.flex\\:wrap\\:reverse': {
          'flex-wrap': 'wrap-reverse',
        },
        '.flex\\:wrap\\:off': {
          'flex-wrap': 'nowrap',
        },
      },
      variants('flexWrap')
    )
  }
}
