declare namespace sun {
    namespace swing {
        class FilePane extends javax.swing.JPanel implements java.beans.PropertyChangeListener {
            public static ACTION_APPROVE_SELECTION: string
            public static ACTION_CANCEL: string
            public static ACTION_EDIT_FILE_NAME: string
            public static ACTION_REFRESH: string
            public static ACTION_CHANGE_TO_PARENT_DIRECTORY: string
            public static ACTION_NEW_FOLDER: string
            public static ACTION_VIEW_LIST: string
            public static ACTION_VIEW_DETAILS: string
            public static VIEWTYPE_LIST: int
            public static VIEWTYPE_DETAILS: int
            protected newFolderAction: javax.swing.Action
            public constructor(arg0: sun.swing.FilePane$FileChooserUIAccessor)
            public uninstallUI(): void
            protected getFileChooser(): javax.swing.JFileChooser
            protected getModel(): javax.swing.plaf.basic.BasicDirectoryModel
            public getViewType(): int
            public setViewType(arg0: int): void
            public getViewTypeAction(arg0: int): javax.swing.Action
            protected installDefaults(): void
            public getActions(): javax.swing.Action[]
            protected createActionMap(): void
            public static addActionsToMap(arg0: javax.swing.ActionMap, arg1: javax.swing.Action[]): void
            public createList(): javax.swing.JPanel
            public createDetailsView(): javax.swing.JPanel
            public createListSelectionListener(): javax.swing.event.ListSelectionListener
            public getNewFolderAction(): javax.swing.Action
            public propertyChange(arg0: java.beans.PropertyChangeEvent): void
            public ensureFileIsVisible(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda, arg1: java.io.File): void
            public rescanCurrentDirectory(): void
            public clearSelection(): void
            public getViewMenu(): javax.swing.JMenu
            public getComponentPopupMenu(): javax.swing.JPopupMenu
            protected getMouseHandler(): sun.swing.FilePane$Handler
            protected isDirectorySelected(): boolean
            protected getDirectory(): java.io.File
            public canWrite(arg0: java.io.File): boolean
            public static usesShellFolder(arg0: javax.swing.JFileChooser | javax.swing.JFileChooser$$Lambda): boolean
            public static class: java.lang.Class<any>
        }
    }
}