declare namespace sun {
    namespace java2d {
        namespace opengl {
            class OGLUtilities {
                public static readonly UNDEFINED: int
                public static readonly WINDOW: int
                public static readonly PBUFFER: int
                public static readonly TEXTURE: int
                public static readonly FLIP_BACKBUFFER: int
                public static readonly FBOBJECT: int
                public static isQueueFlusherThread(): boolean
                public static invokeWithOGLContextCurrent(arg0: java.awt.Graphics, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): boolean
                public static invokeWithOGLSharedContextCurrent(arg0: java.awt.GraphicsConfiguration, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): boolean
                public static getOGLViewport(arg0: java.awt.Graphics, arg1: int, arg2: int): java.awt.Rectangle
                public static getOGLScissorBox(arg0: java.awt.Graphics): java.awt.Rectangle
                public static getOGLSurfaceIdentifier(arg0: java.awt.Graphics): java.lang.Object
                public static getOGLSurfaceType(arg0: java.awt.Graphics): int
                public static getOGLTextureType(arg0: java.awt.Graphics): int
                public static class: java.lang.Class<any>
            }
        }
    }
}