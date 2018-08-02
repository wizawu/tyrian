declare namespace java {
    namespace awt {
        namespace dnd {
            class DropTargetDropEvent extends java.awt.dnd.DropTargetEvent {
                public constructor(arg0: java.awt.dnd.DropTargetContext, arg1: java.awt.Point, arg2: int, arg3: int)
                public constructor(arg0: java.awt.dnd.DropTargetContext, arg1: java.awt.Point, arg2: int, arg3: int, arg4: boolean)
                public getLocation(): java.awt.Point
                public getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public getCurrentDataFlavorsAsList(): java.util.List<java.awt.datatransfer.DataFlavor>
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getSourceActions(): int
                public getDropAction(): int
                public getTransferable(): java.awt.datatransfer.Transferable
                public acceptDrop(arg0: int): void
                public rejectDrop(): void
                public dropComplete(arg0: boolean): void
                public isLocalTransfer(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}