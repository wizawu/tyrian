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
    protected saveButtonText: string
    protected openButtonText: string
    protected cancelButtonText: string
    protected updateButtonText: string
    protected helpButtonText: string
    protected directoryOpenButtonText: string
    protected saveButtonToolTipText: string
    protected openButtonToolTipText: string
    protected cancelButtonToolTipText: string
    protected updateButtonToolTipText: string
    protected helpButtonToolTipText: string
    protected directoryOpenButtonToolTipText: string
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public constructor(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda)
    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public installComponents(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    public uninstallComponents(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected installListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected uninstallListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected installDefaults(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected installIcons(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected installStrings(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected uninstallDefaults(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected uninstallIcons(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected uninstallStrings(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    protected createModel(): void
    public getModel(): javax.swing.plaf.basic.BasicDirectoryModel
    public createPropertyChangeListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): java.beans.PropertyChangeListener
    public getFileName(): string
    public getDirectoryName(): string
    public setFileName(arg0: java.lang.String | string): void
    public setDirectoryName(arg0: java.lang.String | string): void
    public rescanCurrentDirectory(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
    public ensureFileIsVisible(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: java.io.File): void
    public getFileChooser(): javax.swing.JFileChooser
    public getAccessoryPanel(): javax.swing.JPanel
    protected getApproveButton(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JButton
    public getDefaultButton(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JButton
    public getApproveButtonToolTipText(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
    public clearIconCache(): void
    protected createDoubleClickListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: javax.swing.JList | javax.swing.JList$$Lambda): java.awt.event.MouseListener
    public createListSelectionListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.event.ListSelectionListener
    protected isDirectorySelected(): boolean
    protected setDirectorySelected(arg0: boolean): void
    protected getDirectory(): java.io.File
    protected setDirectory(arg0: java.io.File): void
    public getAcceptAllFileFilter(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileFilter
    public getFileView(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileView
    public getDialogTitle(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
    public getApproveButtonMnemonic(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): int
    public getApproveButtonText(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): string
    public getNewFolderAction(): javax.swing.Action
    public getGoHomeAction(): javax.swing.Action
    public getChangeToParentDirectoryAction(): javax.swing.Action
    public getApproveSelectionAction(): javax.swing.Action
    public getCancelSelectionAction(): javax.swing.Action
    public getUpdateAction(): javax.swing.Action
    public static class: java.lang.Class<any>
}

            }
        }
    }
}