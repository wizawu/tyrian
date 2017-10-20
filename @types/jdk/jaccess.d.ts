declare namespace com {
    namespace sun {
        namespace java {
            namespace accessibility {
                namespace util {
                    class ComponentEvtDispatchThread extends java.lang.Thread {
                        public constructor(arg0: string)
                        public run(): void
                        public static class: java.lang.Class<any>
                    }
                    class EventQueueMonitorItem {
                        public static class: java.lang.Class<any>
                    }
                    class EventQueueMonitor implements java.awt.event.AWTEventListener {
                        public constructor()
                        public static maybeInitialize(): void
                        public eventDispatched(arg0: java.awt.AWTEvent): void
                        public static getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
                        public static isGUIInitialized(): boolean
                        public static addGUIInitializedListener(arg0: com.sun.java.accessibility.util.GUIInitializedListener): void
                        public static removeGUIInitializedListener(arg0: com.sun.java.accessibility.util.GUIInitializedListener): void
                        public static addTopLevelWindowListener(arg0: com.sun.java.accessibility.util.TopLevelWindowListener): void
                        public static removeTopLevelWindowListener(arg0: com.sun.java.accessibility.util.TopLevelWindowListener): void
                        public static getCurrentMousePosition(): java.awt.Point
                        public static getTopLevelWindows(): java.awt.Window[]
                        public static getTopLevelWindowWithFocus(): java.awt.Window
                        public static class: java.lang.Class<any>
                    }
                    class EventQueueMonitor$1 implements java.security.PrivilegedAction {
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class TopLevelWindowMulticaster extends java.awt.AWTEventMulticaster implements com.sun.java.accessibility.util.TopLevelWindowListener {
                        protected constructor(arg0: java.util.EventListener, arg1: java.util.EventListener)
                        public topLevelWindowCreated(arg0: java.awt.Window): void
                        public topLevelWindowDestroyed(arg0: java.awt.Window): void
                        public static add(arg0: com.sun.java.accessibility.util.TopLevelWindowListener, arg1: com.sun.java.accessibility.util.TopLevelWindowListener): com.sun.java.accessibility.util.TopLevelWindowListener
                        public static remove(arg0: com.sun.java.accessibility.util.TopLevelWindowListener, arg1: com.sun.java.accessibility.util.TopLevelWindowListener): com.sun.java.accessibility.util.TopLevelWindowListener
                        protected static addInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                        protected static removeInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                        public static class: java.lang.Class<any>
                    }
                    class EventID {
                        public static ACTION: int
                        public static ADJUSTMENT: int
                        public static COMPONENT: int
                        public static CONTAINER: int
                        public static FOCUS: int
                        public static ITEM: int
                        public static KEY: int
                        public static MOUSE: int
                        public static MOTION: int
                        public static TEXT: int
                        public static WINDOW: int
                        public static ANCESTOR: int
                        public static CARET: int
                        public static CELLEDITOR: int
                        public static CHANGE: int
                        public static COLUMNMODEL: int
                        public static DOCUMENT: int
                        public static LISTDATA: int
                        public static LISTSELECTION: int
                        public static MENU: int
                        public static POPUPMENU: int
                        public static TABLEMODEL: int
                        public static TREEEXPANSION: int
                        public static TREEMODEL: int
                        public static TREESELECTION: int
                        public static UNDOABLEEDIT: int
                        public static PROPERTYCHANGE: int
                        public static VETOABLECHANGE: int
                        public static INTERNALFRAME: int
                        public constructor()
                        public static class: java.lang.Class<any>
                    }
                    class GUIInitializedMulticaster extends java.awt.AWTEventMulticaster implements com.sun.java.accessibility.util.GUIInitializedListener {
                        protected constructor(arg0: java.util.EventListener, arg1: java.util.EventListener)
                        public guiInitialized(): void
                        public static add(arg0: com.sun.java.accessibility.util.GUIInitializedListener, arg1: com.sun.java.accessibility.util.GUIInitializedListener): com.sun.java.accessibility.util.GUIInitializedListener
                        public static remove(arg0: com.sun.java.accessibility.util.GUIInitializedListener, arg1: com.sun.java.accessibility.util.GUIInitializedListener): com.sun.java.accessibility.util.GUIInitializedListener
                        protected static addInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                        protected static removeInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                        public static class: java.lang.Class<any>
                    }
                    class SwingEventMonitor extends com.sun.java.accessibility.util.AWTEventMonitor {
                        protected static listenerList: javax.swing.event.EventListenerList
                        protected static swingListener: com.sun.java.accessibility.util.SwingEventMonitor$SwingEventListener
                        public constructor()
                        public static addAncestorListener(arg0: javax.swing.event.AncestorListener): void
                        public static removeAncestorListener(arg0: javax.swing.event.AncestorListener): void
                        public static addCaretListener(arg0: javax.swing.event.CaretListener): void
                        public static removeCaretListener(arg0: javax.swing.event.CaretListener): void
                        public static addCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
                        public static removeCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
                        public static addChangeListener(arg0: javax.swing.event.ChangeListener): void
                        public static removeChangeListener(arg0: javax.swing.event.ChangeListener): void
                        public static addColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
                        public static removeColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
                        public static addDocumentListener(arg0: javax.swing.event.DocumentListener): void
                        public static removeDocumentListener(arg0: javax.swing.event.DocumentListener): void
                        public static addListDataListener(arg0: javax.swing.event.ListDataListener): void
                        public static removeListDataListener(arg0: javax.swing.event.ListDataListener): void
                        public static addListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
                        public static removeListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
                        public static addMenuListener(arg0: javax.swing.event.MenuListener): void
                        public static removeMenuListener(arg0: javax.swing.event.MenuListener): void
                        public static addPopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
                        public static removePopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
                        public static addTableModelListener(arg0: javax.swing.event.TableModelListener): void
                        public static removeTableModelListener(arg0: javax.swing.event.TableModelListener): void
                        public static addTreeExpansionListener(arg0: javax.swing.event.TreeExpansionListener): void
                        public static removeTreeExpansionListener(arg0: javax.swing.event.TreeExpansionListener): void
                        public static addTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
                        public static removeTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
                        public static addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
                        public static removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
                        public static addUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
                        public static removeUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
                        public static addInternalFrameListener(arg0: javax.swing.event.InternalFrameListener): void
                        public static removeInternalFrameListener(arg0: javax.swing.event.InternalFrameListener): void
                        public static addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                        public static removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                        public static addVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
                        public static removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
                        public static class: java.lang.Class<any>
                    }
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
                    class Translator extends javax.accessibility.AccessibleContext implements javax.accessibility.Accessible , javax.accessibility.AccessibleComponent {
                        protected source: java.lang.Object
                        protected static getTranslatorClass(arg0: java.lang.Class): java.lang.Class
                        public static getAccessible(arg0: java.lang.Object): javax.accessibility.Accessible
                        public constructor()
                        public constructor(arg0: java.lang.Object)
                        public getSource(): java.lang.Object
                        public setSource(arg0: java.lang.Object): void
                        public equals(arg0: java.lang.Object): boolean
                        public getAccessibleContext(): javax.accessibility.AccessibleContext
                        public getAccessibleName(): string
                        public setAccessibleName(arg0: string): void
                        public getAccessibleDescription(): string
                        public setAccessibleDescription(arg0: string): void
                        public getAccessibleRole(): javax.accessibility.AccessibleRole
                        public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                        public getAccessibleParent(): javax.accessibility.Accessible
                        public getAccessibleIndexInParent(): int
                        public getAccessibleChildrenCount(): int
                        public getAccessibleChild(arg0: int): javax.accessibility.Accessible
                        public getLocale(): java.util.Locale
                        public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                        public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                        public getBackground(): java.awt.Color
                        public setBackground(arg0: java.awt.Color): void
                        public getForeground(): java.awt.Color
                        public setForeground(arg0: java.awt.Color): void
                        public getCursor(): java.awt.Cursor
                        public setCursor(arg0: java.awt.Cursor): void
                        public getFont(): java.awt.Font
                        public setFont(arg0: java.awt.Font): void
                        public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
                        public isEnabled(): boolean
                        public setEnabled(arg0: boolean): void
                        public isVisible(): boolean
                        public setVisible(arg0: boolean): void
                        public isShowing(): boolean
                        public contains(arg0: java.awt.Point): boolean
                        public getLocationOnScreen(): java.awt.Point
                        public getLocation(): java.awt.Point
                        public setLocation(arg0: java.awt.Point): void
                        public getBounds(): java.awt.Rectangle
                        public setBounds(arg0: java.awt.Rectangle): void
                        public getSize(): java.awt.Dimension
                        public setSize(arg0: java.awt.Dimension): void
                        public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
                        public isFocusTraversable(): boolean
                        public requestFocus(): void
                        public addFocusListener(arg0: java.awt.event.FocusListener): void
                        public removeFocusListener(arg0: java.awt.event.FocusListener): void
                        public static class: java.lang.Class<any>
                    }
                    namespace java {
                        namespace awt {
                            class LabelTranslator extends com.sun.java.accessibility.util.Translator {
                                public constructor()
                                public getAccessibleName(): string
                                public setAccessibleName(arg0: string): void
                                public getAccessibleRole(): javax.accessibility.AccessibleRole
                                public static class: java.lang.Class<any>
                            }
                            class TextComponentTranslator extends com.sun.java.accessibility.util.Translator {
                                public constructor()
                                public getAccessibleRole(): javax.accessibility.AccessibleRole
                                public static class: java.lang.Class<any>
                            }
                            class CheckboxTranslator extends com.sun.java.accessibility.util.Translator {
                                public constructor()
                                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                                public getAccessibleName(): string
                                public setAccessibleName(arg0: string): void
                                public getAccessibleRole(): javax.accessibility.AccessibleRole
                                public static class: java.lang.Class<any>
                            }
                            class ButtonTranslator extends com.sun.java.accessibility.util.Translator {
                                public constructor()
                                public getAccessibleName(): string
                                public setAccessibleName(arg0: string): void
                                public getAccessibleRole(): javax.accessibility.AccessibleRole
                                public static class: java.lang.Class<any>
                            }
                            class ListTranslator extends com.sun.java.accessibility.util.Translator {
                                public constructor()
                                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                                public getAccessibleRole(): javax.accessibility.AccessibleRole
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                    interface GUIInitializedListener extends java.util.EventListener {
                        guiInitialized(): void
                    }
                    class _AccessibleState extends javax.accessibility.AccessibleState {
                        public static MANAGES_DESCENDANTS: com.sun.java.accessibility.util._AccessibleState
                        protected constructor(arg0: string)
                        public static class: java.lang.Class<any>
                    }
                    class AccessibilityListenerList {
                        protected listenerList: java.lang.Object[]
                        public constructor()
                        public getListenerList(): java.lang.Object[]
                        public getListenerCount(): int
                        public getListenerCount(arg0: java.lang.Class): int
                        public add(arg0: java.lang.Class, arg1: java.util.EventListener): void
                        public remove(arg0: java.lang.Class, arg1: java.util.EventListener): void
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class AccessibilityEventMonitor {
                        protected static listenerList: com.sun.java.accessibility.util.AccessibilityListenerList
                        protected static accessibilityListener: com.sun.java.accessibility.util.AccessibilityEventMonitor$AccessibilityEventListener
                        public constructor()
                        public static addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                        public static removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                        public static class: java.lang.Class<any>
                    }
                    class AccessibilityEventMonitor$AccessibilityEventListener implements com.sun.java.accessibility.util.TopLevelWindowListener , java.beans.PropertyChangeListener {
                        public constructor()
                        protected installListeners(): void
                        protected installListeners(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                        protected removeListeners(): void
                        protected removeListeners(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                        public topLevelWindowCreated(arg0: java.awt.Window): void
                        public topLevelWindowDestroyed(arg0: java.awt.Window): void
                        public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                        public static class: java.lang.Class<any>
                    }
                    interface TopLevelWindowListener extends java.util.EventListener {
                        topLevelWindowCreated(arg0: java.awt.Window): void
                        topLevelWindowDestroyed(arg0: java.awt.Window): void
                    }
                    class AWTEventMonitor {
                        protected static componentWithFocus: java.awt.Component
                        protected static componentListener: java.awt.event.ComponentListener
                        protected static containerListener: java.awt.event.ContainerListener
                        protected static focusListener: java.awt.event.FocusListener
                        protected static keyListener: java.awt.event.KeyListener
                        protected static mouseListener: java.awt.event.MouseListener
                        protected static mouseMotionListener: java.awt.event.MouseMotionListener
                        protected static windowListener: java.awt.event.WindowListener
                        protected static actionListener: java.awt.event.ActionListener
                        protected static adjustmentListener: java.awt.event.AdjustmentListener
                        protected static itemListener: java.awt.event.ItemListener
                        protected static textListener: java.awt.event.TextListener
                        protected static awtListener: com.sun.java.accessibility.util.AWTEventMonitor$AWTEventsListener
                        public constructor()
                        public static getComponentWithFocus(): java.awt.Component
                        public static addComponentListener(arg0: java.awt.event.ComponentListener): void
                        public static removeComponentListener(arg0: java.awt.event.ComponentListener): void
                        public static addContainerListener(arg0: java.awt.event.ContainerListener): void
                        public static removeContainerListener(arg0: java.awt.event.ContainerListener): void
                        public static addFocusListener(arg0: java.awt.event.FocusListener): void
                        public static removeFocusListener(arg0: java.awt.event.FocusListener): void
                        public static addKeyListener(arg0: java.awt.event.KeyListener): void
                        public static removeKeyListener(arg0: java.awt.event.KeyListener): void
                        public static addMouseListener(arg0: java.awt.event.MouseListener): void
                        public static removeMouseListener(arg0: java.awt.event.MouseListener): void
                        public static addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
                        public static removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
                        public static addWindowListener(arg0: java.awt.event.WindowListener): void
                        public static removeWindowListener(arg0: java.awt.event.WindowListener): void
                        public static addActionListener(arg0: java.awt.event.ActionListener): void
                        public static removeActionListener(arg0: java.awt.event.ActionListener): void
                        public static addAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
                        public static removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
                        public static addItemListener(arg0: java.awt.event.ItemListener): void
                        public static removeItemListener(arg0: java.awt.event.ItemListener): void
                        public static addTextListener(arg0: java.awt.event.TextListener): void
                        public static removeTextListener(arg0: java.awt.event.TextListener): void
                        public static class: java.lang.Class<any>
                    }
                    class AWTEventMonitor$AWTEventsListener implements com.sun.java.accessibility.util.TopLevelWindowListener , java.awt.event.ActionListener , java.awt.event.AdjustmentListener , java.awt.event.ComponentListener , java.awt.event.ContainerListener , java.awt.event.FocusListener , java.awt.event.ItemListener , java.awt.event.KeyListener , java.awt.event.MouseListener , java.awt.event.MouseMotionListener , java.awt.event.TextListener , java.awt.event.WindowListener , javax.swing.event.ChangeListener {
                        public constructor()
                        protected installListeners(): void
                        protected installListeners(arg0: int): void
                        protected installListeners(arg0: java.awt.Component): void
                        public stateChanged(arg0: javax.swing.event.ChangeEvent): void
                        protected installListeners(arg0: java.awt.Component, arg1: int): void
                        protected removeListeners(arg0: int): void
                        protected removeListeners(arg0: java.awt.Component): void
                        protected removeListeners(arg0: java.awt.Component, arg1: int): void
                        public topLevelWindowCreated(arg0: java.awt.Window): void
                        public topLevelWindowDestroyed(arg0: java.awt.Window): void
                        public actionPerformed(arg0: java.awt.event.ActionEvent): void
                        public adjustmentValueChanged(arg0: java.awt.event.AdjustmentEvent): void
                        public componentHidden(arg0: java.awt.event.ComponentEvent): void
                        public componentMoved(arg0: java.awt.event.ComponentEvent): void
                        public componentResized(arg0: java.awt.event.ComponentEvent): void
                        public componentShown(arg0: java.awt.event.ComponentEvent): void
                        public componentAdded(arg0: java.awt.event.ContainerEvent): void
                        public componentRemoved(arg0: java.awt.event.ContainerEvent): void
                        public focusGained(arg0: java.awt.event.FocusEvent): void
                        public focusLost(arg0: java.awt.event.FocusEvent): void
                        public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                        public keyPressed(arg0: java.awt.event.KeyEvent): void
                        public keyReleased(arg0: java.awt.event.KeyEvent): void
                        public keyTyped(arg0: java.awt.event.KeyEvent): void
                        public mouseClicked(arg0: java.awt.event.MouseEvent): void
                        public mouseEntered(arg0: java.awt.event.MouseEvent): void
                        public mouseExited(arg0: java.awt.event.MouseEvent): void
                        public mousePressed(arg0: java.awt.event.MouseEvent): void
                        public mouseReleased(arg0: java.awt.event.MouseEvent): void
                        public mouseDragged(arg0: java.awt.event.MouseEvent): void
                        public mouseMoved(arg0: java.awt.event.MouseEvent): void
                        public textValueChanged(arg0: java.awt.event.TextEvent): void
                        public windowOpened(arg0: java.awt.event.WindowEvent): void
                        public windowClosing(arg0: java.awt.event.WindowEvent): void
                        public windowClosed(arg0: java.awt.event.WindowEvent): void
                        public windowIconified(arg0: java.awt.event.WindowEvent): void
                        public windowDeiconified(arg0: java.awt.event.WindowEvent): void
                        public windowActivated(arg0: java.awt.event.WindowEvent): void
                        public windowDeactivated(arg0: java.awt.event.WindowEvent): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
