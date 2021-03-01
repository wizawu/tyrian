declare namespace java {
  namespace awt {
    namespace image {

      interface ImageProducer {

        addConsumer(arg0: java.awt.image.ImageConsumer): void
        isConsumer(arg0: java.awt.image.ImageConsumer): boolean
        removeConsumer(arg0: java.awt.image.ImageConsumer): void
        startProduction(arg0: java.awt.image.ImageConsumer): void
        requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
      }

    }
  }
}
