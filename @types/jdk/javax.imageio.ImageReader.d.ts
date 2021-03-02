declare namespace javax {
  namespace imageio {

    abstract class ImageReader {
      protected originatingProvider: javax.imageio.spi.ImageReaderSpi
      protected input: java.lang.Object
      protected seekForwardOnly: boolean
      protected ignoreMetadata: boolean
      protected minIndex: int
      protected availableLocales: java.util.Locale[]
      protected locale: java.util.Locale
      protected warningListeners: java.util.List<javax.imageio.event.IIOReadWarningListener>
      protected warningLocales: java.util.List<java.util.Locale>
      protected progressListeners: java.util.List<javax.imageio.event.IIOReadProgressListener>
      protected updateListeners: java.util.List<javax.imageio.event.IIOReadUpdateListener>
      protected constructor(arg0: javax.imageio.spi.ImageReaderSpi)
      public getFormatName(): java.lang.String
      public getOriginatingProvider(): javax.imageio.spi.ImageReaderSpi
      public setInput(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
      public setInput(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean): void
      public setInput(arg0: java.lang.Object | any): void
      public getInput(): java.lang.Object
      public isSeekForwardOnly(): boolean
      public isIgnoringMetadata(): boolean
      public getMinIndex(): number
      public getAvailableLocales(): java.util.Locale[]
      public setLocale(arg0: java.util.Locale): void
      public getLocale(): java.util.Locale
      public abstract getNumImages(arg0: boolean | java.lang.Boolean): number
      public abstract getWidth(arg0: number | java.lang.Integer): number
      public abstract getHeight(arg0: number | java.lang.Integer): number
      public isRandomAccessEasy(arg0: number | java.lang.Integer): boolean
      public getAspectRatio(arg0: number | java.lang.Integer): number
      public getRawImageType(arg0: number | java.lang.Integer): javax.imageio.ImageTypeSpecifier
      public abstract getImageTypes(arg0: number | java.lang.Integer): java.util.Iterator<javax.imageio.ImageTypeSpecifier>
      public getDefaultReadParam(): javax.imageio.ImageReadParam
      public abstract getStreamMetadata(): javax.imageio.metadata.IIOMetadata
      public getStreamMetadata(arg0: java.lang.String | string, arg1: java.util.Set<java.lang.String>): javax.imageio.metadata.IIOMetadata
      public abstract getImageMetadata(arg0: number | java.lang.Integer): javax.imageio.metadata.IIOMetadata
      public getImageMetadata(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: java.util.Set<java.lang.String>): javax.imageio.metadata.IIOMetadata
      public read(arg0: number | java.lang.Integer): java.awt.image.BufferedImage
      public abstract read(arg0: number | java.lang.Integer, arg1: javax.imageio.ImageReadParam): java.awt.image.BufferedImage
      public readAll(arg0: number | java.lang.Integer, arg1: javax.imageio.ImageReadParam): javax.imageio.IIOImage
      public readAll(arg0: java.util.Iterator<javax.imageio.ImageReadParam>): java.util.Iterator<javax.imageio.IIOImage>
      public canReadRaster(): boolean
      public readRaster(arg0: number | java.lang.Integer, arg1: javax.imageio.ImageReadParam): java.awt.image.Raster
      public isImageTiled(arg0: number | java.lang.Integer): boolean
      public getTileWidth(arg0: number | java.lang.Integer): number
      public getTileHeight(arg0: number | java.lang.Integer): number
      public getTileGridXOffset(arg0: number | java.lang.Integer): number
      public getTileGridYOffset(arg0: number | java.lang.Integer): number
      public readTile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.image.BufferedImage
      public readTileRaster(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.image.Raster
      public readAsRenderedImage(arg0: number | java.lang.Integer, arg1: javax.imageio.ImageReadParam): java.awt.image.RenderedImage
      public readerSupportsThumbnails(): boolean
      public hasThumbnails(arg0: number | java.lang.Integer): boolean
      public getNumThumbnails(arg0: number | java.lang.Integer): number
      public getThumbnailWidth(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public getThumbnailHeight(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public readThumbnail(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.BufferedImage
      public abort(): void
      protected abortRequested(): boolean
      protected clearAbortRequest(): void
      static addToList<T>(arg0: java.util.List<T>, arg1: T): java.util.List<T>
      static removeFromList<T>(arg0: java.util.List<T>, arg1: T): java.util.List<T>
      public addIIOReadWarningListener(arg0: javax.imageio.event.IIOReadWarningListener | javax.imageio.event.IIOReadWarningListener$$lambda): void
      public removeIIOReadWarningListener(arg0: javax.imageio.event.IIOReadWarningListener | javax.imageio.event.IIOReadWarningListener$$lambda): void
      public removeAllIIOReadWarningListeners(): void
      public addIIOReadProgressListener(arg0: javax.imageio.event.IIOReadProgressListener): void
      public removeIIOReadProgressListener(arg0: javax.imageio.event.IIOReadProgressListener): void
      public removeAllIIOReadProgressListeners(): void
      public addIIOReadUpdateListener(arg0: javax.imageio.event.IIOReadUpdateListener): void
      public removeIIOReadUpdateListener(arg0: javax.imageio.event.IIOReadUpdateListener): void
      public removeAllIIOReadUpdateListeners(): void
      protected processSequenceStarted(arg0: number | java.lang.Integer): void
      protected processSequenceComplete(): void
      protected processImageStarted(arg0: number | java.lang.Integer): void
      protected processImageProgress(arg0: number | java.lang.Float): void
      protected processImageComplete(): void
      protected processThumbnailStarted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      protected processThumbnailProgress(arg0: number | java.lang.Float): void
      protected processThumbnailComplete(): void
      protected processReadAborted(): void
      protected processPassStarted(arg0: java.awt.image.BufferedImage, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: int[]): void
      protected processImageUpdate(arg0: java.awt.image.BufferedImage, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: int[]): void
      protected processPassComplete(arg0: java.awt.image.BufferedImage): void
      protected processThumbnailPassStarted(arg0: java.awt.image.BufferedImage, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: int[]): void
      protected processThumbnailUpdate(arg0: java.awt.image.BufferedImage, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: int[]): void
      protected processThumbnailPassComplete(arg0: java.awt.image.BufferedImage): void
      protected processWarningOccurred(arg0: java.lang.String | string): void
      protected processWarningOccurred(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      public reset(): void
      public dispose(): void
      protected static getSourceRegion(arg0: javax.imageio.ImageReadParam, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.Rectangle
      protected static computeRegions(arg0: javax.imageio.ImageReadParam, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.BufferedImage, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle): void
      protected static checkReadParamBandSettings(arg0: javax.imageio.ImageReadParam, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      protected static getDestination(arg0: javax.imageio.ImageReadParam, arg1: java.util.Iterator<javax.imageio.ImageTypeSpecifier>, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.awt.image.BufferedImage
    }

  }
}
