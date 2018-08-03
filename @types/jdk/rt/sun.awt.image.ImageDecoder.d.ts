declare namespace sun {
    namespace awt {
        namespace image {
            abstract class ImageDecoder {
                protected aborted: boolean
                protected finished: boolean
                public constructor(arg0: sun.awt.image.InputStreamImageSource, arg1: java.io.InputStream)
                public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
                public removeConsumer(arg0: java.awt.image.ImageConsumer): void
                protected nextConsumer(arg0: sun.awt.image.ImageConsumerQueue): sun.awt.image.ImageConsumerQueue
                protected setDimensions(arg0: int, arg1: int): int
                protected setProperties(arg0: java.util.Hashtable): int
                protected setColorModel(arg0: java.awt.image.ColorModel): int
                protected setHints(arg0: int): int
                protected headerComplete(): void
                protected setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): int
                protected setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): int
                protected imageComplete(arg0: int, arg1: boolean): int
                public produceImage(): void
                public abort(): void
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}