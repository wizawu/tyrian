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
            public getFormatName(): string
            public getOriginatingProvider(): javax.imageio.spi.ImageReaderSpi
            public setInput(arg0: java.lang.Object, arg1: boolean, arg2: boolean): void
            public setInput(arg0: java.lang.Object, arg1: boolean): void
            public setInput(arg0: java.lang.Object): void
            public getInput(): java.lang.Object
            public isSeekForwardOnly(): boolean
            public isIgnoringMetadata(): boolean
            public getMinIndex(): int
            public getAvailableLocales(): java.util.Locale[]
            public setLocale(arg0: java.util.Locale): void
            public getLocale(): java.util.Locale
            public getNumImages(arg0: boolean): int
            public getWidth(arg0: int): int
            public getHeight(arg0: int): int
            public isRandomAccessEasy(arg0: int): boolean
            public getAspectRatio(arg0: int): float
            public getRawImageType(arg0: int): javax.imageio.ImageTypeSpecifier
            public getImageTypes(arg0: int): java.util.Iterator<javax.imageio.ImageTypeSpecifier>
            public getDefaultReadParam(): javax.imageio.ImageReadParam
            public getStreamMetadata(): javax.imageio.metadata.IIOMetadata
            public getStreamMetadata(arg0: java.lang.String | string, arg1: java.util.Set<java.lang.String>): javax.imageio.metadata.IIOMetadata
            public getImageMetadata(arg0: int): javax.imageio.metadata.IIOMetadata
            public getImageMetadata(arg0: int, arg1: java.lang.String | string, arg2: java.util.Set<java.lang.String>): javax.imageio.metadata.IIOMetadata
            public read(arg0: int): java.awt.image.BufferedImage
            public read(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.BufferedImage
            public readAll(arg0: int, arg1: javax.imageio.ImageReadParam): javax.imageio.IIOImage
            public readAll(arg0: java.util.Iterator<javax.imageio.ImageReadParam>): java.util.Iterator<javax.imageio.IIOImage>
            public canReadRaster(): boolean
            public readRaster(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.Raster
            public isImageTiled(arg0: int): boolean
            public getTileWidth(arg0: int): int
            public getTileHeight(arg0: int): int
            public getTileGridXOffset(arg0: int): int
            public getTileGridYOffset(arg0: int): int
            public readTile(arg0: int, arg1: int, arg2: int): java.awt.image.BufferedImage
            public readTileRaster(arg0: int, arg1: int, arg2: int): java.awt.image.Raster
            public readAsRenderedImage(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.RenderedImage
            public readerSupportsThumbnails(): boolean
            public hasThumbnails(arg0: int): boolean
            public getNumThumbnails(arg0: int): int
            public getThumbnailWidth(arg0: int, arg1: int): int
            public getThumbnailHeight(arg0: int, arg1: int): int
            public readThumbnail(arg0: int, arg1: int): java.awt.image.BufferedImage
            public abort(): void
            protected abortRequested(): boolean
            protected clearAbortRequest(): void
            public addIIOReadWarningListener(arg0: javax.imageio.event.IIOReadWarningListener): void
            public removeIIOReadWarningListener(arg0: javax.imageio.event.IIOReadWarningListener): void
            public removeAllIIOReadWarningListeners(): void
            public addIIOReadProgressListener(arg0: javax.imageio.event.IIOReadProgressListener): void
            public removeIIOReadProgressListener(arg0: javax.imageio.event.IIOReadProgressListener): void
            public removeAllIIOReadProgressListeners(): void
            public addIIOReadUpdateListener(arg0: javax.imageio.event.IIOReadUpdateListener): void
            public removeIIOReadUpdateListener(arg0: javax.imageio.event.IIOReadUpdateListener): void
            public removeAllIIOReadUpdateListeners(): void
            protected processSequenceStarted(arg0: int): void
            protected processSequenceComplete(): void
            protected processImageStarted(arg0: int): void
            protected processImageProgress(arg0: float): void
            protected processImageComplete(): void
            protected processThumbnailStarted(arg0: int, arg1: int): void
            protected processThumbnailProgress(arg0: float): void
            protected processThumbnailComplete(): void
            protected processReadAborted(): void
            protected processPassStarted(arg0: java.awt.image.BufferedImage, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int[]): void
            protected processImageUpdate(arg0: java.awt.image.BufferedImage, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int[]): void
            protected processPassComplete(arg0: java.awt.image.BufferedImage): void
            protected processThumbnailPassStarted(arg0: java.awt.image.BufferedImage, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int[]): void
            protected processThumbnailUpdate(arg0: java.awt.image.BufferedImage, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int[]): void
            protected processThumbnailPassComplete(arg0: java.awt.image.BufferedImage): void
            protected processWarningOccurred(arg0: java.lang.String | string): void
            protected processWarningOccurred(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public reset(): void
            public dispose(): void
            protected static getSourceRegion(arg0: javax.imageio.ImageReadParam, arg1: int, arg2: int): java.awt.Rectangle
            protected static computeRegions(arg0: javax.imageio.ImageReadParam, arg1: int, arg2: int, arg3: java.awt.image.BufferedImage, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle): void
            protected static checkReadParamBandSettings(arg0: javax.imageio.ImageReadParam, arg1: int, arg2: int): void
            protected static getDestination(arg0: javax.imageio.ImageReadParam, arg1: java.util.Iterator<javax.imageio.ImageTypeSpecifier>, arg2: int, arg3: int): java.awt.image.BufferedImage
            public static class: java.lang.Class<any>
        }
    }
}