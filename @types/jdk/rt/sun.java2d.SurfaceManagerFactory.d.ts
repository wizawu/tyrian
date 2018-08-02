declare namespace sun {
    namespace java2d {
        abstract class SurfaceManagerFactory {
            public constructor()
            public static getInstance(): sun.java2d.SurfaceManagerFactory
            public static setInstance(arg0: sun.java2d.SurfaceManagerFactory): void
            public createVolatileManager(arg0: sun.awt.image.SunVolatileImage | sun.awt.image.SunVolatileImage$$Lambda, arg1: java.lang.Object): sun.awt.image.VolatileSurfaceManager
            public static class: java.lang.Class<any>
        }
    }
}