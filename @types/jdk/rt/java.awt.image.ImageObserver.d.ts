declare namespace java {
    namespace awt {
        namespace image {
            interface ImageObserver {
                WIDTH: int
                HEIGHT: int
                PROPERTIES: int
                SOMEBITS: int
                FRAMEBITS: int
                ALLBITS: int
                ERROR: int
                ABORT: int
                imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
            }
            interface ImageObserver$$Lambda {
                (arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
            }
        }
    }
}