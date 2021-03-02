declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicComboPopup extends javax.swing.JPopupMenu implements javax.swing.plaf.basic.ComboPopup {
          static readonly EmptyListModel: javax.swing.ListModel<java.lang.Object>
          protected comboBox: javax.swing.JComboBox<java.lang.Object>
          protected list: javax.swing.JList<java.lang.Object>
          protected scroller: javax.swing.JScrollPane
          protected valueIsAdjusting: boolean
          protected mouseMotionListener: java.awt.event.MouseMotionListener
          protected mouseListener: java.awt.event.MouseListener
          protected keyListener: java.awt.event.KeyListener
          protected listSelectionListener: javax.swing.event.ListSelectionListener
          protected listMouseListener: java.awt.event.MouseListener
          protected listMouseMotionListener: java.awt.event.MouseMotionListener
          protected propertyChangeListener: java.beans.PropertyChangeListener
          protected listDataListener: javax.swing.event.ListDataListener
          protected itemListener: java.awt.event.ItemListener
          protected autoscrollTimer: javax.swing.Timer
          protected hasEntered: boolean
          protected isAutoScrolling: boolean
          protected scrollDirection: int
          protected static readonly SCROLL_UP: int
          protected static readonly SCROLL_DOWN: int
          public show(): void
          public hide(): void
          public getList(): javax.swing.JList<java.lang.Object>
          public getMouseListener(): java.awt.event.MouseListener
          public getMouseMotionListener(): java.awt.event.MouseMotionListener
          public getKeyListener(): java.awt.event.KeyListener
          public uninstallingUI(): void
          protected uninstallComboBoxModelListeners(arg0: javax.swing.ComboBoxModel<unknown>): void
          protected uninstallKeyboardActions(): void
          public constructor(arg0: javax.swing.JComboBox<java.lang.Object>)
          protected firePopupMenuWillBecomeVisible(): void
          protected firePopupMenuWillBecomeInvisible(): void
          protected firePopupMenuCanceled(): void
          protected createMouseListener(): java.awt.event.MouseListener
          protected createMouseMotionListener(): java.awt.event.MouseMotionListener
          protected createKeyListener(): java.awt.event.KeyListener
          protected createListSelectionListener(): javax.swing.event.ListSelectionListener
          protected createListDataListener(): javax.swing.event.ListDataListener
          protected createListMouseListener(): java.awt.event.MouseListener
          protected createListMouseMotionListener(): java.awt.event.MouseMotionListener
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected createItemListener(): java.awt.event.ItemListener
          protected createList(): javax.swing.JList<java.lang.Object>
          protected configureList(): void
          protected installListListeners(): void
          uninstallListListeners(): void
          protected createScroller(): javax.swing.JScrollPane
          protected configureScroller(): void
          protected configurePopup(): void
          protected installComboBoxListeners(): void
          protected installComboBoxModelListeners(arg0: javax.swing.ComboBoxModel<unknown>): void
          protected installKeyboardActions(): void
          public isFocusTraversable(): boolean
          protected startAutoScrolling(arg0: number | java.lang.Integer): void
          protected stopAutoScrolling(): void
          protected autoScrollUp(): void
          protected autoScrollDown(): void
          public getAccessibleContext(): javax.accessibility.AccessibleContext
          protected delegateFocus(arg0: java.awt.event.MouseEvent): void
          protected togglePopup(): void
          protected convertMouseEvent(arg0: java.awt.event.MouseEvent): java.awt.event.MouseEvent
          protected getPopupHeightForRowCount(arg0: number | java.lang.Integer): number
          protected computePopupBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.awt.Rectangle
          protected updateListBoxSelectionForEvent(arg0: java.awt.event.MouseEvent, arg1: boolean | java.lang.Boolean): void
        }

      }
    }
  }
}
