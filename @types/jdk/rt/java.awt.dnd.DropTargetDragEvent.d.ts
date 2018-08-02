declare namespace java {
    namespace awt {
        namespace dnd {
            class DropTargetDragEvent extends java.awt.dnd.DropTargetEvent {
                public constructor(arg0: java.awt.dnd.DropTargetContext, arg1: java.awt.Point, arg2: int, arg3: int)
                public getLocation(): java.awt.Point
                public getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public getCurrentDataFlavorsAsList(): java.util.List<java.awt.datatransfer.DataFlavor>
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getSourceActions(): int
                public getDropAction(): int
                public getTransferable(): java.awt.datatransfer.Transferable
                public acceptDrag(arg0: int): void
                public rejectDrag(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}