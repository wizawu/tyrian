declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalFileChooserUI extends javax.swing.plaf.basic.BasicFileChooserUI {
          static readonly space: int
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor(arg0: javax.swing.JFileChooser)
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallComponents(arg0: javax.swing.JFileChooser): void
          public installComponents(arg0: javax.swing.JFileChooser): void
          protected getButtonPanel(): javax.swing.JPanel
          protected getBottomPanel(): javax.swing.JPanel
          protected installStrings(arg0: javax.swing.JFileChooser): void
          protected installListeners(arg0: javax.swing.JFileChooser): void
          protected getActionMap(): javax.swing.ActionMap
          protected createActionMap(): javax.swing.ActionMap
          protected createList(arg0: javax.swing.JFileChooser): javax.swing.JPanel
          protected createDetailsView(arg0: javax.swing.JFileChooser): javax.swing.JPanel
          public createListSelectionListener(arg0: javax.swing.JFileChooser): javax.swing.event.ListSelectionListener
          public uninstallUI(arg0: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public createPropertyChangeListener(arg0: javax.swing.JFileChooser): java.beans.PropertyChangeListener
          protected removeControlButtons(): void
          protected addControlButtons(): void
          public ensureFileIsVisible(arg0: javax.swing.JFileChooser, arg1: java.io.File): void
          public rescanCurrentDirectory(arg0: javax.swing.JFileChooser): void
          public getFileName(): java.lang.String
          public setFileName(arg0: java.lang.String | string): void
          protected setDirectorySelected(arg0: boolean | java.lang.Boolean): void
          public getDirectoryName(): java.lang.String
          public setDirectoryName(arg0: java.lang.String | string): void
          protected createDirectoryComboBoxModel(
            arg0: javax.swing.JFileChooser
          ): javax.swing.plaf.metal.MetalFileChooserUI$DirectoryComboBoxModel
          protected createFilterComboBoxRenderer(): javax.swing.plaf.metal.MetalFileChooserUI$FilterComboBoxRenderer
          protected createFilterComboBoxModel(): javax.swing.plaf.metal.MetalFileChooserUI$FilterComboBoxModel
          public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
          protected getApproveButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
          static access$000(arg0: javax.swing.plaf.metal.MetalFileChooserUI): boolean
          static access$100(arg0: javax.swing.plaf.metal.MetalFileChooserUI): java.io.File
          static access$200(
            arg0: javax.swing.plaf.metal.MetalFileChooserUI,
            arg1: javax.swing.JFileChooser,
            arg2: javax.swing.JList
          ): java.awt.event.MouseListener
        }
      }
    }
  }
}
