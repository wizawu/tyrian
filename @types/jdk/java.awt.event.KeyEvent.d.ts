declare namespace java {
  namespace awt {
    namespace event {
      class KeyEvent extends java.awt.event.InputEvent {
        public static readonly KEY_FIRST: int
        public static readonly KEY_LAST: int
        public static readonly KEY_TYPED: int
        public static readonly KEY_PRESSED: int
        public static readonly KEY_RELEASED: int
        public static readonly VK_ENTER: int
        public static readonly VK_BACK_SPACE: int
        public static readonly VK_TAB: int
        public static readonly VK_CANCEL: int
        public static readonly VK_CLEAR: int
        public static readonly VK_SHIFT: int
        public static readonly VK_CONTROL: int
        public static readonly VK_ALT: int
        public static readonly VK_PAUSE: int
        public static readonly VK_CAPS_LOCK: int
        public static readonly VK_ESCAPE: int
        public static readonly VK_SPACE: int
        public static readonly VK_PAGE_UP: int
        public static readonly VK_PAGE_DOWN: int
        public static readonly VK_END: int
        public static readonly VK_HOME: int
        public static readonly VK_LEFT: int
        public static readonly VK_UP: int
        public static readonly VK_RIGHT: int
        public static readonly VK_DOWN: int
        public static readonly VK_COMMA: int
        public static readonly VK_MINUS: int
        public static readonly VK_PERIOD: int
        public static readonly VK_SLASH: int
        public static readonly VK_0: int
        public static readonly VK_1: int
        public static readonly VK_2: int
        public static readonly VK_3: int
        public static readonly VK_4: int
        public static readonly VK_5: int
        public static readonly VK_6: int
        public static readonly VK_7: int
        public static readonly VK_8: int
        public static readonly VK_9: int
        public static readonly VK_SEMICOLON: int
        public static readonly VK_EQUALS: int
        public static readonly VK_A: int
        public static readonly VK_B: int
        public static readonly VK_C: int
        public static readonly VK_D: int
        public static readonly VK_E: int
        public static readonly VK_F: int
        public static readonly VK_G: int
        public static readonly VK_H: int
        public static readonly VK_I: int
        public static readonly VK_J: int
        public static readonly VK_K: int
        public static readonly VK_L: int
        public static readonly VK_M: int
        public static readonly VK_N: int
        public static readonly VK_O: int
        public static readonly VK_P: int
        public static readonly VK_Q: int
        public static readonly VK_R: int
        public static readonly VK_S: int
        public static readonly VK_T: int
        public static readonly VK_U: int
        public static readonly VK_V: int
        public static readonly VK_W: int
        public static readonly VK_X: int
        public static readonly VK_Y: int
        public static readonly VK_Z: int
        public static readonly VK_OPEN_BRACKET: int
        public static readonly VK_BACK_SLASH: int
        public static readonly VK_CLOSE_BRACKET: int
        public static readonly VK_NUMPAD0: int
        public static readonly VK_NUMPAD1: int
        public static readonly VK_NUMPAD2: int
        public static readonly VK_NUMPAD3: int
        public static readonly VK_NUMPAD4: int
        public static readonly VK_NUMPAD5: int
        public static readonly VK_NUMPAD6: int
        public static readonly VK_NUMPAD7: int
        public static readonly VK_NUMPAD8: int
        public static readonly VK_NUMPAD9: int
        public static readonly VK_MULTIPLY: int
        public static readonly VK_ADD: int
        public static readonly VK_SEPARATER: int
        public static readonly VK_SEPARATOR: int
        public static readonly VK_SUBTRACT: int
        public static readonly VK_DECIMAL: int
        public static readonly VK_DIVIDE: int
        public static readonly VK_DELETE: int
        public static readonly VK_NUM_LOCK: int
        public static readonly VK_SCROLL_LOCK: int
        public static readonly VK_F1: int
        public static readonly VK_F2: int
        public static readonly VK_F3: int
        public static readonly VK_F4: int
        public static readonly VK_F5: int
        public static readonly VK_F6: int
        public static readonly VK_F7: int
        public static readonly VK_F8: int
        public static readonly VK_F9: int
        public static readonly VK_F10: int
        public static readonly VK_F11: int
        public static readonly VK_F12: int
        public static readonly VK_F13: int
        public static readonly VK_F14: int
        public static readonly VK_F15: int
        public static readonly VK_F16: int
        public static readonly VK_F17: int
        public static readonly VK_F18: int
        public static readonly VK_F19: int
        public static readonly VK_F20: int
        public static readonly VK_F21: int
        public static readonly VK_F22: int
        public static readonly VK_F23: int
        public static readonly VK_F24: int
        public static readonly VK_PRINTSCREEN: int
        public static readonly VK_INSERT: int
        public static readonly VK_HELP: int
        public static readonly VK_META: int
        public static readonly VK_BACK_QUOTE: int
        public static readonly VK_QUOTE: int
        public static readonly VK_KP_UP: int
        public static readonly VK_KP_DOWN: int
        public static readonly VK_KP_LEFT: int
        public static readonly VK_KP_RIGHT: int
        public static readonly VK_DEAD_GRAVE: int
        public static readonly VK_DEAD_ACUTE: int
        public static readonly VK_DEAD_CIRCUMFLEX: int
        public static readonly VK_DEAD_TILDE: int
        public static readonly VK_DEAD_MACRON: int
        public static readonly VK_DEAD_BREVE: int
        public static readonly VK_DEAD_ABOVEDOT: int
        public static readonly VK_DEAD_DIAERESIS: int
        public static readonly VK_DEAD_ABOVERING: int
        public static readonly VK_DEAD_DOUBLEACUTE: int
        public static readonly VK_DEAD_CARON: int
        public static readonly VK_DEAD_CEDILLA: int
        public static readonly VK_DEAD_OGONEK: int
        public static readonly VK_DEAD_IOTA: int
        public static readonly VK_DEAD_VOICED_SOUND: int
        public static readonly VK_DEAD_SEMIVOICED_SOUND: int
        public static readonly VK_AMPERSAND: int
        public static readonly VK_ASTERISK: int
        public static readonly VK_QUOTEDBL: int
        public static readonly VK_LESS: int
        public static readonly VK_GREATER: int
        public static readonly VK_BRACELEFT: int
        public static readonly VK_BRACERIGHT: int
        public static readonly VK_AT: int
        public static readonly VK_COLON: int
        public static readonly VK_CIRCUMFLEX: int
        public static readonly VK_DOLLAR: int
        public static readonly VK_EURO_SIGN: int
        public static readonly VK_EXCLAMATION_MARK: int
        public static readonly VK_INVERTED_EXCLAMATION_MARK: int
        public static readonly VK_LEFT_PARENTHESIS: int
        public static readonly VK_NUMBER_SIGN: int
        public static readonly VK_PLUS: int
        public static readonly VK_RIGHT_PARENTHESIS: int
        public static readonly VK_UNDERSCORE: int
        public static readonly VK_WINDOWS: int
        public static readonly VK_CONTEXT_MENU: int
        public static readonly VK_FINAL: int
        public static readonly VK_CONVERT: int
        public static readonly VK_NONCONVERT: int
        public static readonly VK_ACCEPT: int
        public static readonly VK_MODECHANGE: int
        public static readonly VK_KANA: int
        public static readonly VK_KANJI: int
        public static readonly VK_ALPHANUMERIC: int
        public static readonly VK_KATAKANA: int
        public static readonly VK_HIRAGANA: int
        public static readonly VK_FULL_WIDTH: int
        public static readonly VK_HALF_WIDTH: int
        public static readonly VK_ROMAN_CHARACTERS: int
        public static readonly VK_ALL_CANDIDATES: int
        public static readonly VK_PREVIOUS_CANDIDATE: int
        public static readonly VK_CODE_INPUT: int
        public static readonly VK_JAPANESE_KATAKANA: int
        public static readonly VK_JAPANESE_HIRAGANA: int
        public static readonly VK_JAPANESE_ROMAN: int
        public static readonly VK_KANA_LOCK: int
        public static readonly VK_INPUT_METHOD_ON_OFF: int
        public static readonly VK_CUT: int
        public static readonly VK_COPY: int
        public static readonly VK_PASTE: int
        public static readonly VK_UNDO: int
        public static readonly VK_AGAIN: int
        public static readonly VK_FIND: int
        public static readonly VK_PROPS: int
        public static readonly VK_STOP: int
        public static readonly VK_COMPOSE: int
        public static readonly VK_ALT_GRAPH: int
        public static readonly VK_BEGIN: int
        public static readonly VK_UNDEFINED: int
        public static readonly CHAR_UNDEFINED: char
        public static readonly KEY_LOCATION_UNKNOWN: int
        public static readonly KEY_LOCATION_STANDARD: int
        public static readonly KEY_LOCATION_LEFT: int
        public static readonly KEY_LOCATION_RIGHT: int
        public static readonly KEY_LOCATION_NUMPAD: int
        keyCode: int
        keyChar: char
        keyLocation: int
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: string | java.lang.Character,
          arg6: number | java.lang.Integer
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: string | java.lang.Character
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        )
        public getKeyCode(): number
        public setKeyCode(arg0: number | java.lang.Integer): void
        public getKeyChar(): string
        public setKeyChar(arg0: string | java.lang.Character): void
        public setModifiers(arg0: number | java.lang.Integer): void
        public getKeyLocation(): number
        public static getKeyText(arg0: number | java.lang.Integer): java.lang.String
        public static getKeyModifiersText(arg0: number | java.lang.Integer): java.lang.String
        public isActionKey(): boolean
        public paramString(): java.lang.String
        public getExtendedKeyCode(): number
        public static getExtendedKeyCodeForChar(arg0: number | java.lang.Integer): number
      }
    }
  }
}
