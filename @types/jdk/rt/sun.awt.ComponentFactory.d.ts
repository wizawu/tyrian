declare namespace sun {
    namespace awt {
        interface ComponentFactory {
            createCanvas(arg0: java.awt.Canvas | java.awt.Canvas$$Lambda): java.awt.peer.CanvasPeer
            createPanel(arg0: java.awt.Panel | java.awt.Panel$$Lambda): java.awt.peer.PanelPeer
            createWindow(arg0: java.awt.Window | java.awt.Window$$Lambda): java.awt.peer.WindowPeer
            createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
            createDialog(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
            createButton(arg0: java.awt.Button | java.awt.Button$$Lambda): java.awt.peer.ButtonPeer
            createTextField(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
            createChoice(arg0: java.awt.Choice | java.awt.Choice$$Lambda): java.awt.peer.ChoicePeer
            createLabel(arg0: java.awt.Label | java.awt.Label$$Lambda): java.awt.peer.LabelPeer
            createList(arg0: java.awt.List | java.awt.List$$Lambda): java.awt.peer.ListPeer
            createCheckbox(arg0: java.awt.Checkbox | java.awt.Checkbox$$Lambda): java.awt.peer.CheckboxPeer
            createScrollbar(arg0: java.awt.Scrollbar | java.awt.Scrollbar$$Lambda): java.awt.peer.ScrollbarPeer
            createScrollPane(arg0: java.awt.ScrollPane | java.awt.ScrollPane$$Lambda): java.awt.peer.ScrollPanePeer
            createTextArea(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
            createFileDialog(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
            createMenuBar(arg0: java.awt.MenuBar | java.awt.MenuBar$$Lambda): java.awt.peer.MenuBarPeer
            createMenu(arg0: java.awt.Menu | java.awt.Menu$$Lambda): java.awt.peer.MenuPeer
            createPopupMenu(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
            createMenuItem(arg0: java.awt.MenuItem | java.awt.MenuItem$$Lambda): java.awt.peer.MenuItemPeer
            createCheckboxMenuItem(arg0: java.awt.CheckboxMenuItem | java.awt.CheckboxMenuItem$$Lambda): java.awt.peer.CheckboxMenuItemPeer
            createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            getFontPeer(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
            createRobot(arg0: java.awt.Robot, arg1: java.awt.GraphicsDevice): java.awt.peer.RobotPeer
            getDataTransferer(): sun.awt.datatransfer.DataTransferer
        }
    }
}