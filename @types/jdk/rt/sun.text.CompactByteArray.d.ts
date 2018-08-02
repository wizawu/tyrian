declare namespace sun {
    namespace text {
        class CompactByteArray implements java.lang.Cloneable {
            public static UNICODECOUNT: int
            public constructor(arg0: byte)
            public constructor(arg0: short[], arg1: byte[])
            public elementAt(arg0: char): byte
            public setElementAt(arg0: char, arg1: byte): void
            public setElementAt(arg0: char, arg1: char, arg2: byte): void
            public compact(): void
            public getIndexArray(): short[]
            public getStringArray(): byte[]
            public clone(): java.lang.Object
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}