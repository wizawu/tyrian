declare namespace sun {
    namespace awt {
class X11GraphicsConfig extends java.awt.GraphicsConfiguration implements sun.awt.image.SurfaceManager$ProxiedGraphicsConfig {
    protected screen: sun.awt.X11GraphicsDevice
    protected visual: int
    protected bitsPerPixel: int
    protected surfaceType: sun.java2d.loops.SurfaceType
    public solidloops: sun.java2d.loops.RenderLoops
    public static getConfig(arg0: sun.awt.X11GraphicsDevice, arg1: int, arg2: int, arg3: int, arg4: boolean): sun.awt.X11GraphicsConfig
    public static getConfig(arg0: sun.awt.X11GraphicsDevice, arg1: int, arg2: int, arg3: int, arg4: int): sun.awt.X11GraphicsConfig
    protected constructor(arg0: sun.awt.X11GraphicsDevice, arg1: int, arg2: int, arg3: int, arg4: boolean)
    public getDevice(): java.awt.GraphicsDevice
    public getVisual(): int
    public getDepth(): int
    public getColormap(): int
    public getBitsPerPixel(): int
    public getSurfaceType(): sun.java2d.loops.SurfaceType
    public getProxyKey(): java.lang.Object
    public getSolidLoops(arg0: sun.java2d.loops.SurfaceType): sun.java2d.loops.RenderLoops
    public getColorModel(): java.awt.image.ColorModel
    public getColorModel(arg0: int): java.awt.image.ColorModel
    public static createDCM32(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): java.awt.image.DirectColorModel
    public static createABGRCCM(): java.awt.image.ComponentColorModel
    public getDefaultTransform(): java.awt.geom.AffineTransform
    public getNormalizingTransform(): java.awt.geom.AffineTransform
    public getAData(): long
    public toString(): string
    public getBounds(): java.awt.Rectangle
    public pGetBounds(arg0: int): java.awt.Rectangle
    public getBufferCapabilities(): java.awt.BufferCapabilities
    public getImageCapabilities(): java.awt.ImageCapabilities
    public isDoubleBuffered(): boolean
    public createSurfaceData(arg0: sun.awt.X11ComponentPeer): sun.java2d.SurfaceData
    public createAcceleratedImage(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Image
    public createBackBuffer(arg0: sun.awt.X11ComponentPeer, arg1: int, arg2: java.awt.BufferCapabilities): long
    public destroyBackBuffer(arg0: long): void
    public createBackBufferImage(arg0: java.awt.Component, arg1: long): java.awt.image.VolatileImage
    public flip(arg0: sun.awt.X11ComponentPeer, arg1: java.awt.Component, arg2: java.awt.image.VolatileImage, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.awt.BufferCapabilities$FlipContents): void
    public isTranslucencyCapable(): boolean
    public static class: java.lang.Class<any>
}

class X11GraphicsConfig$$Lambda extends java.awt.GraphicsConfiguration implements sun.awt.image.SurfaceManager$ProxiedGraphicsConfig {
    protected screen: sun.awt.X11GraphicsDevice
}

    }
}