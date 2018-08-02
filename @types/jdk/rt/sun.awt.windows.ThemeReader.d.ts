declare namespace sun {
    namespace awt {
        namespace windows {
            class ThemeReader {
                public constructor()
                public static isThemed(): boolean
                public static isXPStyleEnabled(): boolean
                public static paintBackground(arg0: int[], arg1: java.lang.String | string, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int): void
                public static getThemeMargins(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.awt.Insets
                public static isThemePartDefined(arg0: java.lang.String | string, arg1: int, arg2: int): boolean
                public static getColor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.awt.Color
                public static getInt(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): int
                public static getEnum(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): int
                public static getBoolean(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): boolean
                public static getSysBoolean(arg0: java.lang.String | string, arg1: int): boolean
                public static getPoint(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.awt.Point
                public static getPosition(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.awt.Dimension
                public static getPartSize(arg0: java.lang.String | string, arg1: int, arg2: int): java.awt.Dimension
                public static getThemeTransitionDuration(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int, arg4: int): long
                public static isGetThemeTransitionDurationDefined(): boolean
                public static getThemeBackgroundContentMargins(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int, arg4: int): java.awt.Insets
                public static class: java.lang.Class<any>
            }
        }
    }
}