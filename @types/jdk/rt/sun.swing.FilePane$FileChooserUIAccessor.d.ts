declare namespace sun {
    namespace swing {
interface FilePane$FileChooserUIAccessor {
    getFileChooser(): javax.swing.JFileChooser
    getModel(): javax.swing.plaf.basic.BasicDirectoryModel
    createList(): javax.swing.JPanel
    createDetailsView(): javax.swing.JPanel
    isDirectorySelected(): boolean
    getDirectory(): java.io.File
    getApproveSelectionAction(): javax.swing.Action
    getChangeToParentDirectoryAction(): javax.swing.Action
    getNewFolderAction(): javax.swing.Action
    createDoubleClickListener(arg0: javax.swing.JList | javax.swing.JList$$Lambda): java.awt.event.MouseListener
    createListSelectionListener(): javax.swing.event.ListSelectionListener
}

    }
}