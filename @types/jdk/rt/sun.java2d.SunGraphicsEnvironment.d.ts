declare namespace sun {
    namespace java2d {
        abstract class SunGraphicsEnvironment extends java.awt.GraphicsEnvironment implements sun.awt.DisplayChangedListener {
            public static isOpenSolaris: boolean
            protected screens: java.awt.GraphicsDevice[]
            protected displayChanger: sun.awt.SunDisplayChanger
            public constructor()
            public getScreenDevices(): java.awt.GraphicsDevice[]
            protected abstract getNumScreens(): int
            protected abstract makeScreenDevice(arg0: int): java.awt.GraphicsDevice
            public getDefaultScreenDevice(): java.awt.GraphicsDevice
            public createGraphics(arg0: java.awt.image.BufferedImage): java.awt.Graphics2D
            public static getFontManagerForSGE(): sun.font.FontManagerForSGE
            public static useAlternateFontforJALocales(): void
            public getAllFonts(): java.awt.Font[]
            public getAvailableFontFamilyNames(arg0: java.util.Locale): java.lang.String[]
            public getAvailableFontFamilyNames(): java.lang.String[]
            public static getUsableBounds(arg0: java.awt.GraphicsDevice): java.awt.Rectangle
            public displayChanged(): void
            public paletteChanged(): void
            public abstract isDisplayLocal(): boolean
            public addDisplayChangedListener(arg0: sun.awt.DisplayChangedListener): void
            public removeDisplayChangedListener(arg0: sun.awt.DisplayChangedListener): void
            public isFlipStrategyPreferred(arg0: java.awt.peer.ComponentPeer): boolean
            public static class: java.lang.Class<any>
        }
    }
}