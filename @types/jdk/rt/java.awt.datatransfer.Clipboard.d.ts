declare namespace java {
    namespace awt {
        namespace datatransfer {
            class Clipboard {
                protected owner: java.awt.datatransfer.ClipboardOwner
                protected contents: java.awt.datatransfer.Transferable
                public constructor(arg0: java.lang.String | string)
                public getName(): string
                public setContents(arg0: java.awt.datatransfer.Transferable, arg1: java.awt.datatransfer.ClipboardOwner | java.awt.datatransfer.ClipboardOwner$$Lambda): void
                public getContents(arg0: java.lang.Object): java.awt.datatransfer.Transferable
                public getAvailableDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorAvailable(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                public addFlavorListener(arg0: java.awt.datatransfer.FlavorListener): void
                public removeFlavorListener(arg0: java.awt.datatransfer.FlavorListener): void
                public getFlavorListeners(): java.awt.datatransfer.FlavorListener[]
                public static class: java.lang.Class<any>
            }
        }
    }
}