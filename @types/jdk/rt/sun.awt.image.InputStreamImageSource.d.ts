declare namespace sun {
    namespace awt {
        namespace image {
            abstract class InputStreamImageSource implements java.awt.image.ImageProducer , sun.awt.image.ImageFetchable {
                public constructor()
                public addConsumer(arg0: java.awt.image.ImageConsumer): void
                public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
                public removeConsumer(arg0: java.awt.image.ImageConsumer): void
                public startProduction(arg0: java.awt.image.ImageConsumer): void
                public requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
                protected abstract getDecoder(): sun.awt.image.ImageDecoder
                protected decoderForType(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): sun.awt.image.ImageDecoder
                protected getDecoder(arg0: java.io.InputStream | java.io.InputStream$$Lambda): sun.awt.image.ImageDecoder
                public doFetch(): void
                public static class: java.lang.Class<any>
            }
            interface InputStreamImageSource$$Lambda implements java.awt.image.ImageProducer , sun.awt.image.ImageFetchable {
                (): sun.awt.image.ImageDecoder
            }
        }
    }
}