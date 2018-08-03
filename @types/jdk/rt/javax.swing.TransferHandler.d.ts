declare namespace javax {
    namespace swing {
        class TransferHandler implements java.io.Serializable {
            public static readonly NONE: int
            public static readonly COPY: int
            public static readonly MOVE: int
            public static readonly COPY_OR_MOVE: int
            public static readonly LINK: int
            public static getCutAction(): javax.swing.Action
            public static getCopyAction(): javax.swing.Action
            public static getPasteAction(): javax.swing.Action
            public constructor(arg0: java.lang.String | string)
            protected constructor()
            public setDragImage(arg0: java.awt.Image): void
            public getDragImage(): java.awt.Image
            public setDragImageOffset(arg0: java.awt.Point): void
            public getDragImageOffset(): java.awt.Point
            public exportAsDrag(arg0: javax.swing.JComponent, arg1: java.awt.event.InputEvent, arg2: int): void
            public exportToClipboard(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.Clipboard, arg2: int): void
            public importData(arg0: javax.swing.TransferHandler$TransferSupport): boolean
            public importData(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.Transferable): boolean
            public canImport(arg0: javax.swing.TransferHandler$TransferSupport): boolean
            public canImport(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.DataFlavor[]): boolean
            public getSourceActions(arg0: javax.swing.JComponent): int
            public getVisualRepresentation(arg0: java.awt.datatransfer.Transferable): javax.swing.Icon
            protected createTransferable(arg0: javax.swing.JComponent): java.awt.datatransfer.Transferable
            protected exportDone(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.Transferable, arg2: int): void
            public static class: java.lang.Class<any>
        }
    }
}