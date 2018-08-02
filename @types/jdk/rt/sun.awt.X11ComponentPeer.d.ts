declare namespace sun {
    namespace awt {
interface X11ComponentPeer {
    getWindow(): long
    getContentWindow(): long
    getSurfaceData(): sun.java2d.SurfaceData
    getGraphicsConfiguration(): java.awt.GraphicsConfiguration
    getColorModel(): java.awt.image.ColorModel
    getBounds(): java.awt.Rectangle
    getGraphics(): java.awt.Graphics
    getTarget(): java.lang.Object
    setFullScreenExclusiveModeState(arg0: boolean): void
}

    }
}