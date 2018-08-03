declare namespace sun {
    namespace awt {
        abstract class FontConfiguration {
            protected static osVersion: string
            protected static osName: string
            protected static encoding: string
            protected static startupLocale: java.util.Locale
            protected static localeMap: java.util.Hashtable
            protected static isProperties: boolean
            protected fontManager: sun.font.SunFontManager
            protected preferLocaleFonts: boolean
            protected preferPropFonts: boolean
            public static verbose: boolean
            protected static readonly NUM_FONTS: int
            protected static readonly NUM_STYLES: int
            protected static readonly fontNames: java.lang.String[]
            protected static readonly publicFontNames: java.lang.String[]
            protected static readonly styleNames: java.lang.String[]
            protected static installedFallbackFontFiles: java.lang.String[]
            protected reorderMap: java.util.HashMap
            protected static table_awtfontpaths: short[]
            public constructor(arg0: sun.font.SunFontManager)
            public init(): boolean
            public constructor(arg0: sun.font.SunFontManager, arg1: boolean, arg2: boolean)
            protected setOsNameAndVersion(): void
            public foundOsSpecificFile(): boolean
            public fontFilesArePresent(): boolean
            protected getInstalledFallbackFonts(arg0: java.lang.String | string): void
            public static loadBinary(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
            public static saveBinary(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            public static loadProperties(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
            public static hasMonoToPropMap(): boolean
            public static isLogicalFontFamilyName(arg0: java.lang.String | string): boolean
            public static isLogicalFontFamilyNameLC(arg0: java.lang.String | string): boolean
            public static isLogicalFontFaceName(arg0: java.lang.String | string): boolean
            public static isLogicalFontFaceNameLC(arg0: java.lang.String | string): boolean
            protected static getFontIndex(arg0: java.lang.String | string): int
            protected static getStyleIndex(arg0: java.lang.String | string): int
            protected static getStyleIndex(arg0: int): int
            protected static getFontName(arg0: int): string
            protected static getStyleName(arg0: int): string
            public static getLogicalFontFaceName(arg0: java.lang.String | string, arg1: int): string
            public static getStyleString(arg0: int): string
            public abstract getFallbackFamilyName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            protected getCompatibilityFamilyName(arg0: java.lang.String | string): string
            protected mapFileName(arg0: java.lang.String | string): string
            protected abstract initReorderMap(): void
            public static willReorderForStartupLocale(): boolean
            protected split(arg0: java.lang.String | string): java.lang.String[]
            public getFontDescriptors(arg0: java.lang.String | string, arg1: int): sun.awt.FontDescriptor[]
            protected buildFontDescriptors(arg0: int, arg1: int): sun.awt.FontDescriptor[]
            protected makeAWTFontName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            protected abstract getEncoding(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            protected abstract getDefaultFontCharset(arg0: java.lang.String | string): java.nio.charset.Charset
            public getAWTFontPathSet(): java.util.HashSet<java.lang.String>
            public get2DCompositeFontInfo(): sun.font.CompositeFontDescriptor[]
            protected abstract getFaceNameFromComponentFontName(arg0: java.lang.String | string): string
            protected abstract getFileNameFromComponentFontName(arg0: java.lang.String | string): string
            public needToSearchForFile(arg0: java.lang.String | string): boolean
            public getNumberCoreFonts(): int
            public getPlatformFontNames(): java.lang.String[]
            public getFileNameFromPlatformName(arg0: java.lang.String | string): string
            public getExtraFontPath(): string
            public getVersion(): string
            protected static getFontConfiguration(): sun.awt.FontConfiguration
            protected setFontConfiguration(): void
            protected static getComponentFontID(arg0: short, arg1: int, arg2: int): short
            protected static getComponentFontIDMotif(arg0: short, arg1: int, arg2: int): short
            protected static getComponentFontName(arg0: short): string
            protected getCoreScripts(arg0: int): short[]
            protected static getString(arg0: short): string
            public static class: java.lang.Class<any>
        }
    }
}