declare namespace java {
    namespace awt {
        namespace datatransfer {
            class StringSelection implements java.awt.datatransfer.Transferable , java.awt.datatransfer.ClipboardOwner {
                public constructor(arg0: java.lang.String | string)
                public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                public lostOwnership(arg0: java.awt.datatransfer.Clipboard, arg1: java.awt.datatransfer.Transferable): void
                public static class: java.lang.Class<any>
            }
            class StringSelection$$Lambda implements java.awt.datatransfer.Transferable , java.awt.datatransfer.ClipboardOwner {
                public constructor(arg0: java.lang.String | string)
            }
        }
    }
}