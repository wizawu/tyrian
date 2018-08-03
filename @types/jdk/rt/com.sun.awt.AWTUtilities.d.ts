declare namespace com {
    namespace sun {
        namespace awt {
            class AWTUtilities {
                public static isTranslucencySupported(arg0: com.sun.awt.AWTUtilities$Translucency): boolean
                public static setWindowOpacity(arg0: java.awt.Window, arg1: float): void
                public static getWindowOpacity(arg0: java.awt.Window): float
                public static isWindowShapingSupported(): boolean
                public static getWindowShape(arg0: java.awt.Window): java.awt.Shape
                public static setWindowShape(arg0: java.awt.Window, arg1: java.awt.Shape): void
                public static setWindowOpaque(arg0: java.awt.Window, arg1: boolean): void
                public static isWindowOpaque(arg0: java.awt.Window): boolean
                public static isTranslucencyCapable(arg0: java.awt.GraphicsConfiguration): boolean
                public static setComponentMixingCutoutShape(arg0: java.awt.Component, arg1: java.awt.Shape): void
                public static class: java.lang.Class<any>
            }
        }
    }
}