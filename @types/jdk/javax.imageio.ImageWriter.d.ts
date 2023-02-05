declare namespace javax {
  namespace imageio {
    abstract class ImageWriter implements javax.imageio.ImageTranscoder {
      protected originatingProvider: javax.imageio.spi.ImageWriterSpi
      protected output: java.lang.Object
      protected availableLocales: java.util.Locale[]
      protected locale: java.util.Locale
      protected warningListeners: java.util.List<javax.imageio.event.IIOWriteWarningListener>
      protected warningLocales: java.util.List<java.util.Locale>
      protected progressListeners: java.util.List<javax.imageio.event.IIOWriteProgressListener>
      protected constructor(arg0: javax.imageio.spi.ImageWriterSpi)
      public getOriginatingProvider(): javax.imageio.spi.ImageWriterSpi
      public setOutput(arg0: java.lang.Object | any): void
      public getOutput(): java.lang.Object
      public getAvailableLocales(): java.util.Locale[]
      public setLocale(arg0: java.util.Locale): void
      public getLocale(): java.util.Locale
      public getDefaultWriteParam(): javax.imageio.ImageWriteParam
      public abstract getDefaultStreamMetadata(arg0: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
      public abstract getDefaultImageMetadata(
        arg0: javax.imageio.ImageTypeSpecifier,
        arg1: javax.imageio.ImageWriteParam
      ): javax.imageio.metadata.IIOMetadata
      public abstract convertStreamMetadata(
        arg0: javax.imageio.metadata.IIOMetadata,
        arg1: javax.imageio.ImageWriteParam
      ): javax.imageio.metadata.IIOMetadata
      public abstract convertImageMetadata(
        arg0: javax.imageio.metadata.IIOMetadata,
        arg1: javax.imageio.ImageTypeSpecifier,
        arg2: javax.imageio.ImageWriteParam
      ): javax.imageio.metadata.IIOMetadata
      public getNumThumbnailsSupported(
        arg0: javax.imageio.ImageTypeSpecifier,
        arg1: javax.imageio.ImageWriteParam,
        arg2: javax.imageio.metadata.IIOMetadata,
        arg3: javax.imageio.metadata.IIOMetadata
      ): number
      public getPreferredThumbnailSizes(
        arg0: javax.imageio.ImageTypeSpecifier,
        arg1: javax.imageio.ImageWriteParam,
        arg2: javax.imageio.metadata.IIOMetadata,
        arg3: javax.imageio.metadata.IIOMetadata
      ): java.awt.Dimension[]
      public canWriteRasters(): boolean
      public abstract write(
        arg0: javax.imageio.metadata.IIOMetadata,
        arg1: javax.imageio.IIOImage,
        arg2: javax.imageio.ImageWriteParam
      ): void
      public write(arg0: javax.imageio.IIOImage): void
      public write(arg0: java.awt.image.RenderedImage): void
      public canWriteSequence(): boolean
      public prepareWriteSequence(arg0: javax.imageio.metadata.IIOMetadata): void
      public writeToSequence(arg0: javax.imageio.IIOImage, arg1: javax.imageio.ImageWriteParam): void
      public endWriteSequence(): void
      public canReplaceStreamMetadata(): boolean
      public replaceStreamMetadata(arg0: javax.imageio.metadata.IIOMetadata): void
      public canReplaceImageMetadata(arg0: number | java.lang.Integer): boolean
      public replaceImageMetadata(arg0: number | java.lang.Integer, arg1: javax.imageio.metadata.IIOMetadata): void
      public canInsertImage(arg0: number | java.lang.Integer): boolean
      public writeInsert(
        arg0: number | java.lang.Integer,
        arg1: javax.imageio.IIOImage,
        arg2: javax.imageio.ImageWriteParam
      ): void
      public canRemoveImage(arg0: number | java.lang.Integer): boolean
      public removeImage(arg0: number | java.lang.Integer): void
      public canWriteEmpty(): boolean
      public prepareWriteEmpty(
        arg0: javax.imageio.metadata.IIOMetadata,
        arg1: javax.imageio.ImageTypeSpecifier,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: javax.imageio.metadata.IIOMetadata,
        arg5: java.util.List<java.awt.image.BufferedImage>,
        arg6: javax.imageio.ImageWriteParam
      ): void
      public endWriteEmpty(): void
      public canInsertEmpty(arg0: number | java.lang.Integer): boolean
      public prepareInsertEmpty(
        arg0: number | java.lang.Integer,
        arg1: javax.imageio.ImageTypeSpecifier,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: javax.imageio.metadata.IIOMetadata,
        arg5: java.util.List<java.awt.image.BufferedImage>,
        arg6: javax.imageio.ImageWriteParam
      ): void
      public endInsertEmpty(): void
      public canReplacePixels(arg0: number | java.lang.Integer): boolean
      public prepareReplacePixels(arg0: number | java.lang.Integer, arg1: java.awt.Rectangle): void
      public replacePixels(arg0: java.awt.image.RenderedImage, arg1: javax.imageio.ImageWriteParam): void
      public replacePixels(arg0: java.awt.image.Raster, arg1: javax.imageio.ImageWriteParam): void
      public endReplacePixels(): void
      public abort(): void
      protected abortRequested(): boolean
      protected clearAbortRequest(): void
      public addIIOWriteWarningListener(
        arg0: javax.imageio.event.IIOWriteWarningListener | javax.imageio.event.IIOWriteWarningListener$$lambda
      ): void
      public removeIIOWriteWarningListener(
        arg0: javax.imageio.event.IIOWriteWarningListener | javax.imageio.event.IIOWriteWarningListener$$lambda
      ): void
      public removeAllIIOWriteWarningListeners(): void
      public addIIOWriteProgressListener(arg0: javax.imageio.event.IIOWriteProgressListener): void
      public removeIIOWriteProgressListener(arg0: javax.imageio.event.IIOWriteProgressListener): void
      public removeAllIIOWriteProgressListeners(): void
      protected processImageStarted(arg0: number | java.lang.Integer): void
      protected processImageProgress(arg0: number | java.lang.Float): void
      protected processImageComplete(): void
      protected processThumbnailStarted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      protected processThumbnailProgress(arg0: number | java.lang.Float): void
      protected processThumbnailComplete(): void
      protected processWriteAborted(): void
      protected processWarningOccurred(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      protected processWarningOccurred(
        arg0: number | java.lang.Integer,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): void
      public reset(): void
      public dispose(): void
    }
  }
}
