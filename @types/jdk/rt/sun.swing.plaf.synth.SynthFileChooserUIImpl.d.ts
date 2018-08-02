declare namespace sun {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthFileChooserUIImpl extends sun.swing.plaf.synth.SynthFileChooserUI {
                    public constructor(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda)
                    protected installDefaults(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    public installComponents(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    protected installListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    protected uninstallListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected installStrings(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    public getFileName(): string
                    public setFileName(arg0: java.lang.String | string): void
                    public rescanCurrentDirectory(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                    protected doSelectedFileChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doSelectedFilesChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doDirectoryChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doFileSelectionModeChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doAccessoryChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doControlButtonsChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected addControlButtons(): void
                    protected removeControlButtons(): void
                    protected createActionMap(): javax.swing.ActionMap
                    protected getDirectoryComboBox(): javax.swing.JComponent
                    protected getDirectoryComboBoxAction(): javax.swing.Action
                    protected createDirectoryComboBoxRenderer(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): sun.swing.plaf.synth.SynthFileChooserUIImpl$DirectoryComboBoxRenderer
                    protected createDirectoryComboBoxModel(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): sun.swing.plaf.synth.SynthFileChooserUIImpl$DirectoryComboBoxModel
                    protected createFilterComboBoxRenderer(): sun.swing.plaf.synth.SynthFileChooserUIImpl$FilterComboBoxRenderer
                    protected createFilterComboBoxModel(): sun.swing.plaf.synth.SynthFileChooserUIImpl$FilterComboBoxModel
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}