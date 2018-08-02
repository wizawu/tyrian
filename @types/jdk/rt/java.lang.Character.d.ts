declare namespace java {
    namespace lang {
class Character implements java.io.Serializable , java.lang.Comparable<java.lang.Character> {
    public static MIN_RADIX: int
    public static MAX_RADIX: int
    public static MIN_VALUE: char
    public static MAX_VALUE: char
    public static TYPE: java.lang.Class<java.lang.Character>
    public static UNASSIGNED: byte
    public static UPPERCASE_LETTER: byte
    public static LOWERCASE_LETTER: byte
    public static TITLECASE_LETTER: byte
    public static MODIFIER_LETTER: byte
    public static OTHER_LETTER: byte
    public static NON_SPACING_MARK: byte
    public static ENCLOSING_MARK: byte
    public static COMBINING_SPACING_MARK: byte
    public static DECIMAL_DIGIT_NUMBER: byte
    public static LETTER_NUMBER: byte
    public static OTHER_NUMBER: byte
    public static SPACE_SEPARATOR: byte
    public static LINE_SEPARATOR: byte
    public static PARAGRAPH_SEPARATOR: byte
    public static CONTROL: byte
    public static FORMAT: byte
    public static PRIVATE_USE: byte
    public static SURROGATE: byte
    public static DASH_PUNCTUATION: byte
    public static START_PUNCTUATION: byte
    public static END_PUNCTUATION: byte
    public static CONNECTOR_PUNCTUATION: byte
    public static OTHER_PUNCTUATION: byte
    public static MATH_SYMBOL: byte
    public static CURRENCY_SYMBOL: byte
    public static MODIFIER_SYMBOL: byte
    public static OTHER_SYMBOL: byte
    public static INITIAL_QUOTE_PUNCTUATION: byte
    public static FINAL_QUOTE_PUNCTUATION: byte
    public static DIRECTIONALITY_UNDEFINED: byte
    public static DIRECTIONALITY_LEFT_TO_RIGHT: byte
    public static DIRECTIONALITY_RIGHT_TO_LEFT: byte
    public static DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: byte
    public static DIRECTIONALITY_EUROPEAN_NUMBER: byte
    public static DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: byte
    public static DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: byte
    public static DIRECTIONALITY_ARABIC_NUMBER: byte
    public static DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: byte
    public static DIRECTIONALITY_NONSPACING_MARK: byte
    public static DIRECTIONALITY_BOUNDARY_NEUTRAL: byte
    public static DIRECTIONALITY_PARAGRAPH_SEPARATOR: byte
    public static DIRECTIONALITY_SEGMENT_SEPARATOR: byte
    public static DIRECTIONALITY_WHITESPACE: byte
    public static DIRECTIONALITY_OTHER_NEUTRALS: byte
    public static DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: byte
    public static DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: byte
    public static DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: byte
    public static DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: byte
    public static DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: byte
    public static MIN_HIGH_SURROGATE: char
    public static MAX_HIGH_SURROGATE: char
    public static MIN_LOW_SURROGATE: char
    public static MAX_LOW_SURROGATE: char
    public static MIN_SURROGATE: char
    public static MAX_SURROGATE: char
    public static MIN_SUPPLEMENTARY_CODE_POINT: int
    public static MIN_CODE_POINT: int
    public static MAX_CODE_POINT: int
    public static SIZE: int
    public static BYTES: int
    public constructor(arg0: char)
    public static valueOf(arg0: char): java.lang.Character
    public charValue(): char
    public hashCode(): int
    public static hashCode(arg0: char): int
    public equals(arg0: java.lang.Object): boolean
    public toString(): string
    public static toString(arg0: char): string
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
    public static codePointBefore(arg0: java.lang.CharSequence, arg1: int): int
    public static codePointBefore(arg0: char[], arg1: int): int
    public static codePointBefore(arg0: char[], arg1: int, arg2: int): int
    public static highSurrogate(arg0: int): char
    public static lowSurrogate(arg0: int): char
    public static toChars(arg0: int, arg1: char[], arg2: int): int
    public static toChars(arg0: int): char[]
    public static codePointCount(arg0: java.lang.CharSequence, arg1: int, arg2: int): int
    public static codePointCount(arg0: char[], arg1: int, arg2: int): int
    public static offsetByCodePoints(arg0: java.lang.CharSequence, arg1: int, arg2: int): int
    public static offsetByCodePoints(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): int
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
    public static reverseBytes(arg0: char): char
    public static getName(arg0: int): string
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

    }
}