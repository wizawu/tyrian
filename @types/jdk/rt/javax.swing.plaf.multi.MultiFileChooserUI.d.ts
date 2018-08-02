declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                class MultiFileChooserUI extends javax.swing.plaf.FileChooserUI {
                    protected uis: java.util.Vector
                    public constructor()
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    public getAcceptAllFileFilter(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileFilter
                    public getFileView(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileView
                    public getApproveButtonText(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
                    public getDialogTitle(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
                    public rescanCurrentDirectory(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    public ensureFileIsVisible(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: java.io.File): void
                    public contains(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): boolean
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getAccessibleChildrenCount(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): int
                    public getAccessibleChild(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int): javax.accessibility.Accessible
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}