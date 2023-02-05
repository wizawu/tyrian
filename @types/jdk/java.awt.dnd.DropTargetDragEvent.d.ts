declare namespace java {
  namespace awt {
    namespace dnd {
      class DropTargetDragEvent extends java.awt.dnd.DropTargetEvent {
        public constructor(
          arg0: java.awt.dnd.DropTargetContext,
          arg1: java.awt.Point,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public getLocation(): java.awt.Point
        public getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[]
        public getCurrentDataFlavorsAsList(): java.util.List<java.awt.datatransfer.DataFlavor>
        public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
        public getSourceActions(): number
        public getDropAction(): number
        public getTransferable(): java.awt.datatransfer.Transferable
        public acceptDrag(arg0: number | java.lang.Integer): void
        public rejectDrag(): void
      }
    }
  }
}
