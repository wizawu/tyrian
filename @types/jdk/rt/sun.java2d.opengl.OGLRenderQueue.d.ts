declare namespace sun {
    namespace java2d {
        namespace opengl {
            class OGLRenderQueue extends sun.java2d.pipe.RenderQueue {
                public static getInstance(): sun.java2d.opengl.OGLRenderQueue
                public static sync(): void
                public static disposeGraphicsConfig(arg0: long): void
                public static isQueueFlusherThread(): boolean
                public flushNow(): void
                public flushAndInvokeNow(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}