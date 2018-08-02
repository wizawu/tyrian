declare namespace sun {
    namespace font {
        abstract class SunFontManager implements sun.java2d.FontSupport , sun.font.FontManagerForSGE {
            public static FONTFORMAT_NONE: int
            public static FONTFORMAT_TRUETYPE: int
            public static FONTFORMAT_TYPE1: int
            public static FONTFORMAT_T2K: int
            public static FONTFORMAT_TTC: int
            public static FONTFORMAT_COMPOSITE: int
            public static FONTFORMAT_NATIVE: int
            protected static CHANNELPOOLSIZE: int
            protected fontFileCache: sun.font.FileFont[]
            protected fullNameToFont: java.util.concurrent.ConcurrentHashMap<java.lang.String, sun.font.Font2D>
            public static lucidaFontName: string
            public static jreLibDirName: string
            public static jreFontDirName: string
            protected registeredFontFiles: java.util.HashSet
            protected fontPath: string
            public static noType1Font: boolean
            protected fileCloser: java.lang.Thread
            public static getInstance(): sun.font.SunFontManager
            public getTrueTypeFilter(): java.io.FilenameFilter
            public getType1Filter(): java.io.FilenameFilter
            public usingPerAppContextComposites(): boolean
            public getEUDCFont(): sun.font.TrueTypeFont
            protected constructor()
            public getNewComposite(arg0: java.lang.String | string, arg1: int, arg2: sun.font.Font2DHandle): sun.font.Font2DHandle
            protected registerCompositeFont(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.String[], arg3: int, arg4: int[], arg5: int[], arg6: boolean): void
            protected static registerCompositeFont(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.String[], arg3: int, arg4: int[], arg5: int[], arg6: boolean, arg7: java.util.concurrent.ConcurrentHashMap<java.lang.String, sun.font.Font2D>): void
            protected addToFontList(arg0: sun.font.PhysicalFont, arg1: int): sun.font.PhysicalFont
            public getRegisteredFonts(): sun.font.Font2D[]
            protected getPhysicalFonts(): sun.font.PhysicalFont[]
            protected initialiseDeferredFonts(): void
            protected registerDeferredJREFonts(arg0: java.lang.String | string): void
            public isDeferredFont(arg0: java.lang.String | string): boolean
            public findJREDeferredFont(arg0: java.lang.String | string, arg1: int): sun.font.PhysicalFont
            public registerDeferredFont(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: int, arg4: boolean, arg5: int): void
            public initialiseDeferredFont(arg0: java.lang.String | string): sun.font.PhysicalFont
            public isRegisteredFontFile(arg0: java.lang.String | string): boolean
            public getRegisteredFontFile(arg0: java.lang.String | string): sun.font.PhysicalFont
            public registerFontFile(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: int, arg3: boolean, arg4: int): sun.font.PhysicalFont
            public registerFonts(arg0: java.lang.String[], arg1: java.lang.String[][], arg2: int, arg3: int, arg4: boolean, arg5: int, arg6: boolean): void
            public getDefaultPhysicalFont(): sun.font.PhysicalFont
            public getDefaultLogicalFont(arg0: int): sun.font.Font2D
            protected populateFontFileNameMap(arg0: java.util.HashMap<java.lang.String, java.lang.String>, arg1: java.util.HashMap<java.lang.String, java.lang.String>, arg2: java.util.HashMap<java.lang.String, java.util.ArrayList<java.lang.String>>, arg3: java.util.Locale): void
            public populateHardcodedFileNameMap(): java.util.HashMap<java.lang.String, sun.font.SunFontManager$FamilyDescription>
            protected getFontNamesFromPlatform(): java.lang.String[]
            public gotFontsFromPlatform(): boolean
            public getFileNameForFontName(arg0: java.lang.String | string): string
            protected registerOtherFontFiles(arg0: java.util.HashSet): void
            public getFamilyNamesFromPlatform(arg0: java.util.TreeMap<java.lang.String, java.lang.String>, arg1: java.util.Locale): boolean
            public findFont2D(arg0: java.lang.String | string, arg1: int, arg2: int): sun.font.Font2D
            public usePlatformFontMetrics(): boolean
            public getNumFonts(): int
            protected getFontPath(arg0: boolean): string
            public createFont2D(arg0: java.io.File, arg1: int, arg2: boolean, arg3: sun.font.CreatedFontTracker): sun.font.Font2D
            public getFullNameByFileName(arg0: java.lang.String | string): string
            public deRegisterBadFont(arg0: sun.font.Font2D): void
            public replaceFont(arg0: sun.font.PhysicalFont, arg1: sun.font.PhysicalFont): void
            public maybeUsingAlternateCompositeFonts(): boolean
            public usingAlternateCompositeFonts(): boolean
            public useAlternateFontforJALocales(): void
            public usingAlternateFontforJALocales(): boolean
            public preferLocaleFonts(): void
            public preferProportionalFonts(): void
            public registerFont(arg0: java.awt.Font): boolean
            public getCreatedFontFamilyNames(): java.util.TreeMap<java.lang.String, java.lang.String>
            public getCreatedFonts(): java.awt.Font[]
            protected getPlatformFontDirs(arg0: boolean): java.lang.String[]
            protected getDefaultPlatformFont(): java.lang.String[]
            protected getNativeNames(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
            protected getFileNameFromPlatformName(arg0: java.lang.String | string): string
            public getFontConfiguration(): sun.awt.FontConfiguration
            public getPlatformFontPath(arg0: boolean): string
            public static isOpenJDK(): boolean
            protected loadFonts(): void
            protected registerFontDirs(arg0: java.lang.String | string): void
            public registerFontsInDir(arg0: java.lang.String | string): void
            protected registerFontsInDir(arg0: java.lang.String | string, arg1: boolean, arg2: int, arg3: boolean, arg4: boolean): void
            protected registerFontDir(arg0: java.lang.String | string): void
            public getDefaultFontFile(): string
            protected useAbsoluteFontFileNames(): boolean
            protected createFontConfiguration(): sun.awt.FontConfiguration
            public createFontConfiguration(arg0: boolean, arg1: boolean): sun.awt.FontConfiguration
            public getDefaultFontFaceName(): string
            public loadFontFiles(): void
            protected addFontToPlatformFontPath(arg0: java.lang.String | string): void
            protected registerFontFile(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: int, arg3: boolean): void
            protected registerPlatformFontsUsedByFontConfiguration(): void
            protected addToMissingFontFileList(arg0: java.lang.String | string): void
            public createCompositeFonts(arg0: java.util.concurrent.ConcurrentHashMap<java.lang.String, sun.font.Font2D>, arg1: boolean, arg2: boolean): void
            public getAllInstalledFonts(): java.awt.Font[]
            public getInstalledFontFamilyNames(arg0: java.util.Locale): java.lang.String[]
            protected addNativeFontFamilyNames(arg0: java.util.TreeMap<java.lang.String, java.lang.String>, arg1: java.util.Locale): void
            public register1dot0Fonts(): void
            protected getJREFontFamilyNames(arg0: java.util.TreeMap<java.lang.String, java.lang.String>, arg1: java.util.Locale): void
            protected getFontConfigFUIR(arg0: java.lang.String | string, arg1: int, arg2: int): javax.swing.plaf.FontUIResource
            public static class: java.lang.Class<any>
        }
    }
}