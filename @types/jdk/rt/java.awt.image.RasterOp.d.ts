declare namespace java {
    namespace awt {
        namespace image {
            interface RasterOp {
                filter(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): java.awt.image.WritableRaster
                getBounds2D(arg0: java.awt.image.Raster): java.awt.geom.Rectangle2D
                createCompatibleDestRaster(arg0: java.awt.image.Raster): java.awt.image.WritableRaster
                getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
                getRenderingHints(): java.awt.RenderingHints
            }
        }
    }
}