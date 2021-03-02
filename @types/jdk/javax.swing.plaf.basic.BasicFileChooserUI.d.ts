declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicFileChooserUI extends javax.swing.plaf.FileChooserUI {
          protected directoryIcon: javax.swing.Icon
          protected fileIcon: javax.swing.Icon
          protected computerIcon: javax.swing.Icon
          protected hardDriveIcon: javax.swing.Icon
          protected floppyDriveIcon: javax.swing.Icon
          protected newFolderIcon: javax.swing.Icon
          protected upFolderIcon: javax.swing.Icon
          protected homeFolderIcon: javax.swing.Icon
          protected listViewIcon: javax.swing.Icon
          protected detailsViewIcon: javax.swing.Icon
          protected viewMenuIcon: javax.swing.Icon
          protected saveButtonMnemonic: int
          protected openButtonMnemonic: int
          protected cancelButtonMnemonic: int
          protected updateButtonMnemonic: int
          protected helpButtonMnemonic: int
          protected directoryOpenButtonMnemonic: int
          protected saveButtonText: java.lang.String
          protected openButtonText: java.lang.String
          protected cancelButtonText: java.lang.String
          protected updateButtonText: java.lang.String
          protected helpButtonText: java.lang.String
          protected directoryOpenButtonText: java.lang.String
          protected saveButtonToolTipText: java.lang.String
          protected openButtonToolTipText: java.lang.String
          protected cancelButtonToolTipText: java.lang.String
          protected updateButtonToolTipText: java.lang.String
          protected helpButtonToolTipText: java.lang.String
          protected directoryOpenButtonToolTipText: java.lang.String
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor(arg0: javax.swing.JFileChooser)
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public installComponents(arg0: javax.swing.JFileChooser): void
          public uninstallComponents(arg0: javax.swing.JFileChooser): void
          protected installListeners(arg0: javax.swing.JFileChooser): void
          getInputMap(arg0: int): javax.swing.InputMap
          getActionMap(): javax.swing.ActionMap
          createActionMap(): javax.swing.ActionMap
          protected uninstallListeners(arg0: javax.swing.JFileChooser): void
          protected installDefaults(arg0: javax.swing.JFileChooser): void
          protected installIcons(arg0: javax.swing.JFileChooser): void
          protected installStrings(arg0: javax.swing.JFileChooser): void
          protected uninstallDefaults(arg0: javax.swing.JFileChooser): void
          protected uninstallIcons(arg0: javax.swing.JFileChooser): void
          protected uninstallStrings(arg0: javax.swing.JFileChooser): void
          protected createModel(): void
          public getModel(): javax.swing.plaf.basic.BasicDirectoryModel
          public createPropertyChangeListener(arg0: javax.swing.JFileChooser): java.beans.PropertyChangeListener
          public getFileName(): java.lang.String
          public getDirectoryName(): java.lang.String
          public setFileName(arg0: java.lang.String): void
          public setDirectoryName(arg0: java.lang.String): void
          public rescanCurrentDirectory(arg0: javax.swing.JFileChooser): void
          public ensureFileIsVisible(arg0: javax.swing.JFileChooser, arg1: java.io.File): void
          public getFileChooser(): javax.swing.JFileChooser
          public getAccessoryPanel(): javax.swing.JPanel
          protected getApproveButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
          public getDefaultButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
          public getApproveButtonToolTipText(arg0: javax.swing.JFileChooser): java.lang.String
          public clearIconCache(): void
          protected createDoubleClickListener(arg0: javax.swing.JFileChooser, arg1: javax.swing.JList<unknown>): java.awt.event.MouseListener
          public createListSelectionListener(arg0: javax.swing.JFileChooser): javax.swing.event.ListSelectionListener
          protected isDirectorySelected(): boolean
          protected setDirectorySelected(arg0: boolean): void
          protected getDirectory(): java.io.File
          protected setDirectory(arg0: java.io.File): void
          public getAcceptAllFileFilter(arg0: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
          public getFileView(arg0: javax.swing.JFileChooser): javax.swing.filechooser.FileView
          public getDialogTitle(arg0: javax.swing.JFileChooser): java.lang.String
          public getApproveButtonMnemonic(arg0: javax.swing.JFileChooser): int
          public getApproveButtonText(arg0: javax.swing.JFileChooser): java.lang.String
          public getNewFolderAction(): javax.swing.Action
          public getGoHomeAction(): javax.swing.Action
          public getChangeToParentDirectoryAction(): javax.swing.Action
          public getApproveSelectionAction(): javax.swing.Action
          public getCancelSelectionAction(): javax.swing.Action
          public getUpdateAction(): javax.swing.Action
        }

      }
    }
  }
}
