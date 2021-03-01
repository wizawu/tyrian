declare namespace java {
  namespace awt {
    namespace image {

      class RescaleOp implements java.awt.image.BufferedImageOp, java.awt.image.RasterOp {

        scaleFactors: float[]
        offsets: float[]
        length: int
        hints: java.awt.RenderingHints
        public constructor(arg0: float[], arg1: float[], arg2: java.awt.RenderingHints)
        public constructor(arg0: float, arg1: float, arg2: java.awt.RenderingHints)
        public readonly getScaleFactors(arg0: float[]): float[]
        public readonly getOffsets(arg0: float[]): float[]
        public readonly getNumFactors(): int
        public readonly filter(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage): java.awt.image.BufferedImage
        public readonly filter(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public readonly getBounds2D(arg0: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
        public readonly getBounds2D(arg0: java.awt.image.Raster): java.awt.geom.Rectangle2D
        public createCompatibleDestImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.ColorModel): java.awt.image.BufferedImage
        public createCompatibleDestRaster(arg0: java.awt.image.Raster): java.awt.image.WritableRaster
        public readonly getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public readonly getRenderingHints(): java.awt.RenderingHints
      }

    }
  }
}
