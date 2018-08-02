declare namespace sun {
    namespace java2d {
        namespace opengl {
abstract class GLXSurfaceData extends sun.java2d.opengl.OGLSurfaceData {
    protected peer: sun.awt.X11ComponentPeer
    protected initPbuffer(arg0: long, arg1: long, arg2: boolean, arg3: int, arg4: int): boolean
    protected constructor(arg0: sun.awt.X11ComponentPeer, arg1: sun.java2d.opengl.GLXGraphicsConfig, arg2: java.awt.image.ColorModel, arg3: int)
    public getDeviceConfiguration(): java.awt.GraphicsConfiguration
    public static createData(arg0: sun.awt.X11ComponentPeer): sun.java2d.opengl.GLXSurfaceData$GLXWindowSurfaceData
    public static createData(arg0: sun.awt.X11ComponentPeer, arg1: java.awt.Image, arg2: int): sun.java2d.opengl.GLXSurfaceData$GLXOffScreenSurfaceData
    public static createData(arg0: sun.java2d.opengl.GLXGraphicsConfig, arg1: int, arg2: int, arg3: java.awt.image.ColorModel, arg4: java.awt.Image, arg5: int): sun.java2d.opengl.GLXSurfaceData$GLXOffScreenSurfaceData
    public static getGC(arg0: sun.awt.X11ComponentPeer): sun.java2d.opengl.GLXGraphicsConfig
    public static class: java.lang.Class<any>
}

        }
    }
}