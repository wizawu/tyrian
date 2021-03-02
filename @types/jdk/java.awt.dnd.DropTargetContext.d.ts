declare namespace java {
  namespace awt {
    namespace dnd {

      class DropTargetContext implements java.io.Serializable {
        constructor(arg0: java.awt.dnd.DropTarget)
        public getDropTarget(): java.awt.dnd.DropTarget
        public getComponent(): java.awt.Component
        reset(): void
        protected setTargetActions(arg0: int): void
        protected getTargetActions(): int
        public dropComplete(arg0: boolean): void
        protected acceptDrag(arg0: int): void
        protected rejectDrag(): void
        protected acceptDrop(arg0: int): void
        protected rejectDrop(): void
        protected getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[]
        protected getCurrentDataFlavorsAsList(): java.util.List<java.awt.datatransfer.DataFlavor>
        protected isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
        protected getTransferable(): java.awt.datatransfer.Transferable
        getDropTargetContextPeer(): java.awt.dnd.peer.DropTargetContextPeer
        setDropTargetContextPeer(arg0: java.awt.dnd.peer.DropTargetContextPeer): void
        protected createTransferableProxy(arg0: java.awt.datatransfer.Transferable, arg1: boolean): java.awt.datatransfer.Transferable
      }

    }
  }
}
