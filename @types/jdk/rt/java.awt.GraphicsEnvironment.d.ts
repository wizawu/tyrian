declare namespace java {
    namespace awt {
        abstract class GraphicsEnvironment {
            protected constructor()
            public static getLocalGraphicsEnvironment(): java.awt.GraphicsEnvironment
            public static isHeadless(): boolean
            public isHeadlessInstance(): boolean
            public getScreenDevices(): java.awt.GraphicsDevice[]
            public getDefaultScreenDevice(): java.awt.GraphicsDevice
            public createGraphics(arg0: java.awt.image.BufferedImage): java.awt.Graphics2D
            public getAllFonts(): java.awt.Font[]
            public getAvailableFontFamilyNames(): java.lang.String[]
            public getAvailableFontFamilyNames(arg0: java.util.Locale): java.lang.String[]
            public registerFont(arg0: java.awt.Font): boolean
            public preferLocaleFonts(): void
            public preferProportionalFonts(): void
            public getCenterPoint(): java.awt.Point
            public getMaximumWindowBounds(): java.awt.Rectangle
            public static class: java.lang.Class<any>
        }
    }
}