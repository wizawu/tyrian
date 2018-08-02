declare namespace com {
    namespace sun {
        namespace java {
            namespace accessibility {
                namespace util {
class SwingEventMonitor$SwingEventListener extends com.sun.java.accessibility.util.AWTEventMonitor$AWTEventsListener implements javax.swing.event.AncestorListener , javax.swing.event.CaretListener , javax.swing.event.CellEditorListener , javax.swing.event.ChangeListener , javax.swing.event.DocumentListener , javax.swing.event.ListDataListener , javax.swing.event.ListSelectionListener , javax.swing.event.MenuListener , javax.swing.event.PopupMenuListener , javax.swing.event.TableColumnModelListener , javax.swing.event.TableModelListener , javax.swing.event.TreeExpansionListener , javax.swing.event.TreeModelListener , javax.swing.event.TreeSelectionListener , javax.swing.event.UndoableEditListener , javax.swing.event.InternalFrameListener , java.beans.PropertyChangeListener , java.beans.VetoableChangeListener {
    public constructor()
    protected installListeners(arg0: java.awt.Component): void
    protected installListeners(arg0: java.awt.Component, arg1: int): void
    protected removeListeners(arg0: java.awt.Component): void
    protected removeListeners(arg0: java.awt.Component, arg1: int): void
    public componentAdded(arg0: java.awt.event.ContainerEvent): void
    public componentRemoved(arg0: java.awt.event.ContainerEvent): void
    public ancestorAdded(arg0: javax.swing.event.AncestorEvent): void
    public ancestorRemoved(arg0: javax.swing.event.AncestorEvent): void
    public ancestorMoved(arg0: javax.swing.event.AncestorEvent): void
    public caretUpdate(arg0: javax.swing.event.CaretEvent): void
    public editingStopped(arg0: javax.swing.event.ChangeEvent): void
    public editingCanceled(arg0: javax.swing.event.ChangeEvent): void
    public stateChanged(arg0: javax.swing.event.ChangeEvent): void
    public columnAdded(arg0: javax.swing.event.TableColumnModelEvent): void
    public columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
    public columnMoved(arg0: javax.swing.event.TableColumnModelEvent): void
    public columnRemoved(arg0: javax.swing.event.TableColumnModelEvent): void
    public columnSelectionChanged(arg0: javax.swing.event.ListSelectionEvent): void
    public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
    public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
    public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
    public contentsChanged(arg0: javax.swing.event.ListDataEvent): void
    public intervalAdded(arg0: javax.swing.event.ListDataEvent): void
    public intervalRemoved(arg0: javax.swing.event.ListDataEvent): void
    public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
    public menuCanceled(arg0: javax.swing.event.MenuEvent): void
    public menuDeselected(arg0: javax.swing.event.MenuEvent): void
    public menuSelected(arg0: javax.swing.event.MenuEvent): void
    public popupMenuWillBecomeVisible(arg0: javax.swing.event.PopupMenuEvent): void
    public popupMenuWillBecomeInvisible(arg0: javax.swing.event.PopupMenuEvent): void
    public popupMenuCanceled(arg0: javax.swing.event.PopupMenuEvent): void
    public tableChanged(arg0: javax.swing.event.TableModelEvent): void
    public treeCollapsed(arg0: javax.swing.event.TreeExpansionEvent): void
    public treeExpanded(arg0: javax.swing.event.TreeExpansionEvent): void
    public treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
    public treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
    public treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
    public treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
    public valueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
    public undoableEditHappened(arg0: javax.swing.event.UndoableEditEvent): void
    public internalFrameOpened(arg0: javax.swing.event.InternalFrameEvent): void
    public internalFrameActivated(arg0: javax.swing.event.InternalFrameEvent): void
    public internalFrameDeactivated(arg0: javax.swing.event.InternalFrameEvent): void
    public internalFrameIconified(arg0: javax.swing.event.InternalFrameEvent): void
    public internalFrameDeiconified(arg0: javax.swing.event.InternalFrameEvent): void
    public internalFrameClosing(arg0: javax.swing.event.InternalFrameEvent): void
    public internalFrameClosed(arg0: javax.swing.event.InternalFrameEvent): void
    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
    public vetoableChange(arg0: java.beans.PropertyChangeEvent): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}