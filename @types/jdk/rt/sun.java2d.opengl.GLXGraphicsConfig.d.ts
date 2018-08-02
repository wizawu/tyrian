declare namespace sun {
    namespace java2d {
        namespace opengl {
class GLXGraphicsConfig extends sun.awt.X11GraphicsConfig implements sun.java2d.opengl.OGLGraphicsConfig {
    public getProxyKey(): java.lang.Object
    public createManagedSurface(arg0: int, arg1: int, arg2: int): sun.java2d.SurfaceData
    public static getConfig(arg0: sun.awt.X11GraphicsDevice, arg1: int): sun.java2d.opengl.GLXGraphicsConfig
    public isCapPresent(arg0: int): boolean
    public getNativeConfigInfo(): long
    public getContext(): sun.java2d.opengl.OGLContext
    public createCompatibleImage(arg0: int, arg1: int): java.awt.image.BufferedImage
    public getColorModel(arg0: int): java.awt.image.ColorModel
    public toString(): string
    public createSurfaceData(arg0: sun.awt.X11ComponentPeer): sun.java2d.SurfaceData
    public createAcceleratedImage(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Image
    public createBackBuffer(arg0: sun.awt.X11ComponentPeer, arg1: int, arg2: java.awt.BufferCapabilities): long
    public destroyBackBuffer(arg0: long): void
    public createBackBufferImage(arg0: java.awt.Component, arg1: long): java.awt.image.VolatileImage
    public flip(arg0: sun.awt.X11ComponentPeer, arg1: java.awt.Component, arg2: java.awt.image.VolatileImage, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.awt.BufferCapabilities$FlipContents): void
    public getBufferCapabilities(): java.awt.BufferCapabilities
    public getImageCapabilities(): java.awt.ImageCapabilities
    public createCompatibleVolatileImage(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.VolatileImage
    public getContextCapabilities(): sun.java2d.pipe.hw.ContextCapabilities
    public addDeviceEventListener(arg0: sun.java2d.pipe.hw.AccelDeviceEventListener): void
    public removeDeviceEventListener(arg0: sun.java2d.pipe.hw.AccelDeviceEventListener): void
    public getContext(): sun.java2d.pipe.BufferedContext
    public static class: java.lang.Class<any>
}

        }
    }
}