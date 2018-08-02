declare namespace javax {
    namespace swing {
        namespace plaf {
            abstract class FileChooserUI extends javax.swing.plaf.ComponentUI {
                public constructor()
                public getAcceptAllFileFilter(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileFilter
                public getFileView(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileView
                public getApproveButtonText(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
                public getDialogTitle(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
                public rescanCurrentDirectory(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                public ensureFileIsVisible(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: java.io.File): void
                public getDefaultButton(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JButton
                public static class: java.lang.Class<any>
            }
        }
    }
}