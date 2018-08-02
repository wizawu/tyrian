declare namespace sun {
    namespace font {
        class TrueTypeFont extends sun.font.FileFont {
            public static cmapTag: int
            public static glyfTag: int
            public static headTag: int
            public static hheaTag: int
            public static hmtxTag: int
            public static locaTag: int
            public static maxpTag: int
            public static nameTag: int
            public static postTag: int
            public static os_2Tag: int
            public static GDEFTag: int
            public static GPOSTag: int
            public static GSUBTag: int
            public static mortTag: int
            public static fdscTag: int
            public static fvarTag: int
            public static featTag: int
            public static EBLCTag: int
            public static gaspTag: int
            public static ttcfTag: int
            public static v1ttTag: int
            public static trueTag: int
            public static ottoTag: int
            public static MS_PLATFORM_ID: int
            public static ENGLISH_LOCALE_ID: short
            public static FAMILY_NAME_ID: int
            public static FULL_NAME_ID: int
            public static POSTSCRIPT_NAME_ID: int
            public static reserved_bits1: int
            public static reserved_bits2: int
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: boolean)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: boolean, arg4: boolean)
            protected checkUseNatives(): boolean
            protected close(): void
            protected init(arg0: int): void
            protected getLayoutTableCache(): long
            protected getTableBytes(arg0: int): byte[]
            public getFullName(): string
            protected setStyle(): void
            public getWidth(): int
            public getWeight(): int
            public getStyleMetrics(arg0: float, arg1: float[], arg2: int): void
            protected initNames(): void
            protected lookupName(arg0: short, arg1: int): string
            public getFontCount(): int
            protected getScaler(): sun.font.FontScaler
            public getPostscriptName(): string
            public getFontName(arg0: java.util.Locale): string
            public getFamilyName(arg0: java.util.Locale): string
            public getMapper(): sun.font.CharToGlyphMapper
            protected initAllNames(arg0: int, arg1: java.util.HashSet): void
            public useAAForPtSize(arg0: int): boolean
            public hasSupplementaryChars(): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}