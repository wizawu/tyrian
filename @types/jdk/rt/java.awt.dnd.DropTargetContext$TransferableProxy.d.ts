declare namespace java {
    namespace awt {
        namespace dnd {
            class DropTargetContext$TransferableProxy implements java.awt.datatransfer.Transferable {
                protected transferable: java.awt.datatransfer.Transferable
                protected isLocal: boolean
                public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}