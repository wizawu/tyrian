declare namespace sun {
    namespace awt {
        namespace image {
            class JPEGImageDecoder extends sun.awt.image.ImageDecoder {
                public constructor(arg0: sun.awt.image.InputStreamImageSource | sun.awt.image.InputStreamImageSource$$Lambda, arg1: java.io.InputStream | java.io.InputStream$$Lambda)
                public sendHeaderInfo(arg0: int, arg1: int, arg2: boolean, arg3: boolean, arg4: boolean): boolean
                public sendPixels(arg0: int[], arg1: int): boolean
                public sendPixels(arg0: byte[], arg1: int): boolean
                public produceImage(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}