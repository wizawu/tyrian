declare namespace sun {
    namespace print {
        class PrinterGraphicsDevice extends java.awt.GraphicsDevice {
            protected constructor(arg0: java.awt.GraphicsConfiguration, arg1: java.lang.String | string)
            public getType(): int
            public getIDstring(): string
            public getConfigurations(): java.awt.GraphicsConfiguration[]
            public getDefaultConfiguration(): java.awt.GraphicsConfiguration
            public setFullScreenWindow(arg0: java.awt.Window | java.awt.Window$$Lambda): void
            public getFullScreenWindow(): java.awt.Window
            public static class: java.lang.Class<any>
        }
    }
}