declare namespace sun {
    namespace awt {
        namespace image {
            abstract class VolatileSurfaceManager extends sun.awt.image.SurfaceManager implements sun.awt.DisplayChangedListener {
                protected vImg: sun.awt.image.SunVolatileImage
                protected sdAccel: sun.java2d.SurfaceData
                protected sdBackup: sun.java2d.SurfaceData
                protected sdCurrent: sun.java2d.SurfaceData
                protected sdPrevious: sun.java2d.SurfaceData
                protected lostSurface: boolean
                protected context: java.lang.Object
                protected constructor(arg0: sun.awt.image.SunVolatileImage, arg1: java.lang.Object)
                public initialize(): void
                public getPrimarySurfaceData(): sun.java2d.SurfaceData
                protected abstract isAccelerationEnabled(): boolean
                public validate(arg0: java.awt.GraphicsConfiguration): int
                public contentsLost(): boolean
                protected abstract initAcceleratedSurface(): sun.java2d.SurfaceData
                protected getBackupSurface(): sun.java2d.SurfaceData
                public initContents(): void
                public restoreContents(): sun.java2d.SurfaceData
                public acceleratedSurfaceLost(): void
                protected restoreAcceleratedSurface(): void
                public displayChanged(): void
                public paletteChanged(): void
                protected isConfigValid(arg0: java.awt.GraphicsConfiguration): boolean
                public getCapabilities(arg0: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities
                public flush(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}