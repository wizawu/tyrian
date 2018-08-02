declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                class MetalFileChooserUI extends javax.swing.plaf.basic.BasicFileChooserUI {
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public constructor(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda)
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallComponents(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    public installComponents(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    protected getButtonPanel(): javax.swing.JPanel
                    protected getBottomPanel(): javax.swing.JPanel
                    protected installStrings(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    protected installListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    protected getActionMap(): javax.swing.ActionMap
                    protected createActionMap(): javax.swing.ActionMap
                    protected createList(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JPanel
                    protected createDetailsView(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JPanel
                    public createListSelectionListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.event.ListSelectionListener
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public createPropertyChangeListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): java.beans.PropertyChangeListener
                    protected removeControlButtons(): void
                    protected addControlButtons(): void
                    public ensureFileIsVisible(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: java.io.File): void
                    public rescanCurrentDirectory(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    public getFileName(): string
                    public setFileName(arg0: java.lang.String | string): void
                    protected setDirectorySelected(arg0: boolean): void
                    public getDirectoryName(): string
                    public setDirectoryName(arg0: java.lang.String | string): void
                    protected createDirectoryComboBoxRenderer(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.plaf.metal.MetalFileChooserUI$DirectoryComboBoxRenderer
                    protected createDirectoryComboBoxModel(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.plaf.metal.MetalFileChooserUI$DirectoryComboBoxModel
                    protected createFilterComboBoxRenderer(): javax.swing.plaf.metal.MetalFileChooserUI$FilterComboBoxRenderer
                    protected createFilterComboBoxModel(): javax.swing.plaf.metal.MetalFileChooserUI$FilterComboBoxModel
                    public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
                    protected getApproveButton(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JButton
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}