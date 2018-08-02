declare namespace javax {
    namespace swing {
class SwingUtilities implements javax.swing.SwingConstants {
    public static isRectangleContainingRectangle(arg0: java.awt.Rectangle, arg1: java.awt.Rectangle): boolean
    public static getLocalBounds(arg0: java.awt.Component): java.awt.Rectangle
    public static getWindowAncestor(arg0: java.awt.Component): java.awt.Window
    public static convertPoint(arg0: java.awt.Component, arg1: java.awt.Point, arg2: java.awt.Component): java.awt.Point
    public static convertPoint(arg0: java.awt.Component, arg1: int, arg2: int, arg3: java.awt.Component): java.awt.Point
    public static convertRectangle(arg0: java.awt.Component, arg1: java.awt.Rectangle, arg2: java.awt.Component): java.awt.Rectangle
    public static getAncestorOfClass(arg0: java.lang.Class<any>, arg1: java.awt.Component): java.awt.Container
    public static getAncestorNamed(arg0: java.lang.String | string, arg1: java.awt.Component): java.awt.Container
    public static getDeepestComponentAt(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Component
    public static convertMouseEvent(arg0: java.awt.Component, arg1: java.awt.event.MouseEvent, arg2: java.awt.Component): java.awt.event.MouseEvent
    public static convertPointToScreen(arg0: java.awt.Point, arg1: java.awt.Component): void
    public static convertPointFromScreen(arg0: java.awt.Point, arg1: java.awt.Component): void
    public static windowForComponent(arg0: java.awt.Component): java.awt.Window
    public static isDescendingFrom(arg0: java.awt.Component, arg1: java.awt.Component): boolean
    public static computeIntersection(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Rectangle): java.awt.Rectangle
    public static computeUnion(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Rectangle): java.awt.Rectangle
    public static computeDifference(arg0: java.awt.Rectangle, arg1: java.awt.Rectangle): java.awt.Rectangle[]
    public static isLeftMouseButton(arg0: java.awt.event.MouseEvent): boolean
    public static isMiddleMouseButton(arg0: java.awt.event.MouseEvent): boolean
    public static isRightMouseButton(arg0: java.awt.event.MouseEvent): boolean
    public static computeStringWidth(arg0: java.awt.FontMetrics, arg1: java.lang.String | string): int
    public static layoutCompoundLabel(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.awt.FontMetrics, arg2: java.lang.String | string, arg3: javax.swing.Icon, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Rectangle, arg9: java.awt.Rectangle, arg10: java.awt.Rectangle, arg11: int): string
    public static layoutCompoundLabel(arg0: java.awt.FontMetrics, arg1: java.lang.String | string, arg2: javax.swing.Icon, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.awt.Rectangle, arg8: java.awt.Rectangle, arg9: java.awt.Rectangle, arg10: int): string
    public static paintComponent(arg0: java.awt.Graphics, arg1: java.awt.Component, arg2: java.awt.Container, arg3: int, arg4: int, arg5: int, arg6: int): void
    public static paintComponent(arg0: java.awt.Graphics, arg1: java.awt.Component, arg2: java.awt.Container, arg3: java.awt.Rectangle): void
    public static updateComponentTreeUI(arg0: java.awt.Component): void
    public static invokeLater(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public static invokeAndWait(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public static isEventDispatchThread(): boolean
    public static getAccessibleIndexInParent(arg0: java.awt.Component): int
    public static getAccessibleAt(arg0: java.awt.Component, arg1: java.awt.Point): javax.accessibility.Accessible
    public static getAccessibleStateSet(arg0: java.awt.Component): javax.accessibility.AccessibleStateSet
    public static getAccessibleChildrenCount(arg0: java.awt.Component): int
    public static getAccessibleChild(arg0: java.awt.Component, arg1: int): javax.accessibility.Accessible
    public static findFocusOwner(arg0: java.awt.Component): java.awt.Component
    public static getRootPane(arg0: java.awt.Component): javax.swing.JRootPane
    public static getRoot(arg0: java.awt.Component): java.awt.Component
    public static processKeyBindings(arg0: java.awt.event.KeyEvent): boolean
    public static notifyAction(arg0: javax.swing.Action, arg1: javax.swing.KeyStroke, arg2: java.awt.event.KeyEvent, arg3: java.lang.Object, arg4: int): boolean
    public static replaceUIInputMap(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: javax.swing.InputMap): void
    public static replaceUIActionMap(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.ActionMap): void
    public static getUIInputMap(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int): javax.swing.InputMap
    public static getUIActionMap(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.ActionMap
    public static calculateInnerArea(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.awt.Rectangle): java.awt.Rectangle
    public static getUnwrappedParent(arg0: java.awt.Component): java.awt.Container
    public static getUnwrappedView(arg0: javax.swing.JViewport | javax.swing.JViewport$$Lambda): java.awt.Component
    public static class: java.lang.Class<any>
}

    }
}