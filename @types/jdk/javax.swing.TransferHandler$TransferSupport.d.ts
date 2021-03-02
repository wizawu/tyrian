declare namespace javax {
  namespace swing {

    class TransferHandler$TransferSupport {
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.awt.Component, arg1: java.awt.datatransfer.Transferable)
      public isDrop(): boolean
      public getComponent(): java.awt.Component
      public getDropLocation(): javax.swing.TransferHandler$DropLocation
      public setShowDropLocation(arg0: boolean | java.lang.Boolean): void
      public setDropAction(arg0: number | java.lang.Integer): void
      public getDropAction(): number
      public getUserDropAction(): number
      public getSourceDropActions(): number
      public getDataFlavors(): java.awt.datatransfer.DataFlavor[]
      public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
      public getTransferable(): java.awt.datatransfer.Transferable
    }

  }
}
