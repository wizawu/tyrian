declare namespace sun {
    namespace awt {
        class X11GraphicsDevice extends java.awt.GraphicsDevice implements sun.awt.DisplayChangedListener {
            public constructor(arg0: int)
            public getScreen(): int
            public getProxyKeyFor(arg0: sun.java2d.loops.SurfaceType): java.lang.Object
            public getDisplay(): long
            public getType(): int
            public getIDstring(): string
            public getConfigurations(): java.awt.GraphicsConfiguration[]
            public getNumConfigs(arg0: int): int
            public getConfigVisualId(arg0: int, arg1: int): int
            public getConfigDepth(arg0: int, arg1: int): int
            public getConfigColormap(arg0: int, arg1: int): int
            public static isDBESupported(): boolean
            public getDefaultConfiguration(): java.awt.GraphicsConfiguration
            public isFullScreenSupported(): boolean
            public isDisplayChangeSupported(): boolean
            public setFullScreenWindow(arg0: java.awt.Window): void
            public getDisplayMode(): java.awt.DisplayMode
            public getDisplayModes(): java.awt.DisplayMode[]
            public setDisplayMode(arg0: java.awt.DisplayMode): void
            public displayChanged(): void
            public paletteChanged(): void
            public addDisplayChangedListener(arg0: sun.awt.DisplayChangedListener): void
            public removeDisplayChangedListener(arg0: sun.awt.DisplayChangedListener): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}