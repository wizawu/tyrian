declare namespace sun {
    namespace font {
        abstract class FontAccess {
            public constructor()
            public static setFontAccess(arg0: sun.font.FontAccess): void
            public static getFontAccess(): sun.font.FontAccess
            public abstract getFont2D(arg0: java.awt.Font): sun.font.Font2D
            public abstract setFont2D(arg0: java.awt.Font, arg1: sun.font.Font2DHandle): void
            public abstract setCreatedFont(arg0: java.awt.Font): void
            public abstract isCreatedFont(arg0: java.awt.Font): boolean
            public static class: java.lang.Class<any>
        }
    }
}