declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace gtk {
                        class GTKFileChooserUI extends sun.swing.plaf.synth.SynthFileChooserUI {
                            public constructor(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda)
                            protected createActionMap(): javax.swing.ActionMap
                            public getFileName(): string
                            public setFileName(arg0: java.lang.String | string): void
                            public setDirectoryName(arg0: java.lang.String | string): void
                            public ensureFileIsVisible(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: java.io.File): void
                            public rescanCurrentDirectory(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            public getAccessoryPanel(): javax.swing.JPanel
                            public getFileView(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.filechooser.FileView
                            protected doSelectedFileChanged(arg0: java.beans.PropertyChangeEvent): void
                            protected doDirectoryChanged(arg0: java.beans.PropertyChangeEvent): void
                            protected doAccessoryChanged(arg0: java.beans.PropertyChangeEvent): void
                            protected doFileSelectionModeChanged(arg0: java.beans.PropertyChangeEvent): void
                            protected doMultiSelectionChanged(arg0: java.beans.PropertyChangeEvent): void
                            protected doControlButtonsChanged(arg0: java.beans.PropertyChangeEvent): void
                            protected doAncestorChanged(arg0: java.beans.PropertyChangeEvent): void
                            public createListSelectionListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): javax.swing.event.ListSelectionListener
                            protected createDoubleClickListener(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: javax.swing.JList | javax.swing.JList$$Lambda): java.awt.event.MouseListener
                            public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                            public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                            public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                            public installComponents(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected installListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected uninstallListeners(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected installDefaults(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected installIcons(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected installStrings(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected uninstallStrings(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): void
                            protected createFilesList(): javax.swing.JScrollPane
                            protected createDirectoryList(): javax.swing.JScrollPane
                            protected createModel(): void
                            public getModel(): javax.swing.plaf.basic.BasicDirectoryModel
                            public getApproveSelectionAction(): javax.swing.Action
                            public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                            public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                            public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                            protected align(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                            public getNewFolderAction(): javax.swing.Action
                            protected createDirectoryComboBoxModel(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): com.sun.java.swing.plaf.gtk.GTKFileChooserUI$DirectoryComboBoxModel
                            protected createFilterComboBoxRenderer(): com.sun.java.swing.plaf.gtk.GTKFileChooserUI$FilterComboBoxRenderer
                            protected createFilterComboBoxModel(): com.sun.java.swing.plaf.gtk.GTKFileChooserUI$FilterComboBoxModel
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}