declare namespace java {
  namespace awt {
    namespace image {

      class BandCombineOp implements java.awt.image.RasterOp {
        matrix: float[][]
        nrows: int
        ncols: int
        hints: java.awt.RenderingHints
        public constructor(arg0: float[][], arg1: java.awt.RenderingHints)
        public getMatrix(): number[][]
        public filter(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public getBounds2D(arg0: java.awt.image.Raster): java.awt.geom.Rectangle2D
        public createCompatibleDestRaster(arg0: java.awt.image.Raster): java.awt.image.WritableRaster
        public getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public getRenderingHints(): java.awt.RenderingHints
      }

    }
  }
}
