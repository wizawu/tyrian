declare namespace java {
    namespace awt {
        class ComponentOrientation implements java.io.Serializable {
            public static readonly LEFT_TO_RIGHT: java.awt.ComponentOrientation
            public static readonly RIGHT_TO_LEFT: java.awt.ComponentOrientation
            public static readonly UNKNOWN: java.awt.ComponentOrientation
            public isHorizontal(): boolean
            public isLeftToRight(): boolean
            public static getOrientation(arg0: java.util.Locale): java.awt.ComponentOrientation
            public static getOrientation(arg0: java.util.ResourceBundle): java.awt.ComponentOrientation
            public static class: java.lang.Class<any>
        }
    }
}