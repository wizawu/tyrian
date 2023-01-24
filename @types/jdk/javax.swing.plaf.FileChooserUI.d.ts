declare namespace javax {
  namespace swing {
    namespace plaf {
      abstract class FileChooserUI extends javax.swing.plaf.ComponentUI {
        public constructor()
        public abstract getAcceptAllFileFilter(arg0: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
        public abstract getFileView(arg0: javax.swing.JFileChooser): javax.swing.filechooser.FileView
        public abstract getApproveButtonText(arg0: javax.swing.JFileChooser): java.lang.String
        public abstract getDialogTitle(arg0: javax.swing.JFileChooser): java.lang.String
        public abstract rescanCurrentDirectory(arg0: javax.swing.JFileChooser): void
        public abstract ensureFileIsVisible(arg0: javax.swing.JFileChooser, arg1: java.io.File): void
        public getDefaultButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
      }
    }
  }
}
