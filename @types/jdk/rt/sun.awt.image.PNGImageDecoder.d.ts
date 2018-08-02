declare namespace sun {
    namespace awt {
        namespace image {
            class PNGImageDecoder extends sun.awt.image.ImageDecoder {
                protected handleChunk(arg0: int, arg1: byte[], arg2: int, arg3: int): boolean
                public produceImage(): void
                public constructor(arg0: sun.awt.image.InputStreamImageSource | sun.awt.image.InputStreamImageSource$$Lambda, arg1: java.io.InputStream)
                public static getCheckCRC(): boolean
                public static setCheckCRC(arg0: boolean): void
                protected wrc(arg0: int): void
                protected wrk(arg0: int): void
                public print(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}