declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {

        class MultiFileChooserUI extends javax.swing.plaf.FileChooserUI {
          protected uis: java.util.Vector<javax.swing.plaf.ComponentUI>
          public constructor()
          public getUIs(): javax.swing.plaf.ComponentUI[]
          public getAcceptAllFileFilter(arg0: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
          public getFileView(arg0: javax.swing.JFileChooser): javax.swing.filechooser.FileView
          public getApproveButtonText(arg0: javax.swing.JFileChooser): java.lang.String
          public getDialogTitle(arg0: javax.swing.JFileChooser): java.lang.String
          public rescanCurrentDirectory(arg0: javax.swing.JFileChooser): void
          public ensureFileIsVisible(arg0: javax.swing.JFileChooser, arg1: java.io.File): void
          public contains(arg0: javax.swing.JComponent, arg1: int, arg2: int): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
          public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
        }

      }
    }
  }
}
