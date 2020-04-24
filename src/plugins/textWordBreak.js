// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.text\\:break': {
          'overflow-wrap': 'normal',
          'word-break': 'normal',
        },
        '.text\\:break\\:words': { 'overflow-wrap': 'break-word' },
        '.text\\:break\\:all': { 'word-break': 'break-all' },
        '.text\\:truncate': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        },
      },
      variants('textWordBreak')
    )
  }
}