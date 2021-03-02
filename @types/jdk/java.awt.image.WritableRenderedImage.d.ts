declare namespace java {
  namespace awt {
    namespace image {

      interface WritableRenderedImage extends java.awt.image.RenderedImage {
        addTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$lambda): void
        removeTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$lambda): void
        getWritableTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.WritableRaster
        releaseWritableTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        isTileWritable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        getWritableTileIndices(): java.awt.Point[]
        hasTileWriters(): boolean
        setData(arg0: java.awt.image.Raster): void
      }

    }
  }
}
