declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicTextUI$TextTransferHandler extends javax.swing.TransferHandler implements javax.swing.plaf.UIResource {
                    protected getImportFlavor(arg0: java.awt.datatransfer.DataFlavor[], arg1: javax.swing.text.JTextComponent): java.awt.datatransfer.DataFlavor
                    protected handleReaderImport(arg0: java.io.Reader, arg1: javax.swing.text.JTextComponent, arg2: boolean): void
                    public getSourceActions(arg0: javax.swing.JComponent): int
                    protected createTransferable(arg0: javax.swing.JComponent): java.awt.datatransfer.Transferable
                    protected exportDone(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.Transferable, arg2: int): void
                    public importData(arg0: javax.swing.TransferHandler$TransferSupport): boolean
                    public importData(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.Transferable): boolean
                    public canImport(arg0: javax.swing.JComponent, arg1: java.awt.datatransfer.DataFlavor[]): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}