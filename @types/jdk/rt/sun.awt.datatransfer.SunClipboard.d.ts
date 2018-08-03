declare namespace sun {
    namespace awt {
        namespace datatransfer {
            abstract class SunClipboard extends java.awt.datatransfer.Clipboard implements java.beans.PropertyChangeListener {
                public constructor(arg0: java.lang.String | string)
                public setContents(arg0: java.awt.datatransfer.Transferable, arg1: java.awt.datatransfer.ClipboardOwner | java.awt.datatransfer.ClipboardOwner$$Lambda): void
                public getContents(arg0: java.lang.Object): java.awt.datatransfer.Transferable
                protected getContextContents(): java.awt.datatransfer.Transferable
                public getAvailableDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorAvailable(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                protected createLocaleTransferable(arg0: long[]): java.awt.datatransfer.Transferable
                public openClipboard(arg0: sun.awt.datatransfer.SunClipboard): void
                public closeClipboard(): void
                public getID(): long
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                protected lostOwnershipImpl(): void
                protected lostOwnershipLater(arg0: sun.awt.AppContext): void
                protected lostOwnershipNow(arg0: sun.awt.AppContext): void
                protected clearNativeContext(): void
                protected setContentsNative(arg0: java.awt.datatransfer.Transferable): void
                protected getClipboardFormatsOpenClose(): long[]
                protected getClipboardFormats(): long[]
                protected getClipboardData(arg0: long): byte[]
                public addFlavorListener(arg0: java.awt.datatransfer.FlavorListener | java.awt.datatransfer.FlavorListener$$Lambda): void
                public removeFlavorListener(arg0: java.awt.datatransfer.FlavorListener | java.awt.datatransfer.FlavorListener$$Lambda): void
                public getFlavorListeners(): java.awt.datatransfer.FlavorListener[]
                public areFlavorListenersRegistered(): boolean
                protected registerClipboardViewerChecked(): void
                protected unregisterClipboardViewerChecked(): void
                protected checkChange(arg0: long[]): void
                public static getDefaultFlavorTable(): java.awt.datatransfer.FlavorTable
                public static class: java.lang.Class<any>
            }
        }
    }
}