declare namespace sun {
    namespace java2d {
        abstract class SurfaceManagerFactory {
            public constructor()
            public static getInstance(): sun.java2d.SurfaceManagerFactory
            public static setInstance(arg0: sun.java2d.SurfaceManagerFactory | sun.java2d.SurfaceManagerFactory$$Lambda): void
            public abstract createVolatileManager(arg0: sun.awt.image.SunVolatileImage, arg1: java.lang.Object): sun.awt.image.VolatileSurfaceManager
            public static class: java.lang.Class<any>
        }
        interface SurfaceManagerFactory$$Lambda {
            (arg0: sun.awt.image.SunVolatileImage, arg1: java.lang.Object): sun.awt.image.VolatileSurfaceManager
        }
    }
}