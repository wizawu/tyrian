declare namespace sun {
    namespace awt {
        namespace X11 {
            class XDataTransferer extends sun.awt.datatransfer.DataTransferer {
                public getDefaultUnicodeEncoding(): string
                public isLocaleDependentTextFormat(arg0: long): boolean
                public isTextFormat(arg0: long): boolean
                protected getCharsetForTextFormat(arg0: java.lang.Long): string
                protected isURIListFormat(arg0: long): boolean
                public isFileFormat(arg0: long): boolean
                public isImageFormat(arg0: long): boolean
                protected getFormatForNativeAsLong(arg0: java.lang.String | string): java.lang.Long
                protected getNativeForFormat(arg0: long): string
                public getToolkitThreadBlockedHandler(): sun.awt.datatransfer.ToolkitThreadBlockedHandler
                protected imageToPlatformBytes(arg0: java.awt.Image, arg1: long): byte[]
                protected convertFileListToBytes(arg0: java.util.ArrayList<java.lang.String>): java.io.ByteArrayOutputStream
                protected platformImageBytesToImage(arg0: byte[], arg1: long): java.awt.Image
                protected dragQueryFile(arg0: byte[]): java.lang.String[]
                protected dragQueryURIs(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: long, arg2: java.awt.datatransfer.Transferable): java.net.URI[]
                public getPlatformMappingsForNative(arg0: java.lang.String | string): java.util.LinkedHashSet<java.awt.datatransfer.DataFlavor>
                public getPlatformMappingsForFlavor(arg0: java.awt.datatransfer.DataFlavor): java.util.LinkedHashSet<java.lang.String>
                public static class: java.lang.Class<any>
            }
        }
    }
}