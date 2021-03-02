declare namespace java {
  namespace lang {

    class Character implements java.io.Serializable, java.lang.Comparable<java.lang.Character> {
      public static readonly MIN_RADIX: int
      public static readonly MAX_RADIX: int
      public static readonly MIN_VALUE: char
      public static readonly MAX_VALUE: char
      public static readonly TYPE: java.lang.Class<java.lang.Character>
      public static readonly UNASSIGNED: byte
      public static readonly UPPERCASE_LETTER: byte
      public static readonly LOWERCASE_LETTER: byte
      public static readonly TITLECASE_LETTER: byte
      public static readonly MODIFIER_LETTER: byte
      public static readonly OTHER_LETTER: byte
      public static readonly NON_SPACING_MARK: byte
      public static readonly ENCLOSING_MARK: byte
      public static readonly COMBINING_SPACING_MARK: byte
      public static readonly DECIMAL_DIGIT_NUMBER: byte
      public static readonly LETTER_NUMBER: byte
      public static readonly OTHER_NUMBER: byte
      public static readonly SPACE_SEPARATOR: byte
      public static readonly LINE_SEPARATOR: byte
      public static readonly PARAGRAPH_SEPARATOR: byte
      public static readonly CONTROL: byte
      public static readonly FORMAT: byte
      public static readonly PRIVATE_USE: byte
      public static readonly SURROGATE: byte
      public static readonly DASH_PUNCTUATION: byte
      public static readonly START_PUNCTUATION: byte
      public static readonly END_PUNCTUATION: byte
      public static readonly CONNECTOR_PUNCTUATION: byte
      public static readonly OTHER_PUNCTUATION: byte
      public static readonly MATH_SYMBOL: byte
      public static readonly CURRENCY_SYMBOL: byte
      public static readonly MODIFIER_SYMBOL: byte
      public static readonly OTHER_SYMBOL: byte
      public static readonly INITIAL_QUOTE_PUNCTUATION: byte
      public static readonly FINAL_QUOTE_PUNCTUATION: byte
      static readonly ERROR: int
      public static readonly DIRECTIONALITY_UNDEFINED: byte
      public static readonly DIRECTIONALITY_LEFT_TO_RIGHT: byte
      public static readonly DIRECTIONALITY_RIGHT_TO_LEFT: byte
      public static readonly DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: byte
      public static readonly DIRECTIONALITY_EUROPEAN_NUMBER: byte
      public static readonly DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: byte
      public static readonly DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: byte
      public static readonly DIRECTIONALITY_ARABIC_NUMBER: byte
      public static readonly DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: byte
      public static readonly DIRECTIONALITY_NONSPACING_MARK: byte
      public static readonly DIRECTIONALITY_BOUNDARY_NEUTRAL: byte
      public static readonly DIRECTIONALITY_PARAGRAPH_SEPARATOR: byte
      public static readonly DIRECTIONALITY_SEGMENT_SEPARATOR: byte
      public static readonly DIRECTIONALITY_WHITESPACE: byte
      public static readonly DIRECTIONALITY_OTHER_NEUTRALS: byte
      public static readonly DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: byte
      public static readonly DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: byte
      public static readonly DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: byte
      public static readonly DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: byte
      public static readonly DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: byte
      public static readonly DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE: byte
      public static readonly DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE: byte
      public static readonly DIRECTIONALITY_FIRST_STRONG_ISOLATE: byte
      public static readonly DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE: byte
      public static readonly MIN_HIGH_SURROGATE: char
      public static readonly MAX_HIGH_SURROGATE: char
      public static readonly MIN_LOW_SURROGATE: char
      public static readonly MAX_LOW_SURROGATE: char
      public static readonly MIN_SURROGATE: char
      public static readonly MAX_SURROGATE: char
      public static readonly MIN_SUPPLEMENTARY_CODE_POINT: int
      public static readonly MIN_CODE_POINT: int
      public static readonly MAX_CODE_POINT: int
      public static readonly SIZE: int
      public static readonly BYTES: int
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: char)
      public static valueOf(arg0: char): java.lang.Character
      public charValue(): char
      public hashCode(): int
      public static hashCode(arg0: char): int
      public equals(arg0: java.lang.Object): boolean
      public toString(): java.lang.String
      public static toString(arg0: char): java.lang.String
      public static toString(arg0: int): java.lang.String
      public static isValidCodePoint(arg0: int): boolean
      public static isBmpCodePoint(arg0: int): boolean
      public static isSupplementaryCodePoint(arg0: int): boolean
      public static isHighSurrogate(arg0: char): boolean
      public static isLowSurrogate(arg0: char): boolean
      public static isSurrogate(arg0: char): boolean
      public static isSurrogatePair(arg0: char, arg1: char): boolean
      public static charCount(arg0: int): int
      public static toCodePoint(arg0: char, arg1: char): int
      public static codePointAt(arg0: java.lang.CharSequence, arg1: int): int
      public static codePointAt(arg0: char[], arg1: int): int
      public static codePointAt(arg0: char[], arg1: int, arg2: int): int
      static codePointAtImpl(arg0: char[], arg1: int, arg2: int): int
      public static codePointBefore(arg0: java.lang.CharSequence, arg1: int): int
      public static codePointBefore(arg0: char[], arg1: int): int
      public static codePointBefore(arg0: char[], arg1: int, arg2: int): int
      static codePointBeforeImpl(arg0: char[], arg1: int, arg2: int): int
      public static highSurrogate(arg0: int): char
      public static lowSurrogate(arg0: int): char
      public static toChars(arg0: int, arg1: char[], arg2: int): int
      public static toChars(arg0: int): char[]
      static toSurrogates(arg0: int, arg1: char[], arg2: int): void
      public static codePointCount(arg0: java.lang.CharSequence, arg1: int, arg2: int): int
      public static codePointCount(arg0: char[], arg1: int, arg2: int): int
      static codePointCountImpl(arg0: char[], arg1: int, arg2: int): int
      public static offsetByCodePoints(arg0: java.lang.CharSequence, arg1: int, arg2: int): int
      public static offsetByCodePoints(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): int
      static offsetByCodePointsImpl(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): int
      public static isLowerCase(arg0: char): boolean
      public static isLowerCase(arg0: int): boolean
      public static isUpperCase(arg0: char): boolean
      public static isUpperCase(arg0: int): boolean
      public static isTitleCase(arg0: char): boolean
      public static isTitleCase(arg0: int): boolean
      public static isDigit(arg0: char): boolean
      public static isDigit(arg0: int): boolean
      public static isDefined(arg0: char): boolean
      public static isDefined(arg0: int): boolean
      public static isLetter(arg0: char): boolean
      public static isLetter(arg0: int): boolean
      public static isLetterOrDigit(arg0: char): boolean
      public static isLetterOrDigit(arg0: int): boolean
      public static isJavaLetter(arg0: char): boolean
      public static isJavaLetterOrDigit(arg0: char): boolean
      public static isAlphabetic(arg0: int): boolean
      public static isIdeographic(arg0: int): boolean
      public static isJavaIdentifierStart(arg0: char): boolean
      public static isJavaIdentifierStart(arg0: int): boolean
      public static isJavaIdentifierPart(arg0: char): boolean
      public static isJavaIdentifierPart(arg0: int): boolean
      public static isUnicodeIdentifierStart(arg0: char): boolean
      public static isUnicodeIdentifierStart(arg0: int): boolean
      public static isUnicodeIdentifierPart(arg0: char): boolean
      public static isUnicodeIdentifierPart(arg0: int): boolean
      public static isIdentifierIgnorable(arg0: char): boolean
      public static isIdentifierIgnorable(arg0: int): boolean
      public static toLowerCase(arg0: char): char
      public static toLowerCase(arg0: int): int
      public static toUpperCase(arg0: char): char
      public static toUpperCase(arg0: int): int
      public static toTitleCase(arg0: char): char
      public static toTitleCase(arg0: int): int
      public static digit(arg0: char, arg1: int): int
      public static digit(arg0: int, arg1: int): int
      public static getNumericValue(arg0: char): int
      public static getNumericValue(arg0: int): int
      public static isSpace(arg0: char): boolean
      public static isSpaceChar(arg0: char): boolean
      public static isSpaceChar(arg0: int): boolean
      public static isWhitespace(arg0: char): boolean
      public static isWhitespace(arg0: int): boolean
      public static isISOControl(arg0: char): boolean
      public static isISOControl(arg0: int): boolean
      public static getType(arg0: char): int
      public static getType(arg0: int): int
      public static forDigit(arg0: int, arg1: int): char
      public static getDirectionality(arg0: char): byte
      public static getDirectionality(arg0: int): byte
      public static isMirrored(arg0: char): boolean
      public static isMirrored(arg0: int): boolean
      public compareTo(arg0: java.lang.Character): int
      public static compare(arg0: char, arg1: char): int
      static toUpperCaseEx(arg0: int): int
      static toUpperCaseCharArray(arg0: int): char[]
      public static reverseBytes(arg0: char): char
      public static getName(arg0: int): java.lang.String
      public static codePointOf(arg0: java.lang.String): int
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
