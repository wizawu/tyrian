declare namespace sun {
    namespace font {
        class FontUtilities {
            public static isSolaris: boolean
            public static isLinux: boolean
            public static isMacOSX: boolean
            public static isSolaris8: boolean
            public static isSolaris9: boolean
            public static isOpenSolaris: boolean
            public static useT2K: boolean
            public static isWindows: boolean
            public static isOpenJDK: boolean
            public static MIN_LAYOUT_CHARCODE: int
            public static MAX_LAYOUT_CHARCODE: int
            public constructor()
            public static getFont2D(arg0: java.awt.Font): sun.font.Font2D
            public static isComplexText(arg0: char[], arg1: int, arg2: int): boolean
            public static isNonSimpleChar(arg0: char): boolean
            public static isComplexCharCode(arg0: int): boolean
            public static getLogger(): sun.util.logging.PlatformLogger
            public static isLogging(): boolean
            public static debugFonts(): boolean
            public static fontSupportsDefaultEncoding(arg0: java.awt.Font): boolean
            public static getCompositeFontUIResource(arg0: java.awt.Font): javax.swing.plaf.FontUIResource
            public static mapFcName(arg0: java.lang.String | string): string
            public static getFontConfigFUIR(arg0: java.lang.String | string, arg1: int, arg2: int): javax.swing.plaf.FontUIResource
            public static textLayoutIsCompatible(arg0: java.awt.Font): boolean
            public static class: java.lang.Class<any>
        }
    }
}