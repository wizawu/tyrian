declare namespace sun {
    namespace awt {
        namespace dnd {
            abstract class SunDropTargetContextPeer implements java.awt.dnd.peer.DropTargetContextPeer , java.awt.datatransfer.Transferable {
                public static DISPATCH_SYNC: boolean
                protected dropStatus: int
                protected dropComplete: boolean
                protected static _globalLock: java.lang.Object
                protected static currentJVMLocalSourceTransferable: java.awt.datatransfer.Transferable
                protected static STATUS_NONE: int
                protected static STATUS_WAIT: int
                protected static STATUS_ACCEPT: int
                protected static STATUS_REJECT: int
                public static setCurrentJVMLocalSourceTransferable(arg0: java.awt.datatransfer.Transferable): void
                public constructor()
                public getDropTarget(): java.awt.dnd.DropTarget
                public setTargetActions(arg0: int): void
                public getTargetActions(): int
                public getTransferable(): java.awt.datatransfer.Transferable
                public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                protected getNativeData(arg0: long): java.lang.Object
                public isTransferableJVMLocal(): boolean
                protected processEnterMessage(arg0: sun.awt.dnd.SunDropTargetEvent): void
                protected processExitMessage(arg0: sun.awt.dnd.SunDropTargetEvent): void
                protected processMotionMessage(arg0: sun.awt.dnd.SunDropTargetEvent, arg1: boolean): void
                protected processDropMessage(arg0: sun.awt.dnd.SunDropTargetEvent): void
                protected postDropTargetEvent(arg0: java.awt.Component, arg1: int, arg2: int, arg3: int, arg4: int, arg5: long[], arg6: long, arg7: int, arg8: boolean): int
                public acceptDrag(arg0: int): void
                public rejectDrag(): void
                public acceptDrop(arg0: int): void
                public rejectDrop(): void
                public dropComplete(arg0: boolean): void
                protected doDropDone(arg0: boolean, arg1: int, arg2: boolean): void
                protected getNativeDragContext(): long
                protected eventPosted(arg0: sun.awt.dnd.SunDropTargetEvent): void
                protected eventProcessed(arg0: sun.awt.dnd.SunDropTargetEvent, arg1: int, arg2: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}