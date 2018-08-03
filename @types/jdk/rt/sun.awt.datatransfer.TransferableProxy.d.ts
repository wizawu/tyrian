declare namespace sun {
    namespace awt {
        namespace datatransfer {
            class TransferableProxy implements java.awt.datatransfer.Transferable {
                protected readonly transferable: java.awt.datatransfer.Transferable
                protected readonly isLocal: boolean
                public constructor(arg0: java.awt.datatransfer.Transferable, arg1: boolean)
                public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}