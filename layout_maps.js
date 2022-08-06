const layout_maps = {
  'colemak': {
      'KeyQ': "q",
      'KeyW': 'w',
      'KeyE': 'f',
      'KeyR': 'p',
      'KeyT': 'g',
      'KeyY': 'j',
      'KeyU': 'l',
      'KeyI': 'u',
      'KeyO': 'y',
      'KeyP': ';',
      'KeyA': 'a',
      'KeyS': 'r',
      'KeyD': 's',
      'KeyF': 't',
      'KeyG': 'd',
      'KeyH': 'h',
      'KeyJ': 'n',
      'KeyK': 'e',
      'KeyL': 'i',
      'Semicolon': 'o',
      'IntlBackslash': '-',
      'KeyZ': 'z',
      'KeyX': 'x',
      'KeyC': 'c',
      'KeyV': 'v',
      'KeyB': 'b',
      'KeyN': 'k',
      'KeyM': 'm',
      'shiftLayer': {
          'KeyP': ':',
          'Semicolon': 'O',
          'IntlBackslash': '_',
      }
  },
  'colemak-dh': {
      'KeyQ': "q",
      'KeyW': 'w',
      'KeyE': 'f',
      'KeyR': 'p',
      'KeyT': 'b',
      'KeyY': 'j',
      'KeyU': 'l',
      'KeyI': 'u',
      'KeyO': 'y',
      'KeyP': ';',
      'KeyA': 'a',
      'KeyS': 'r',
      'KeyD': 's',
      'KeyF': 't',
      'KeyG': 'g',
      'KeyH': 'm',
      'KeyJ': 'n',
      'KeyK': 'e',
      'KeyL': 'i',
      'Semicolon': 'o',
      'IntlBackslash': '-',
      'KeyZ': 'x',
      'KeyX': 'c',
      'KeyC': 'd',
      'KeyV': 'v',
      'KeyB': 'z',
      'KeyN': 'k',
      'KeyM': 'h',
      'shiftLayer': {
          'KeyP': ':',
          'Semicolon': 'O',
          'IntlBackslash': '_',
      }
  },
  'qwerty': {
      'Minus': "-",
      'Equal': "=",
      'KeyQ': "q",
      'KeyW': 'w',
      'KeyE': 'e',
      'KeyR': 'r',
      'KeyT': 't',
      'KeyY': 'y',
      'KeyU': 'u',
      'KeyI': 'i',
      'KeyO': 'o',
      'KeyP': 'p',
      'BracketLeft': '[',
      'BracketRight': ']',
      'Backslash': '\\',
      'KeyA': 'a',
      'KeyS': 's',
      'KeyD': 'd',
      'KeyF': 'f',
      'KeyG': 'g',
      'KeyH': 'h',
      'KeyJ': 'j',
      'KeyK': 'k',
      'KeyL': 'l',
      'Semicolon': ';',
      'Quote': "'",
      'IntlBackslash': '\\',
      'KeyZ': 'z',
      'KeyX': 'x',
      'KeyC': 'c',
      'KeyV': 'v',
      'KeyB': 'b',
      'KeyN': 'n',
      'KeyM': 'm',
      'Comma': ',',
      'Period': '.',
      'Slash': '/',
      'Backquote': '`',
      'Digit1': '1',
      'Digit2': '2',
      'Digit3': '3',
      'Digit4': '4',
      'Digit5': '5',
      'Digit6': '6',
      'Digit7': '7',
      'Digit8': '8',
      'Digit9': '9',
      'Digit0': '0',
      'shiftLayer': {
          'Minus': "_",
          'Equal': "+",
          'BracketLeft': '{',
          'BracketRight': '}',
          'Semicolon': ':',
          'Quote': '"',
          'Backslash': '|',
          'IntlBackslash': '|',
          'Comma': '<',
          'Period': '>',
          'Slash': '?',
          'Backquote': '~',
          'Digit1': '!',
          'Digit2': '@',
          'Digit3': '#',
          'Digit4': '$',
          'Digit5': '%',
          'Digit6': '^',
          'Digit7': '&',
          'Digit8': '*',
          'Digit9': '(',
          'Digit0': ')',
      }
  },
  'azerty': {
      'Minus': ")",
      'Equal': "=",
      'KeyQ': "a",
      'KeyW': 'z',
      'KeyE': 'e',
      'KeyR': 'r',
      'KeyT': 't',
      'KeyY': 'y',
      'KeyU': 'u',
      'KeyI': 'i',
      'KeyO': 'o',
      'KeyP': 'p',
      'BracketLeft': '^',
      'BracketRight': '$',
      'Backslash': '*',
      'KeyA': 'q',
      'KeyS': 's',
      'KeyD': 'd',
      'KeyF': 'f',
      'KeyG': 'g',
      'KeyH': 'h',
      'KeyJ': 'j',
      'KeyK': 'k',
      'KeyL': 'l',
      'Semicolon': 'm',
      'Quote': "ù",
      'IntlBackslash': '<',
      'KeyZ': 'w',
      'KeyX': 'x',
      'KeyC': 'c',
      'KeyV': 'v',
      'KeyB': 'b',
      'KeyN': 'n',
      'KeyM': ',',
      'Comma': ';',
      'Period': ':',
      'Slash': '!',
      'Backquote': '²',
      'Digit1': '&',
      'Digit2': 'é',
      'Digit3': '"',
      'Digit4': "'",
      'Digit5': '(',
      'Digit6': '-',
      'Digit7': 'è',
      'Digit8': '_',
      'Digit9': 'ç',
      'Digit0': 'à',
      'shiftLayer': {
          'KeyM': '?',
          'Minus': "°",
          'Equal': "+",
          'BracketLeft': '¨',
          'BracketRight': '£',
          'Semicolon': 'M',
          'Quote': '%',
          'Backslash': 'µ',
          'IntlBackslash': '>',
          'Comma': '.',
          'Period': '/',
          'Slash': '§',
          'Backquote': '³',
          'Digit1': '1',
          'Digit2': '2',
          'Digit3': '3',
          'Digit4': '4',
          'Digit5': '5',
          'Digit6': '6',
          'Digit7': '7',
          'Digit8': '8',
          'Digit9': '9',
          'Digit0': '0',
      }
  },
};
