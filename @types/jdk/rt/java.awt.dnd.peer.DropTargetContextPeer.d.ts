declare namespace java {
    namespace awt {
        namespace dnd {
            namespace peer {
                interface DropTargetContextPeer {
                    setTargetActions(arg0: int): void
                    getTargetActions(): int
                    getDropTarget(): java.awt.dnd.DropTarget
                    getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                    getTransferable(): java.awt.datatransfer.Transferable
                    isTransferableJVMLocal(): boolean
                    acceptDrag(arg0: int): void
                    rejectDrag(): void
                    acceptDrop(arg0: int): void
                    rejectDrop(): void
                    dropComplete(arg0: boolean): void
                }
            }
        }
    }
}