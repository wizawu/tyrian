declare namespace sun {
    namespace awt {
        namespace image {
            class DataBufferNative extends java.awt.image.DataBuffer {
                protected surfaceData: sun.java2d.SurfaceData
                protected width: int
                public constructor(arg0: sun.java2d.SurfaceData, arg1: int, arg2: int, arg3: int)
                protected getElem(arg0: int, arg1: int, arg2: sun.java2d.SurfaceData): int
                public getElem(arg0: int, arg1: int): int
                protected setElem(arg0: int, arg1: int, arg2: int, arg3: sun.java2d.SurfaceData): void
                public setElem(arg0: int, arg1: int, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}