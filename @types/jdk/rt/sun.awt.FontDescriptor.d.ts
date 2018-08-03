declare namespace sun {
    namespace awt {
        class FontDescriptor implements java.lang.Cloneable {
            public encoder: java.nio.charset.CharsetEncoder
            public unicodeEncoder: java.nio.charset.CharsetEncoder
            public constructor(arg0: java.lang.String | string, arg1: java.nio.charset.CharsetEncoder | java.nio.charset.CharsetEncoder$$Lambda, arg2: int[])
            public getNativeName(): string
            public getFontCharsetEncoder(): java.nio.charset.CharsetEncoder
            public getFontCharsetName(): string
            public getExclusionRanges(): int[]
            public isExcluded(arg0: char): boolean
            public toString(): string
            public useUnicode(): boolean
            public static class: java.lang.Class<any>
        }
    }
}