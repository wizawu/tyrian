declare namespace java {
    namespace awt {
class AWTEventMulticaster implements java.awt.event.ComponentListener , java.awt.event.ContainerListener , java.awt.event.FocusListener , java.awt.event.KeyListener , java.awt.event.MouseListener , java.awt.event.MouseMotionListener , java.awt.event.WindowListener , java.awt.event.WindowFocusListener , java.awt.event.WindowStateListener , java.awt.event.ActionListener , java.awt.event.ItemListener , java.awt.event.AdjustmentListener , java.awt.event.TextListener , java.awt.event.InputMethodListener , java.awt.event.HierarchyListener , java.awt.event.HierarchyBoundsListener , java.awt.event.MouseWheelListener {
    protected a: java.util.EventListener
    protected b: java.util.EventListener
    protected constructor(arg0: java.util.EventListener, arg1: java.util.EventListener)
    protected remove(arg0: java.util.EventListener): java.util.EventListener
    public componentResized(arg0: java.awt.event.ComponentEvent): void
    public componentMoved(arg0: java.awt.event.ComponentEvent): void
    public componentShown(arg0: java.awt.event.ComponentEvent): void
    public componentHidden(arg0: java.awt.event.ComponentEvent): void
    public componentAdded(arg0: java.awt.event.ContainerEvent): void
    public componentRemoved(arg0: java.awt.event.ContainerEvent): void
    public focusGained(arg0: java.awt.event.FocusEvent): void
    public focusLost(arg0: java.awt.event.FocusEvent): void
    public keyTyped(arg0: java.awt.event.KeyEvent): void
    public keyPressed(arg0: java.awt.event.KeyEvent): void
    public keyReleased(arg0: java.awt.event.KeyEvent): void
    public mouseClicked(arg0: java.awt.event.MouseEvent): void
    public mousePressed(arg0: java.awt.event.MouseEvent): void
    public mouseReleased(arg0: java.awt.event.MouseEvent): void
    public mouseEntered(arg0: java.awt.event.MouseEvent): void
    public mouseExited(arg0: java.awt.event.MouseEvent): void
    public mouseDragged(arg0: java.awt.event.MouseEvent): void
    public mouseMoved(arg0: java.awt.event.MouseEvent): void
    public windowOpened(arg0: java.awt.event.WindowEvent): void
    public windowClosing(arg0: java.awt.event.WindowEvent): void
    public windowClosed(arg0: java.awt.event.WindowEvent): void
    public windowIconified(arg0: java.awt.event.WindowEvent): void
    public windowDeiconified(arg0: java.awt.event.WindowEvent): void
    public windowActivated(arg0: java.awt.event.WindowEvent): void
    public windowDeactivated(arg0: java.awt.event.WindowEvent): void
    public windowStateChanged(arg0: java.awt.event.WindowEvent): void
    public windowGainedFocus(arg0: java.awt.event.WindowEvent): void
    public windowLostFocus(arg0: java.awt.event.WindowEvent): void
    public actionPerformed(arg0: java.awt.event.ActionEvent): void
    public itemStateChanged(arg0: java.awt.event.ItemEvent): void
    public adjustmentValueChanged(arg0: java.awt.event.AdjustmentEvent): void
    public textValueChanged(arg0: java.awt.event.TextEvent): void
    public inputMethodTextChanged(arg0: java.awt.event.InputMethodEvent): void
    public caretPositionChanged(arg0: java.awt.event.InputMethodEvent): void
    public hierarchyChanged(arg0: java.awt.event.HierarchyEvent): void
    public ancestorMoved(arg0: java.awt.event.HierarchyEvent): void
    public ancestorResized(arg0: java.awt.event.HierarchyEvent): void
    public mouseWheelMoved(arg0: java.awt.event.MouseWheelEvent): void
    public static add(arg0: java.awt.event.ComponentListener, arg1: java.awt.event.ComponentListener): java.awt.event.ComponentListener
    public static add(arg0: java.awt.event.ContainerListener, arg1: java.awt.event.ContainerListener): java.awt.event.ContainerListener
    public static add(arg0: java.awt.event.FocusListener, arg1: java.awt.event.FocusListener): java.awt.event.FocusListener
    public static add(arg0: java.awt.event.KeyListener, arg1: java.awt.event.KeyListener): java.awt.event.KeyListener
    public static add(arg0: java.awt.event.MouseListener, arg1: java.awt.event.MouseListener): java.awt.event.MouseListener
    public static add(arg0: java.awt.event.MouseMotionListener, arg1: java.awt.event.MouseMotionListener): java.awt.event.MouseMotionListener
    public static add(arg0: java.awt.event.WindowListener, arg1: java.awt.event.WindowListener): java.awt.event.WindowListener
    public static add(arg0: java.awt.event.WindowStateListener, arg1: java.awt.event.WindowStateListener): java.awt.event.WindowStateListener
    public static add(arg0: java.awt.event.WindowFocusListener, arg1: java.awt.event.WindowFocusListener): java.awt.event.WindowFocusListener
    public static add(arg0: java.awt.event.ActionListener, arg1: java.awt.event.ActionListener): java.awt.event.ActionListener
    public static add(arg0: java.awt.event.ItemListener, arg1: java.awt.event.ItemListener): java.awt.event.ItemListener
    public static add(arg0: java.awt.event.AdjustmentListener, arg1: java.awt.event.AdjustmentListener): java.awt.event.AdjustmentListener
    public static add(arg0: java.awt.event.TextListener, arg1: java.awt.event.TextListener): java.awt.event.TextListener
    public static add(arg0: java.awt.event.InputMethodListener, arg1: java.awt.event.InputMethodListener): java.awt.event.InputMethodListener
    public static add(arg0: java.awt.event.HierarchyListener, arg1: java.awt.event.HierarchyListener): java.awt.event.HierarchyListener
    public static add(arg0: java.awt.event.HierarchyBoundsListener, arg1: java.awt.event.HierarchyBoundsListener): java.awt.event.HierarchyBoundsListener
    public static add(arg0: java.awt.event.MouseWheelListener, arg1: java.awt.event.MouseWheelListener): java.awt.event.MouseWheelListener
    public static remove(arg0: java.awt.event.ComponentListener, arg1: java.awt.event.ComponentListener): java.awt.event.ComponentListener
    public static remove(arg0: java.awt.event.ContainerListener, arg1: java.awt.event.ContainerListener): java.awt.event.ContainerListener
    public static remove(arg0: java.awt.event.FocusListener, arg1: java.awt.event.FocusListener): java.awt.event.FocusListener
    public static remove(arg0: java.awt.event.KeyListener, arg1: java.awt.event.KeyListener): java.awt.event.KeyListener
    public static remove(arg0: java.awt.event.MouseListener, arg1: java.awt.event.MouseListener): java.awt.event.MouseListener
    public static remove(arg0: java.awt.event.MouseMotionListener, arg1: java.awt.event.MouseMotionListener): java.awt.event.MouseMotionListener
    public static remove(arg0: java.awt.event.WindowListener, arg1: java.awt.event.WindowListener): java.awt.event.WindowListener
    public static remove(arg0: java.awt.event.WindowStateListener, arg1: java.awt.event.WindowStateListener): java.awt.event.WindowStateListener
    public static remove(arg0: java.awt.event.WindowFocusListener, arg1: java.awt.event.WindowFocusListener): java.awt.event.WindowFocusListener
    public static remove(arg0: java.awt.event.ActionListener, arg1: java.awt.event.ActionListener): java.awt.event.ActionListener
    public static remove(arg0: java.awt.event.ItemListener, arg1: java.awt.event.ItemListener): java.awt.event.ItemListener
    public static remove(arg0: java.awt.event.AdjustmentListener, arg1: java.awt.event.AdjustmentListener): java.awt.event.AdjustmentListener
    public static remove(arg0: java.awt.event.TextListener, arg1: java.awt.event.TextListener): java.awt.event.TextListener
    public static remove(arg0: java.awt.event.InputMethodListener, arg1: java.awt.event.InputMethodListener): java.awt.event.InputMethodListener
    public static remove(arg0: java.awt.event.HierarchyListener, arg1: java.awt.event.HierarchyListener): java.awt.event.HierarchyListener
    public static remove(arg0: java.awt.event.HierarchyBoundsListener, arg1: java.awt.event.HierarchyBoundsListener): java.awt.event.HierarchyBoundsListener
    public static remove(arg0: java.awt.event.MouseWheelListener, arg1: java.awt.event.MouseWheelListener): java.awt.event.MouseWheelListener
    protected static addInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
    protected static removeInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
    protected saveInternal(arg0: java.io.ObjectOutputStream, arg1: java.lang.String | string): void
    protected static save(arg0: java.io.ObjectOutputStream, arg1: java.lang.String | string, arg2: java.util.EventListener): void
    public static getListeners<T extends java.util.EventListener>(arg0: java.util.EventListener, arg1: java.lang.Class<T>): T[]
    public static class: java.lang.Class<any>
}

    }
}