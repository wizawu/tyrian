declare namespace java {
    namespace awt {
        namespace image {
            interface ImageConsumer {
                RANDOMPIXELORDER: int
                TOPDOWNLEFTRIGHT: int
                COMPLETESCANLINES: int
                SINGLEPASS: int
                SINGLEFRAME: int
                IMAGEERROR: int
                SINGLEFRAMEDONE: int
                STATICIMAGEDONE: int
                IMAGEABORTED: int
                setDimensions(arg0: int, arg1: int): void
                setProperties(arg0: java.util.Hashtable<any, any>): void
                setColorModel(arg0: java.awt.image.ColorModel): void
                setHints(arg0: int): void
                setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
                setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
                imageComplete(arg0: int): void
            }
        }
    }
}