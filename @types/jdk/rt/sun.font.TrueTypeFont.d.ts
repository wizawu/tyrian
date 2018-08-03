declare namespace sun {
    namespace font {
        class TrueTypeFont extends sun.font.FileFont {
            public static readonly cmapTag: int
            public static readonly glyfTag: int
            public static readonly headTag: int
            public static readonly hheaTag: int
            public static readonly hmtxTag: int
            public static readonly locaTag: int
            public static readonly maxpTag: int
            public static readonly nameTag: int
            public static readonly postTag: int
            public static readonly os_2Tag: int
            public static readonly GDEFTag: int
            public static readonly GPOSTag: int
            public static readonly GSUBTag: int
            public static readonly mortTag: int
            public static readonly fdscTag: int
            public static readonly fvarTag: int
            public static readonly featTag: int
            public static readonly EBLCTag: int
            public static readonly gaspTag: int
            public static readonly ttcfTag: int
            public static readonly v1ttTag: int
            public static readonly trueTag: int
            public static readonly ottoTag: int
            public static readonly MS_PLATFORM_ID: int
            public static readonly ENGLISH_LOCALE_ID: short
            public static readonly FAMILY_NAME_ID: int
            public static readonly FULL_NAME_ID: int
            public static readonly POSTSCRIPT_NAME_ID: int
            public static readonly reserved_bits1: int
            public static readonly reserved_bits2: int
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