declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace windows {
                        class WindowsFileChooserUI extends javax.swing.plaf.basic.BasicFileChooserUI {
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
                            protected createDirectoryComboBoxRenderer(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): com.sun.java.swing.plaf.windows.WindowsFileChooserUI$DirectoryComboBoxRenderer
                            protected createDirectoryComboBoxModel(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): com.sun.java.swing.plaf.windows.WindowsFileChooserUI$DirectoryComboBoxModel
                            protected createFilterComboBoxRenderer(): com.sun.java.swing.plaf.windows.WindowsFileChooserUI$FilterComboBoxRenderer
                            protected createFilterComboBoxModel(): com.sun.java.swing.plaf.windows.WindowsFileChooserUI$FilterComboBoxModel
                            public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
                            protected getApproveButton(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.JButton
                            public getFileView(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileView
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}