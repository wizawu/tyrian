declare namespace java {
  namespace awt {
    namespace image {

      abstract class AbstractMultiResolutionImage extends java.awt.Image implements java.awt.image.MultiResolutionImage {
        public constructor()
        public getWidth(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): number
        public getHeight(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): number
        public getSource(): java.awt.image.ImageProducer
        public getGraphics(): java.awt.Graphics
        public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): java.lang.Object
        protected abstract getBaseImage(): java.awt.Image
      }

    }
  }
}
