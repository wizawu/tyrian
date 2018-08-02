declare namespace sun {
    namespace java2d {
        namespace opengl {
interface OGLGraphicsConfig extends sun.java2d.pipe.hw.AccelGraphicsConfig , sun.awt.image.SurfaceManager$ProxiedGraphicsConfig {
    getContext(): sun.java2d.opengl.OGLContext
    getNativeConfigInfo(): long
    isCapPresent(arg0: int): boolean
    createManagedSurface(arg0: int, arg1: int, arg2: int): sun.java2d.SurfaceData
    getContext(): sun.java2d.pipe.BufferedContext
}

        }
    }
}