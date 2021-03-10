declare namespace java {
  namespace awt {
    namespace image {

      class BufferedImage extends java.awt.Image implements java.awt.image.WritableRenderedImage, java.awt.Transparency {
        public static readonly TYPE_CUSTOM: int
        public static readonly TYPE_INT_RGB: int
        public static readonly TYPE_INT_ARGB: int
        public static readonly TYPE_INT_ARGB_PRE: int
        public static readonly TYPE_INT_BGR: int
        public static readonly TYPE_3BYTE_BGR: int
        public static readonly TYPE_4BYTE_ABGR: int
        public static readonly TYPE_4BYTE_ABGR_PRE: int
        public static readonly TYPE_USHORT_565_RGB: int
        public static readonly TYPE_USHORT_555_RGB: int
        public static readonly TYPE_BYTE_GRAY: int
        public static readonly TYPE_USHORT_GRAY: int
        public static readonly TYPE_BYTE_BINARY: int
        public static readonly TYPE_BYTE_INDEXED: int
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.IndexColorModel)
        public constructor(arg0: java.awt.image.ColorModel, arg1: java.awt.image.WritableRaster, arg2: boolean | java.lang.Boolean, arg3: java.util.Hashtable<unknown,unknown>)
        public getType(): number
        public getColorModel(): java.awt.image.ColorModel
        public getRaster(): java.awt.image.WritableRaster
        public getAlphaRaster(): java.awt.image.WritableRaster
        public getRGB(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public getRGB(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): number[]
        public setRGB(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public setRGB(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
        public getWidth(): number
        public getHeight(): number
        public getWidth(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): number
        public getHeight(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): number
        public getSource(): java.awt.image.ImageProducer
        public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): java.lang.Object
        public getProperty(arg0: java.lang.String | string): java.lang.Object
        public getGraphics(): java.awt.Graphics
        public createGraphics(): java.awt.Graphics2D
        public getSubimage(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.awt.image.BufferedImage
        public isAlphaPremultiplied(): boolean
        public coerceData(arg0: boolean | java.lang.Boolean): void
        public toString(): java.lang.String
        public getSources(): java.util.Vector<java.awt.image.RenderedImage>
        public getPropertyNames(): java.lang.String[]
        public getMinX(): number
        public getMinY(): number
        public getSampleModel(): java.awt.image.SampleModel
        public getNumXTiles(): number
        public getNumYTiles(): number
        public getMinTileX(): number
        public getMinTileY(): number
        public getTileWidth(): number
        public getTileHeight(): number
        public getTileGridXOffset(): number
        public getTileGridYOffset(): number
        public getTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.Raster
        public getData(): java.awt.image.Raster
        public getData(arg0: java.awt.Rectangle): java.awt.image.Raster
        public copyData(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public setData(arg0: java.awt.image.Raster): void
        public addTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$lambda): void
        public removeTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$lambda): void
        public isTileWritable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        public getWritableTileIndices(): java.awt.Point[]
        public hasTileWriters(): boolean
        public getWritableTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.WritableRaster
        public releaseWritableTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public getTransparency(): number
      }

    }
  }
}
