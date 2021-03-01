declare namespace javax {
  namespace imageio {

    class ImageWriteParam extends javax.imageio.IIOParam {

      public static readonly MODE_DISABLED: int
      public static readonly MODE_DEFAULT: int
      public static readonly MODE_EXPLICIT: int
      public static readonly MODE_COPY_FROM_METADATA: int
      protected canWriteTiles: boolean
      protected tilingMode: int
      protected preferredTileSizes: java.awt.Dimension[]
      protected tilingSet: boolean
      protected tileWidth: int
      protected tileHeight: int
      protected canOffsetTiles: boolean
      protected tileGridXOffset: int
      protected tileGridYOffset: int
      protected canWriteProgressive: boolean
      protected progressiveMode: int
      protected canWriteCompressed: boolean
      protected compressionMode: int
      protected compressionTypes: java.lang.String[]
      protected compressionType: java.lang.String
      protected compressionQuality: float
      protected locale: java.util.Locale
      protected constructor()
      public constructor(arg0: java.util.Locale)
      public getLocale(): java.util.Locale
      public canWriteTiles(): boolean
      public canOffsetTiles(): boolean
      public setTilingMode(arg0: int): void
      public getTilingMode(): int
      public getPreferredTileSizes(): java.awt.Dimension[]
      public setTiling(arg0: int, arg1: int, arg2: int, arg3: int): void
      public unsetTiling(): void
      public getTileWidth(): int
      public getTileHeight(): int
      public getTileGridXOffset(): int
      public getTileGridYOffset(): int
      public canWriteProgressive(): boolean
      public setProgressiveMode(arg0: int): void
      public getProgressiveMode(): int
      public canWriteCompressed(): boolean
      public setCompressionMode(arg0: int): void
      public getCompressionMode(): int
      public getCompressionTypes(): java.lang.String[]
      public setCompressionType(arg0: java.lang.String): void
      public getCompressionType(): java.lang.String
      public unsetCompression(): void
      public getLocalizedCompressionTypeName(): java.lang.String
      public isCompressionLossless(): boolean
      public setCompressionQuality(arg0: float): void
      public getCompressionQuality(): float
      public getBitRate(arg0: float): float
      public getCompressionQualityDescriptions(): java.lang.String[]
      public getCompressionQualityValues(): float[]
    }

  }
}
