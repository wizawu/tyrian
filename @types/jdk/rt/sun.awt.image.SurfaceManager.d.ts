declare namespace sun {
    namespace awt {
        namespace image {
abstract class SurfaceManager {
    public constructor()
    public static setImageAccessor(arg0: sun.awt.image.SurfaceManager$ImageAccessor): void
    public static getManager(arg0: java.awt.Image): sun.awt.image.SurfaceManager
    public static setManager(arg0: java.awt.Image, arg1: sun.awt.image.SurfaceManager): void
    public getCacheData(arg0: java.lang.Object): java.lang.Object
    public setCacheData(arg0: java.lang.Object, arg1: java.lang.Object): void
    public getPrimarySurfaceData(): sun.java2d.SurfaceData
    public restoreContents(): sun.java2d.SurfaceData
    public acceleratedSurfaceLost(): void
    public getCapabilities(arg0: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities
    public flush(): void
    public setAccelerationPriority(arg0: float): void
    public static getImageScale(arg0: java.awt.Image): int
    public static class: java.lang.Class<any>
}

        }
    }
}