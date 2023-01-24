declare namespace java {
  namespace awt {
    namespace image {
      class AffineTransformOp implements java.awt.image.BufferedImageOp, java.awt.image.RasterOp {
        hints: java.awt.RenderingHints
        public static readonly TYPE_NEAREST_NEIGHBOR: int
        public static readonly TYPE_BILINEAR: int
        public static readonly TYPE_BICUBIC: int
        interpolationType: int
        public constructor(arg0: java.awt.geom.AffineTransform, arg1: java.awt.RenderingHints)
        public constructor(arg0: java.awt.geom.AffineTransform, arg1: number | java.lang.Integer)
        public getInterpolationType(): number
        public filter(
          arg0: java.awt.image.BufferedImage,
          arg1: java.awt.image.BufferedImage
        ): java.awt.image.BufferedImage
        public filter(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public getBounds2D(arg0: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
        public getBounds2D(arg0: java.awt.image.Raster): java.awt.geom.Rectangle2D
        public createCompatibleDestImage(
          arg0: java.awt.image.BufferedImage,
          arg1: java.awt.image.ColorModel
        ): java.awt.image.BufferedImage
        public createCompatibleDestRaster(arg0: java.awt.image.Raster): java.awt.image.WritableRaster
        public getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public getTransform(): java.awt.geom.AffineTransform
        public getRenderingHints(): java.awt.RenderingHints
        validateTransform(arg0: java.awt.geom.AffineTransform): void
      }
    }
  }
}
