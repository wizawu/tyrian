declare namespace java {
  namespace awt {
    namespace image {

      interface BufferedImageOp {

        filter(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage): java.awt.image.BufferedImage
        getBounds2D(arg0: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
        createCompatibleDestImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.ColorModel): java.awt.image.BufferedImage
        getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        getRenderingHints(): java.awt.RenderingHints
      }

    }
  }
}
