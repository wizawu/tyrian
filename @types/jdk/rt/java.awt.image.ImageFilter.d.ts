declare namespace java {
    namespace awt {
        namespace image {
            class ImageFilter implements java.awt.image.ImageConsumer , java.lang.Cloneable {
                protected consumer: java.awt.image.ImageConsumer
                public constructor()
                public getFilterInstance(arg0: java.awt.image.ImageConsumer): java.awt.image.ImageFilter
                public setDimensions(arg0: int, arg1: int): void
                public setProperties(arg0: java.util.Hashtable<any, any>): void
                public setColorModel(arg0: java.awt.image.ColorModel): void
                public setHints(arg0: int): void
                public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
                public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
                public imageComplete(arg0: int): void
                public resendTopDownLeftRight(arg0: java.awt.image.ImageProducer): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}