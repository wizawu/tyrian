declare namespace java {
  namespace awt {
    namespace image {

      class ConvolveOp implements java.awt.image.BufferedImageOp, java.awt.image.RasterOp {

        kernel: java.awt.image.Kernel
        edgeHint: int
        hints: java.awt.RenderingHints
        public static readonly EDGE_ZERO_FILL: int
        public static readonly EDGE_NO_OP: int
        public constructor(arg0: java.awt.image.Kernel, arg1: int, arg2: java.awt.RenderingHints)
        public constructor(arg0: java.awt.image.Kernel)
        public getEdgeCondition(): int
        public readonly getKernel(): java.awt.image.Kernel
        public readonly filter(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage): java.awt.image.BufferedImage
        public readonly filter(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public createCompatibleDestImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.ColorModel): java.awt.image.BufferedImage
        public createCompatibleDestRaster(arg0: java.awt.image.Raster): java.awt.image.WritableRaster
        public readonly getBounds2D(arg0: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
        public readonly getBounds2D(arg0: java.awt.image.Raster): java.awt.geom.Rectangle2D
        public readonly getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public readonly getRenderingHints(): java.awt.RenderingHints
      }

    }
  }
}
