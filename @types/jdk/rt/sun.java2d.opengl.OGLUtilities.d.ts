declare namespace sun {
    namespace java2d {
        namespace opengl {
            class OGLUtilities {
                public static UNDEFINED: int
                public static WINDOW: int
                public static PBUFFER: int
                public static TEXTURE: int
                public static FLIP_BACKBUFFER: int
                public static FBOBJECT: int
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