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
      public constructor(arg0: string | java.lang.Character)
      public static valueOf(arg0: string | java.lang.Character): string
      public charValue(): string
      public hashCode(): number
      public static hashCode(arg0: string | java.lang.Character): number
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
      public static toString(arg0: string | java.lang.Character): java.lang.String
      public static toString(arg0: number | java.lang.Integer): java.lang.String
      public static isValidCodePoint(arg0: number | java.lang.Integer): boolean
      public static isBmpCodePoint(arg0: number | java.lang.Integer): boolean
      public static isSupplementaryCodePoint(arg0: number | java.lang.Integer): boolean
      public static isHighSurrogate(arg0: string | java.lang.Character): boolean
      public static isLowSurrogate(arg0: string | java.lang.Character): boolean
      public static isSurrogate(arg0: string | java.lang.Character): boolean
      public static isSurrogatePair(arg0: string | java.lang.Character, arg1: string | java.lang.Character): boolean
      public static charCount(arg0: number | java.lang.Integer): number
      public static toCodePoint(arg0: string | java.lang.Character, arg1: string | java.lang.Character): number
      public static codePointAt(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer): number
      public static codePointAt(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer): number
      public static codePointAt(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      static codePointAtImpl(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public static codePointBefore(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer): number
      public static codePointBefore(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer): number
      public static codePointBefore(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      static codePointBeforeImpl(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public static highSurrogate(arg0: number | java.lang.Integer): string
      public static lowSurrogate(arg0: number | java.lang.Integer): string
      public static toChars(
        arg0: number | java.lang.Integer,
        arg1: string[] | java.lang.Character[],
        arg2: number | java.lang.Integer
      ): number
      public static toChars(arg0: number | java.lang.Integer): string[]
      static toSurrogates(
        arg0: number | java.lang.Integer,
        arg1: string[] | java.lang.Character[],
        arg2: number | java.lang.Integer
      ): void
      public static codePointCount(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public static codePointCount(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      static codePointCountImpl(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public static offsetByCodePoints(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public static offsetByCodePoints(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): number
      static offsetByCodePointsImpl(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): number
      public static isLowerCase(arg0: string | java.lang.Character): boolean
      public static isLowerCase(arg0: number | java.lang.Integer): boolean
      public static isUpperCase(arg0: string | java.lang.Character): boolean
      public static isUpperCase(arg0: number | java.lang.Integer): boolean
      public static isTitleCase(arg0: string | java.lang.Character): boolean
      public static isTitleCase(arg0: number | java.lang.Integer): boolean
      public static isDigit(arg0: string | java.lang.Character): boolean
      public static isDigit(arg0: number | java.lang.Integer): boolean
      public static isDefined(arg0: string | java.lang.Character): boolean
      public static isDefined(arg0: number | java.lang.Integer): boolean
      public static isLetter(arg0: string | java.lang.Character): boolean
      public static isLetter(arg0: number | java.lang.Integer): boolean
      public static isLetterOrDigit(arg0: string | java.lang.Character): boolean
      public static isLetterOrDigit(arg0: number | java.lang.Integer): boolean
      public static isJavaLetter(arg0: string | java.lang.Character): boolean
      public static isJavaLetterOrDigit(arg0: string | java.lang.Character): boolean
      public static isAlphabetic(arg0: number | java.lang.Integer): boolean
      public static isIdeographic(arg0: number | java.lang.Integer): boolean
      public static isJavaIdentifierStart(arg0: string | java.lang.Character): boolean
      public static isJavaIdentifierStart(arg0: number | java.lang.Integer): boolean
      public static isJavaIdentifierPart(arg0: string | java.lang.Character): boolean
      public static isJavaIdentifierPart(arg0: number | java.lang.Integer): boolean
      public static isUnicodeIdentifierStart(arg0: string | java.lang.Character): boolean
      public static isUnicodeIdentifierStart(arg0: number | java.lang.Integer): boolean
      public static isUnicodeIdentifierPart(arg0: string | java.lang.Character): boolean
      public static isUnicodeIdentifierPart(arg0: number | java.lang.Integer): boolean
      public static isIdentifierIgnorable(arg0: string | java.lang.Character): boolean
      public static isIdentifierIgnorable(arg0: number | java.lang.Integer): boolean
      public static toLowerCase(arg0: string | java.lang.Character): string
      public static toLowerCase(arg0: number | java.lang.Integer): number
      public static toUpperCase(arg0: string | java.lang.Character): string
      public static toUpperCase(arg0: number | java.lang.Integer): number
      public static toTitleCase(arg0: string | java.lang.Character): string
      public static toTitleCase(arg0: number | java.lang.Integer): number
      public static digit(arg0: string | java.lang.Character, arg1: number | java.lang.Integer): number
      public static digit(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static getNumericValue(arg0: string | java.lang.Character): number
      public static getNumericValue(arg0: number | java.lang.Integer): number
      public static isSpace(arg0: string | java.lang.Character): boolean
      public static isSpaceChar(arg0: string | java.lang.Character): boolean
      public static isSpaceChar(arg0: number | java.lang.Integer): boolean
      public static isWhitespace(arg0: string | java.lang.Character): boolean
      public static isWhitespace(arg0: number | java.lang.Integer): boolean
      public static isISOControl(arg0: string | java.lang.Character): boolean
      public static isISOControl(arg0: number | java.lang.Integer): boolean
      public static getType(arg0: string | java.lang.Character): number
      public static getType(arg0: number | java.lang.Integer): number
      public static forDigit(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): string
      public static getDirectionality(arg0: string | java.lang.Character): number
      public static getDirectionality(arg0: number | java.lang.Integer): number
      public static isMirrored(arg0: string | java.lang.Character): boolean
      public static isMirrored(arg0: number | java.lang.Integer): boolean
      public compareTo(arg0: string | java.lang.Character): number
      public static compare(arg0: string | java.lang.Character, arg1: string | java.lang.Character): number
      static toUpperCaseEx(arg0: number | java.lang.Integer): number
      static toUpperCaseCharArray(arg0: number | java.lang.Integer): string[]
      public static reverseBytes(arg0: string | java.lang.Character): string
      public static getName(arg0: number | java.lang.Integer): java.lang.String
      public static codePointOf(arg0: java.lang.String | string): number
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
