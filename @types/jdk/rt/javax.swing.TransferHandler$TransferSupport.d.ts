declare namespace javax {
    namespace swing {
class TransferHandler$TransferSupport {
    public constructor(arg0: java.awt.Component, arg1: java.awt.datatransfer.Transferable)
    public isDrop(): boolean
    public getComponent(): java.awt.Component
    public getDropLocation(): javax.swing.TransferHandler$DropLocation
    public setShowDropLocation(arg0: boolean): void
    public setDropAction(arg0: int): void
    public getDropAction(): int
    public getUserDropAction(): int
    public getSourceDropActions(): int
    public getDataFlavors(): java.awt.datatransfer.DataFlavor[]
    public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
    public getTransferable(): java.awt.datatransfer.Transferable
    public static class: java.lang.Class<any>
}

    }
}