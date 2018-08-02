declare namespace sun {
    namespace awt {
        namespace datatransfer {
            abstract class DataTransferer {
                public static plainTextStringFlavor: java.awt.datatransfer.DataFlavor
                public static javaTextEncodingFlavor: java.awt.datatransfer.DataFlavor
                public constructor()
                public static getInstance(): sun.awt.datatransfer.DataTransferer
                public static canonicalName(arg0: java.lang.String | string): string
                public static getTextCharset(arg0: java.awt.datatransfer.DataFlavor): string
                public static getDefaultTextCharset(): string
                public static doesSubtypeSupportCharset(arg0: java.awt.datatransfer.DataFlavor): boolean
                public static doesSubtypeSupportCharset(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                public static isFlavorCharsetTextType(arg0: java.awt.datatransfer.DataFlavor): boolean
                public static isFlavorNoncharsetTextType(arg0: java.awt.datatransfer.DataFlavor): boolean
                public static isEncodingSupported(arg0: java.lang.String | string): boolean
                public static isRemote(arg0: java.lang.Class<any>): boolean
                public static standardEncodings(): java.util.Set<java.lang.String>
                public static adaptFlavorMap(arg0: java.awt.datatransfer.FlavorMap): java.awt.datatransfer.FlavorTable
                public getDefaultUnicodeEncoding(): string
                public registerTextFlavorProperties(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                protected isTextFormat(arg0: long): boolean
                protected getCharsetForTextFormat(arg0: java.lang.Long): string
                public isLocaleDependentTextFormat(arg0: long): boolean
                public isFileFormat(arg0: long): boolean
                public isImageFormat(arg0: long): boolean
                protected isURIListFormat(arg0: long): boolean
                public getFormatsForTransferable(arg0: java.awt.datatransfer.Transferable, arg1: java.awt.datatransfer.FlavorTable): java.util.SortedMap<java.lang.Long, java.awt.datatransfer.DataFlavor>
                public getFormatsForFlavor(arg0: java.awt.datatransfer.DataFlavor, arg1: java.awt.datatransfer.FlavorTable): java.util.SortedMap
                public getFormatsForFlavors(arg0: java.awt.datatransfer.DataFlavor[], arg1: java.awt.datatransfer.FlavorTable): java.util.SortedMap<java.lang.Long, java.awt.datatransfer.DataFlavor>
                public getFormatsForTransferableAsArray(arg0: java.awt.datatransfer.Transferable, arg1: java.awt.datatransfer.FlavorTable): long[]
                public getFormatsForFlavorAsArray(arg0: java.awt.datatransfer.DataFlavor, arg1: java.awt.datatransfer.FlavorTable): long[]
                public getFormatsForFlavorsAsArray(arg0: java.awt.datatransfer.DataFlavor[], arg1: java.awt.datatransfer.FlavorTable): long[]
                public getFlavorsForFormat(arg0: long, arg1: java.awt.datatransfer.FlavorTable): java.util.Map
                public getFlavorsForFormats(arg0: long[], arg1: java.awt.datatransfer.FlavorTable): java.util.Map
                public getFlavorsForFormatsAsSet(arg0: long[], arg1: java.awt.datatransfer.FlavorTable): java.util.Set
                public getFlavorsForFormatAsArray(arg0: long, arg1: java.awt.datatransfer.FlavorTable): java.awt.datatransfer.DataFlavor[]
                public getFlavorsForFormatsAsArray(arg0: long[], arg1: java.awt.datatransfer.FlavorTable): java.awt.datatransfer.DataFlavor[]
                protected getFormatForNativeAsLong(arg0: java.lang.String | string): java.lang.Long
                protected getNativeForFormat(arg0: long): string
                public translateTransferable(arg0: java.awt.datatransfer.Transferable, arg1: java.awt.datatransfer.DataFlavor, arg2: long): byte[]
                protected convertFileListToBytes(arg0: java.util.ArrayList<java.lang.String>): java.io.ByteArrayOutputStream
                public translateBytes(arg0: byte[], arg1: java.awt.datatransfer.DataFlavor, arg2: long, arg3: java.awt.datatransfer.Transferable): java.lang.Object
                public translateStream(arg0: java.io.InputStream, arg1: java.awt.datatransfer.DataFlavor, arg2: long, arg3: java.awt.datatransfer.Transferable): java.lang.Object
                protected dragQueryFile(arg0: byte[]): java.lang.String[]
                protected dragQueryURIs(arg0: java.io.InputStream, arg1: long, arg2: java.awt.datatransfer.Transferable): java.net.URI[]
                protected platformImageBytesToImage(arg0: byte[], arg1: long): java.awt.Image
                protected standardImageBytesToImage(arg0: byte[], arg1: java.lang.String | string): java.awt.Image
                protected imageToPlatformBytes(arg0: java.awt.Image, arg1: long): byte[]
                protected imageToStandardBytes(arg0: java.awt.Image, arg1: java.lang.String | string): byte[]
                protected imageToStandardBytesImpl(arg0: java.awt.image.RenderedImage, arg1: java.lang.String | string): byte[]
                public convertData(arg0: java.lang.Object, arg1: java.awt.datatransfer.Transferable, arg2: long, arg3: java.util.Map, arg4: boolean): byte[]
                public processDataConversionRequests(): void
                public getToolkitThreadBlockedHandler(): sun.awt.datatransfer.ToolkitThreadBlockedHandler
                public static keysToLongArray(arg0: java.util.SortedMap): long[]
                public static setToSortedDataFlavorArray(arg0: java.util.Set): java.awt.datatransfer.DataFlavor[]
                protected static inputStreamToByteArray(arg0: java.io.InputStream): byte[]
                public getPlatformMappingsForNative(arg0: java.lang.String | string): java.util.LinkedHashSet<java.awt.datatransfer.DataFlavor>
                public getPlatformMappingsForFlavor(arg0: java.awt.datatransfer.DataFlavor): java.util.LinkedHashSet<java.lang.String>
                public static class: java.lang.Class<any>
            }
        }
    }
}