declare namespace java {
    namespace awt {
        abstract class GraphicsDevice {
            public static TYPE_RASTER_SCREEN: int
            public static TYPE_PRINTER: int
            public static TYPE_IMAGE_BUFFER: int
            protected constructor()
            public getType(): int
            public getIDstring(): string
            public getConfigurations(): java.awt.GraphicsConfiguration[]
            public getDefaultConfiguration(): java.awt.GraphicsConfiguration
            public getBestConfiguration(arg0: java.awt.GraphicsConfigTemplate): java.awt.GraphicsConfiguration
            public isFullScreenSupported(): boolean
            public setFullScreenWindow(arg0: java.awt.Window): void
            public getFullScreenWindow(): java.awt.Window
            public isDisplayChangeSupported(): boolean
            public setDisplayMode(arg0: java.awt.DisplayMode): void
            public getDisplayMode(): java.awt.DisplayMode
            public getDisplayModes(): java.awt.DisplayMode[]
            public getAvailableAcceleratedMemory(): int
            public isWindowTranslucencySupported(arg0: java.awt.GraphicsDevice$WindowTranslucency): boolean
            public static class: java.lang.Class<any>
        }
    }
}