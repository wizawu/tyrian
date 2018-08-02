declare namespace sun {
    namespace awt {
        namespace image {
            class SunVolatileImage extends java.awt.image.VolatileImage implements sun.java2d.DestSurfaceProvider {
                protected volSurfaceManager: sun.awt.image.VolatileSurfaceManager
                protected comp: java.awt.Component
                protected constructor(arg0: java.awt.Component, arg1: java.awt.GraphicsConfiguration, arg2: int, arg3: int, arg4: java.lang.Object, arg5: int, arg6: java.awt.ImageCapabilities, arg7: int)
                public constructor(arg0: java.awt.Component, arg1: int, arg2: int)
                public constructor(arg0: java.awt.Component, arg1: int, arg2: int, arg3: java.lang.Object)
                public constructor(arg0: java.awt.GraphicsConfiguration, arg1: int, arg2: int, arg3: int, arg4: java.awt.ImageCapabilities)
                public getWidth(): int
                public getHeight(): int
                public getGraphicsConfig(): java.awt.GraphicsConfiguration
                public updateGraphicsConfig(): void
                public getComponent(): java.awt.Component
                public getForcedAccelSurfaceType(): int
                protected createSurfaceManager(arg0: java.lang.Object, arg1: java.awt.ImageCapabilities): sun.awt.image.VolatileSurfaceManager
                public createGraphics(): java.awt.Graphics2D
                public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver): java.lang.Object
                public getWidth(arg0: java.awt.image.ImageObserver): int
                public getHeight(arg0: java.awt.image.ImageObserver): int
                public getBackupImage(): java.awt.image.BufferedImage
                public getSnapshot(): java.awt.image.BufferedImage
                public validate(arg0: java.awt.GraphicsConfiguration): int
                public contentsLost(): boolean
                public getCapabilities(): java.awt.ImageCapabilities
                public getDestSurface(): sun.java2d.Surface
                public static class: java.lang.Class<any>
            }
            class SunVolatileImage$$Lambda extends java.awt.image.VolatileImage implements sun.java2d.DestSurfaceProvider {
                protected volSurfaceManager: sun.awt.image.VolatileSurfaceManager
            }
        }
    }
}