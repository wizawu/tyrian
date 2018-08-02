declare namespace sun {
    namespace java2d {
        namespace x11 {
            abstract class XSurfaceData extends sun.java2d.SurfaceData {
                public static isX11SurfaceDataInitialized(): boolean
                public static setX11SurfaceDataInitialized(): void
                public constructor(arg0: sun.java2d.loops.SurfaceType, arg1: java.awt.image.ColorModel)
                protected initOps(arg0: sun.awt.X11ComponentPeer, arg1: sun.awt.X11GraphicsConfig | sun.awt.X11GraphicsConfig$$Lambda, arg2: int): void
                protected static XCreateGC(arg0: long): long
                protected static XResetClip(arg0: long): void
                protected static XSetClip(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int, arg5: sun.java2d.pipe.Region): void
                protected flushNativeSurface(): void
                protected isDrawableValid(): boolean
                protected setInvalid(): void
                protected static XSetGraphicsExposures(arg0: long, arg1: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}