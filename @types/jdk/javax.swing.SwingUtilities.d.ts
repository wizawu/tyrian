declare namespace javax {
  namespace swing {

    class SwingUtilities implements javax.swing.SwingConstants {
      static installSwingDropTargetAsNecessary(arg0: java.awt.Component, arg1: javax.swing.TransferHandler): void
      public static isRectangleContainingRectangle(arg0: java.awt.Rectangle, arg1: java.awt.Rectangle): boolean
      public static getLocalBounds(arg0: java.awt.Component): java.awt.Rectangle
      public static getWindowAncestor(arg0: java.awt.Component): java.awt.Window
      static convertScreenLocationToParent(arg0: java.awt.Container, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.Point
      public static convertPoint(arg0: java.awt.Component, arg1: java.awt.Point, arg2: java.awt.Component): java.awt.Point
      public static convertPoint(arg0: java.awt.Component, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Component): java.awt.Point
      public static convertRectangle(arg0: java.awt.Component, arg1: java.awt.Rectangle, arg2: java.awt.Component): java.awt.Rectangle
      public static getAncestorOfClass(arg0: java.lang.Class<unknown>, arg1: java.awt.Component): java.awt.Container
      public static getAncestorNamed(arg0: java.lang.String | string, arg1: java.awt.Component): java.awt.Container
      public static getDeepestComponentAt(arg0: java.awt.Component, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.Component
      public static convertMouseEvent(arg0: java.awt.Component, arg1: java.awt.event.MouseEvent, arg2: java.awt.Component): java.awt.event.MouseEvent
      public static convertPointToScreen(arg0: java.awt.Point, arg1: java.awt.Component): void
      public static convertPointFromScreen(arg0: java.awt.Point, arg1: java.awt.Component): void
      public static windowForComponent(arg0: java.awt.Component): java.awt.Window
      public static isDescendingFrom(arg0: java.awt.Component, arg1: java.awt.Component): boolean
      public static computeIntersection(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.Rectangle): java.awt.Rectangle
      public static computeUnion(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.Rectangle): java.awt.Rectangle
      public static computeDifference(arg0: java.awt.Rectangle, arg1: java.awt.Rectangle): java.awt.Rectangle[]
      public static isLeftMouseButton(arg0: java.awt.event.MouseEvent): boolean
      public static isMiddleMouseButton(arg0: java.awt.event.MouseEvent): boolean
      public static isRightMouseButton(arg0: java.awt.event.MouseEvent): boolean
      public static computeStringWidth(arg0: java.awt.FontMetrics, arg1: java.lang.String | string): number
      public static layoutCompoundLabel(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string, arg3: javax.swing.Icon, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: java.awt.Rectangle, arg9: java.awt.Rectangle, arg10: java.awt.Rectangle, arg11: number | java.lang.Integer): java.lang.String
      public static layoutCompoundLabel(arg0: java.awt.FontMetrics, arg1: java.lang.String | string, arg2: javax.swing.Icon, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: java.awt.Rectangle, arg8: java.awt.Rectangle, arg9: java.awt.Rectangle, arg10: number | java.lang.Integer): java.lang.String
      public static paintComponent(arg0: java.awt.Graphics, arg1: java.awt.Component, arg2: java.awt.Container, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
      public static paintComponent(arg0: java.awt.Graphics, arg1: java.awt.Component, arg2: java.awt.Container, arg3: java.awt.Rectangle): void
      public static updateComponentTreeUI(arg0: java.awt.Component): void
      public static invokeLater(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public static invokeAndWait(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public static isEventDispatchThread(): boolean
      public static getAccessibleIndexInParent(arg0: java.awt.Component): number
      public static getAccessibleAt(arg0: java.awt.Component, arg1: java.awt.Point): javax.accessibility.Accessible
      public static getAccessibleStateSet(arg0: java.awt.Component): javax.accessibility.AccessibleStateSet
      public static getAccessibleChildrenCount(arg0: java.awt.Component): number
      public static getAccessibleChild(arg0: java.awt.Component, arg1: number | java.lang.Integer): javax.accessibility.Accessible
      public static findFocusOwner(arg0: java.awt.Component): java.awt.Component
      public static getRootPane(arg0: java.awt.Component): javax.swing.JRootPane
      public static getRoot(arg0: java.awt.Component): java.awt.Component
      static getPaintingOrigin(arg0: javax.swing.JComponent): javax.swing.JComponent
      public static processKeyBindings(arg0: java.awt.event.KeyEvent): boolean
      static isValidKeyEventForKeyBindings(arg0: java.awt.event.KeyEvent): boolean
      public static notifyAction(arg0: javax.swing.Action, arg1: javax.swing.KeyStroke, arg2: java.awt.event.KeyEvent, arg3: java.lang.Object | any, arg4: number | java.lang.Integer): boolean
      public static replaceUIInputMap(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: javax.swing.InputMap): void
      public static replaceUIActionMap(arg0: javax.swing.JComponent, arg1: javax.swing.ActionMap): void
      public static getUIInputMap(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): javax.swing.InputMap
      public static getUIActionMap(arg0: javax.swing.JComponent): javax.swing.ActionMap
      static getSharedOwnerFrame(): java.awt.Frame
      static getSharedOwnerFrameShutdownListener(): java.awt.event.WindowListener
      static appContextGet(arg0: java.lang.Object | any): java.lang.Object
      static appContextPut(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
      static appContextRemove(arg0: java.lang.Object | any): void
      static loadSystemClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      static isLeftToRight(arg0: java.awt.Component): boolean
      static doesIconReferenceImage(arg0: javax.swing.Icon, arg1: java.awt.Image): boolean
      static findDisplayedMnemonicIndex(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static calculateInnerArea(arg0: javax.swing.JComponent, arg1: java.awt.Rectangle): java.awt.Rectangle
      static updateRendererOrEditorUI(arg0: java.lang.Object | any): void
      public static getUnwrappedParent(arg0: java.awt.Component): java.awt.Container
      public static getUnwrappedView(arg0: javax.swing.JViewport): java.awt.Component
      static getValidateRoot(arg0: java.awt.Container, arg1: boolean | java.lang.Boolean): java.awt.Container
    }

  }
}
