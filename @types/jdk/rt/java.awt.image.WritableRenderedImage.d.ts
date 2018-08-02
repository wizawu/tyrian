declare namespace java {
    namespace awt {
        namespace image {
            interface WritableRenderedImage extends java.awt.image.RenderedImage {
                addTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$Lambda): void
                removeTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$Lambda): void
                getWritableTile(arg0: int, arg1: int): java.awt.image.WritableRaster
                releaseWritableTile(arg0: int, arg1: int): void
                isTileWritable(arg0: int, arg1: int): boolean
                getWritableTileIndices(): java.awt.Point[]
                hasTileWriters(): boolean
                setData(arg0: java.awt.image.Raster): void
            }
        }
    }
}