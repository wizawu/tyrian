declare namespace java {
  namespace awt {
    namespace image {

      interface RenderedImage {
        getSources(): java.util.Vector<java.awt.image.RenderedImage>
        getProperty(arg0: java.lang.String | string): java.lang.Object
        getPropertyNames(): java.lang.String[]
        getColorModel(): java.awt.image.ColorModel
        getSampleModel(): java.awt.image.SampleModel
        getWidth(): number
        getHeight(): number
        getMinX(): number
        getMinY(): number
        getNumXTiles(): number
        getNumYTiles(): number
        getMinTileX(): number
        getMinTileY(): number
        getTileWidth(): number
        getTileHeight(): number
        getTileGridXOffset(): number
        getTileGridYOffset(): number
        getTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.Raster
        getData(): java.awt.image.Raster
        getData(arg0: java.awt.Rectangle): java.awt.image.Raster
        copyData(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
      }

    }
  }
}
