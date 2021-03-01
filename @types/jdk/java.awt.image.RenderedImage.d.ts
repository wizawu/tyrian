declare namespace java {
  namespace awt {
    namespace image {

      interface RenderedImage {

        getSources(): java.util.Vector<java.awt.image.RenderedImage>
        getProperty(arg0: java.lang.String): java.lang.Object
        getPropertyNames(): java.lang.String[]
        getColorModel(): java.awt.image.ColorModel
        getSampleModel(): java.awt.image.SampleModel
        getWidth(): int
        getHeight(): int
        getMinX(): int
        getMinY(): int
        getNumXTiles(): int
        getNumYTiles(): int
        getMinTileX(): int
        getMinTileY(): int
        getTileWidth(): int
        getTileHeight(): int
        getTileGridXOffset(): int
        getTileGridYOffset(): int
        getTile(arg0: int, arg1: int): java.awt.image.Raster
        getData(): java.awt.image.Raster
        getData(arg0: java.awt.Rectangle): java.awt.image.Raster
        copyData(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
      }

    }
  }
}
