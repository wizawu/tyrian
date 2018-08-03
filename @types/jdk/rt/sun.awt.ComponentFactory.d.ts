declare namespace sun {
    namespace awt {
        interface ComponentFactory {
            createCanvas(arg0: java.awt.Canvas): java.awt.peer.CanvasPeer
            createPanel(arg0: java.awt.Panel): java.awt.peer.PanelPeer
            createWindow(arg0: java.awt.Window): java.awt.peer.WindowPeer
            createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
            createDialog(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
            createButton(arg0: java.awt.Button): java.awt.peer.ButtonPeer
            createTextField(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
            createChoice(arg0: java.awt.Choice): java.awt.peer.ChoicePeer
            createLabel(arg0: java.awt.Label): java.awt.peer.LabelPeer
            createList(arg0: java.awt.List): java.awt.peer.ListPeer
            createCheckbox(arg0: java.awt.Checkbox): java.awt.peer.CheckboxPeer
            createScrollbar(arg0: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer
            createScrollPane(arg0: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer
            createTextArea(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
            createFileDialog(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
            createMenuBar(arg0: java.awt.MenuBar): java.awt.peer.MenuBarPeer
            createMenu(arg0: java.awt.Menu): java.awt.peer.MenuPeer
            createPopupMenu(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
            createMenuItem(arg0: java.awt.MenuItem): java.awt.peer.MenuItemPeer
            createCheckboxMenuItem(arg0: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer
            createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            getFontPeer(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
            createRobot(arg0: java.awt.Robot, arg1: java.awt.GraphicsDevice): java.awt.peer.RobotPeer
            getDataTransferer(): sun.awt.datatransfer.DataTransferer
        }
    }
}