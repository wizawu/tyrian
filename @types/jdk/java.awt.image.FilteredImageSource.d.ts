declare namespace java {
  namespace awt {
    namespace image {

      class FilteredImageSource implements java.awt.image.ImageProducer {

        src: java.awt.image.ImageProducer
        filter: java.awt.image.ImageFilter
        public constructor(arg0: java.awt.image.ImageProducer, arg1: java.awt.image.ImageFilter)
        public addConsumer(arg0: java.awt.image.ImageConsumer): void
        public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
        public removeConsumer(arg0: java.awt.image.ImageConsumer): void
        public startProduction(arg0: java.awt.image.ImageConsumer): void
        public requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
      }

    }
  }
}
