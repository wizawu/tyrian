declare namespace javax {
    namespace swing {
        class JFileChooser extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static OPEN_DIALOG: int
            public static SAVE_DIALOG: int
            public static CUSTOM_DIALOG: int
            public static CANCEL_OPTION: int
            public static APPROVE_OPTION: int
            public static ERROR_OPTION: int
            public static FILES_ONLY: int
            public static DIRECTORIES_ONLY: int
            public static FILES_AND_DIRECTORIES: int
            public static CANCEL_SELECTION: string
            public static APPROVE_SELECTION: string
            public static APPROVE_BUTTON_TEXT_CHANGED_PROPERTY: string
            public static APPROVE_BUTTON_TOOL_TIP_TEXT_CHANGED_PROPERTY: string
            public static APPROVE_BUTTON_MNEMONIC_CHANGED_PROPERTY: string
            public static CONTROL_BUTTONS_ARE_SHOWN_CHANGED_PROPERTY: string
            public static DIRECTORY_CHANGED_PROPERTY: string
            public static SELECTED_FILE_CHANGED_PROPERTY: string
            public static SELECTED_FILES_CHANGED_PROPERTY: string
            public static MULTI_SELECTION_ENABLED_CHANGED_PROPERTY: string
            public static FILE_SYSTEM_VIEW_CHANGED_PROPERTY: string
            public static FILE_VIEW_CHANGED_PROPERTY: string
            public static FILE_HIDING_CHANGED_PROPERTY: string
            public static FILE_FILTER_CHANGED_PROPERTY: string
            public static FILE_SELECTION_MODE_CHANGED_PROPERTY: string
            public static ACCESSORY_CHANGED_PROPERTY: string
            public static ACCEPT_ALL_FILE_FILTER_USED_CHANGED_PROPERTY: string
            public static DIALOG_TITLE_CHANGED_PROPERTY: string
            public static DIALOG_TYPE_CHANGED_PROPERTY: string
            public static CHOOSABLE_FILE_FILTER_CHANGED_PROPERTY: string
            protected accessibleContext: javax.accessibility.AccessibleContext
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.io.File)
            public constructor(arg0: javax.swing.filechooser.FileSystemView)
            public constructor(arg0: java.io.File, arg1: javax.swing.filechooser.FileSystemView)
            public constructor(arg0: java.lang.String | string, arg1: javax.swing.filechooser.FileSystemView)
            protected setup(arg0: javax.swing.filechooser.FileSystemView): void
            public setDragEnabled(arg0: boolean): void
            public getDragEnabled(): boolean
            public getSelectedFile(): java.io.File
            public setSelectedFile(arg0: java.io.File): void
            public getSelectedFiles(): java.io.File[]
            public setSelectedFiles(arg0: java.io.File[]): void
            public getCurrentDirectory(): java.io.File
            public setCurrentDirectory(arg0: java.io.File): void
            public changeToParentDirectory(): void
            public rescanCurrentDirectory(): void
            public ensureFileIsVisible(arg0: java.io.File): void
            public showOpenDialog(arg0: java.awt.Component): int
            public showSaveDialog(arg0: java.awt.Component): int
            public showDialog(arg0: java.awt.Component, arg1: java.lang.String | string): int
            protected createDialog(arg0: java.awt.Component): javax.swing.JDialog
            public getControlButtonsAreShown(): boolean
            public setControlButtonsAreShown(arg0: boolean): void
            public getDialogType(): int
            public setDialogType(arg0: int): void
            public setDialogTitle(arg0: java.lang.String | string): void
            public getDialogTitle(): string
            public setApproveButtonToolTipText(arg0: java.lang.String | string): void
            public getApproveButtonToolTipText(): string
            public getApproveButtonMnemonic(): int
            public setApproveButtonMnemonic(arg0: int): void
            public setApproveButtonMnemonic(arg0: char): void
            public setApproveButtonText(arg0: java.lang.String | string): void
            public getApproveButtonText(): string
            public getChoosableFileFilters(): javax.swing.filechooser.FileFilter[]
            public addChoosableFileFilter(arg0: javax.swing.filechooser.FileFilter): void
            public removeChoosableFileFilter(arg0: javax.swing.filechooser.FileFilter): boolean
            public resetChoosableFileFilters(): void
            public getAcceptAllFileFilter(): javax.swing.filechooser.FileFilter
            public isAcceptAllFileFilterUsed(): boolean
            public setAcceptAllFileFilterUsed(arg0: boolean): void
            public getAccessory(): javax.swing.JComponent
            public setAccessory(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            public setFileSelectionMode(arg0: int): void
            public getFileSelectionMode(): int
            public isFileSelectionEnabled(): boolean
            public isDirectorySelectionEnabled(): boolean
            public setMultiSelectionEnabled(arg0: boolean): void
            public isMultiSelectionEnabled(): boolean
            public isFileHidingEnabled(): boolean
            public setFileHidingEnabled(arg0: boolean): void
            public setFileFilter(arg0: javax.swing.filechooser.FileFilter): void
            public getFileFilter(): javax.swing.filechooser.FileFilter
            public setFileView(arg0: javax.swing.filechooser.FileView): void
            public getFileView(): javax.swing.filechooser.FileView
            public getName(arg0: java.io.File): string
            public getDescription(arg0: java.io.File): string
            public getTypeDescription(arg0: java.io.File): string
            public getIcon(arg0: java.io.File): javax.swing.Icon
            public isTraversable(arg0: java.io.File): boolean
            public accept(arg0: java.io.File): boolean
            public setFileSystemView(arg0: javax.swing.filechooser.FileSystemView): void
            public getFileSystemView(): javax.swing.filechooser.FileSystemView
            public approveSelection(): void
            public cancelSelection(): void
            public addActionListener(arg0: java.awt.event.ActionListener): void
            public removeActionListener(arg0: java.awt.event.ActionListener): void
            public getActionListeners(): java.awt.event.ActionListener[]
            protected fireActionPerformed(arg0: java.lang.String | string): void
            public updateUI(): void
            public getUIClassID(): string
            public getUI(): javax.swing.plaf.FileChooserUI
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class JFileChooser$$Lambda extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static OPEN_DIALOG: int
        }
    }
}