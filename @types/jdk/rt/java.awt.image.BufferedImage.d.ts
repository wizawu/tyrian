declare namespace java {
    namespace awt {
        namespace image {
            class BufferedImage extends java.awt.Image implements java.awt.image.WritableRenderedImage , java.awt.Transparency {
                public static TYPE_CUSTOM: int
                public static TYPE_INT_RGB: int
                public static TYPE_INT_ARGB: int
                public static TYPE_INT_ARGB_PRE: int
                public static TYPE_INT_BGR: int
                public static TYPE_3BYTE_BGR: int
                public static TYPE_4BYTE_ABGR: int
                public static TYPE_4BYTE_ABGR_PRE: int
                public static TYPE_USHORT_565_RGB: int
                public static TYPE_USHORT_555_RGB: int
                public static TYPE_BYTE_GRAY: int
                public static TYPE_USHORT_GRAY: int
                public static TYPE_BYTE_BINARY: int
                public static TYPE_BYTE_INDEXED: int
                public constructor(arg0: int, arg1: int, arg2: int)
                public constructor(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.IndexColorModel)
                public constructor(arg0: java.awt.image.ColorModel, arg1: java.awt.image.WritableRaster, arg2: boolean, arg3: java.util.Hashtable<any, any>)
                public getType(): int
                public getColorModel(): java.awt.image.ColorModel
                public getRaster(): java.awt.image.WritableRaster
                public getAlphaRaster(): java.awt.image.WritableRaster
                public getRGB(arg0: int, arg1: int): int
                public getRGB(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: int, arg6: int): int[]
                public setRGB(arg0: int, arg1: int, arg2: int): void
                public setRGB(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: int, arg6: int): void
                public getWidth(): int
                public getHeight(): int
                public getWidth(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public getHeight(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public getSource(): java.awt.image.ImageProducer
                public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): java.lang.Object
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public getGraphics(): java.awt.Graphics
                public createGraphics(): java.awt.Graphics2D
                public getSubimage(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.BufferedImage
                public isAlphaPremultiplied(): boolean
                public coerceData(arg0: boolean): void
                public toString(): string
                public getSources(): java.util.Vector<java.awt.image.RenderedImage>
                public getPropertyNames(): java.lang.String[]
                public getMinX(): int
                public getMinY(): int
                public getSampleModel(): java.awt.image.SampleModel
                public getNumXTiles(): int
                public getNumYTiles(): int
                public getMinTileX(): int
                public getMinTileY(): int
                public getTileWidth(): int
                public getTileHeight(): int
                public getTileGridXOffset(): int
                public getTileGridYOffset(): int
                public getTile(arg0: int, arg1: int): java.awt.image.Raster
                public getData(): java.awt.image.Raster
                public getData(arg0: java.awt.Rectangle): java.awt.image.Raster
                public copyData(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
                public setData(arg0: java.awt.image.Raster): void
                public addTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$Lambda): void
                public removeTileObserver(arg0: java.awt.image.TileObserver | java.awt.image.TileObserver$$Lambda): void
                public isTileWritable(arg0: int, arg1: int): boolean
                public getWritableTileIndices(): java.awt.Point[]
                public hasTileWriters(): boolean
                public getWritableTile(arg0: int, arg1: int): java.awt.image.WritableRaster
                public releaseWritableTile(arg0: int, arg1: int): void
                public getTransparency(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}