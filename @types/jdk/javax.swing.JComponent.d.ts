declare namespace javax {
  namespace swing {

    abstract class JComponent extends java.awt.Container implements java.io.Serializable, javax.swing.TransferHandler$HasGetTransferHandler {
      static DEBUG_GRAPHICS_LOADED: boolean
      protected ui: javax.swing.plaf.ComponentUI
      protected listenerList: javax.swing.event.EventListenerList
      paintingChild: java.awt.Component
      public static readonly WHEN_FOCUSED: int
      public static readonly WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: int
      public static readonly WHEN_IN_FOCUSED_WINDOW: int
      public static readonly UNDEFINED_CONDITION: int
      public static readonly TOOL_TIP_TEXT_KEY: java.lang.String
      static readonly focusController: sun.awt.RequestFocusController
      static safelyGetGraphics(arg0: java.awt.Component): java.awt.Graphics
      static safelyGetGraphics(arg0: java.awt.Component, arg1: java.awt.Component): java.awt.Graphics
      static getGraphicsInvoked(arg0: java.awt.Component): void
      static getManagingFocusForwardTraversalKeys(): java.util.Set<javax.swing.KeyStroke>
      static getManagingFocusBackwardTraversalKeys(): java.util.Set<javax.swing.KeyStroke>
      public setInheritsPopupMenu(arg0: boolean | java.lang.Boolean): void
      public getInheritsPopupMenu(): boolean
      public setComponentPopupMenu(arg0: javax.swing.JPopupMenu): void
      public getComponentPopupMenu(): javax.swing.JPopupMenu
      public constructor()
      public updateUI(): void
      public getUI(): javax.swing.plaf.ComponentUI
      protected setUI(arg0: javax.swing.plaf.ComponentUI): void
      public getUIClassID(): java.lang.String
      protected getComponentGraphics(arg0: java.awt.Graphics): java.awt.Graphics
      protected paintComponent(arg0: java.awt.Graphics): void
      protected paintChildren(arg0: java.awt.Graphics): void
      protected paintBorder(arg0: java.awt.Graphics): void
      public update(arg0: java.awt.Graphics): void
      public paint(arg0: java.awt.Graphics): void
      paintForceDoubleBuffered(arg0: java.awt.Graphics): void
      isPainting(): boolean
      public printAll(arg0: java.awt.Graphics): void
      public print(arg0: java.awt.Graphics): void
      protected printComponent(arg0: java.awt.Graphics): void
      protected printChildren(arg0: java.awt.Graphics): void
      protected printBorder(arg0: java.awt.Graphics): void
      public isPaintingTile(): boolean
      public isPaintingForPrint(): boolean
      public isManagingFocus(): boolean
      public setNextFocusableComponent(arg0: java.awt.Component): void
      public getNextFocusableComponent(): java.awt.Component
      public setRequestFocusEnabled(arg0: boolean | java.lang.Boolean): void
      public isRequestFocusEnabled(): boolean
      public requestFocus(): void
      public requestFocus(arg0: boolean | java.lang.Boolean): boolean
      public requestFocusInWindow(): boolean
      protected requestFocusInWindow(arg0: boolean | java.lang.Boolean): boolean
      public grabFocus(): void
      public setVerifyInputWhenFocusTarget(arg0: boolean | java.lang.Boolean): void
      public getVerifyInputWhenFocusTarget(): boolean
      public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
      public setPreferredSize(arg0: java.awt.Dimension): void
      public getPreferredSize(): java.awt.Dimension
      public setMaximumSize(arg0: java.awt.Dimension): void
      public getMaximumSize(): java.awt.Dimension
      public setMinimumSize(arg0: java.awt.Dimension): void
      public getMinimumSize(): java.awt.Dimension
      public contains(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public setBorder(arg0: javax.swing.border.Border): void
      public getBorder(): javax.swing.border.Border
      public getInsets(): java.awt.Insets
      public getInsets(arg0: java.awt.Insets): java.awt.Insets
      public getAlignmentY(): number
      public setAlignmentY(arg0: number | java.lang.Float): void
      public getAlignmentX(): number
      public setAlignmentX(arg0: number | java.lang.Float): void
      public setInputVerifier(arg0: javax.swing.InputVerifier): void
      public getInputVerifier(): javax.swing.InputVerifier
      public getGraphics(): java.awt.Graphics
      public setDebugGraphicsOptions(arg0: number | java.lang.Integer): void
      public getDebugGraphicsOptions(): number
      shouldDebugGraphics(): number
      public registerKeyboardAction(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda, arg1: java.lang.String | string, arg2: javax.swing.KeyStroke, arg3: number | java.lang.Integer): void
      componentInputMapChanged(arg0: javax.swing.ComponentInputMap): void
      public registerKeyboardAction(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda, arg1: javax.swing.KeyStroke, arg2: number | java.lang.Integer): void
      public unregisterKeyboardAction(arg0: javax.swing.KeyStroke): void
      public getRegisteredKeyStrokes(): javax.swing.KeyStroke[]
      public getConditionForKeyStroke(arg0: javax.swing.KeyStroke): number
      public getActionForKeyStroke(arg0: javax.swing.KeyStroke): java.awt.event.ActionListener
      public resetKeyboardActions(): void
      public setInputMap(arg0: number | java.lang.Integer, arg1: javax.swing.InputMap): void
      public getInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
      public getInputMap(): javax.swing.InputMap
      public setActionMap(arg0: javax.swing.ActionMap): void
      public getActionMap(): javax.swing.ActionMap
      getInputMap(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): javax.swing.InputMap
      getActionMap(arg0: boolean | java.lang.Boolean): javax.swing.ActionMap
      public getBaseline(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public getBaselineResizeBehavior(): java.awt.Component$BaselineResizeBehavior
      public requestDefaultFocus(): boolean
      public setVisible(arg0: boolean | java.lang.Boolean): void
      public setEnabled(arg0: boolean | java.lang.Boolean): void
      public setForeground(arg0: java.awt.Color): void
      public setBackground(arg0: java.awt.Color): void
      public setFont(arg0: java.awt.Font): void
      public static getDefaultLocale(): java.util.Locale
      public static setDefaultLocale(arg0: java.util.Locale): void
      protected processComponentKeyEvent(arg0: java.awt.event.KeyEvent): void
      protected processKeyEvent(arg0: java.awt.event.KeyEvent): void
      protected processKeyBinding(arg0: javax.swing.KeyStroke, arg1: java.awt.event.KeyEvent, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean): boolean
      processKeyBindings(arg0: java.awt.event.KeyEvent, arg1: boolean | java.lang.Boolean): boolean
      static processKeyBindingsForAllComponents(arg0: java.awt.event.KeyEvent, arg1: java.awt.Container, arg2: boolean | java.lang.Boolean): boolean
      public setToolTipText(arg0: java.lang.String | string): void
      public getToolTipText(): java.lang.String
      public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
      public getToolTipLocation(arg0: java.awt.event.MouseEvent): java.awt.Point
      public getPopupLocation(arg0: java.awt.event.MouseEvent): java.awt.Point
      public createToolTip(): javax.swing.JToolTip
      public scrollRectToVisible(arg0: java.awt.Rectangle): void
      public setAutoscrolls(arg0: boolean | java.lang.Boolean): void
      public getAutoscrolls(): boolean
      public setTransferHandler(arg0: javax.swing.TransferHandler): void
      public getTransferHandler(): javax.swing.TransferHandler
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.TransferHandler$DropLocation
      setDropLocation(arg0: javax.swing.TransferHandler$DropLocation, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean): java.lang.Object
      dndDone(): void
      protected processMouseEvent(arg0: java.awt.event.MouseEvent): void
      protected processMouseMotionEvent(arg0: java.awt.event.MouseEvent): void
      superProcessMouseMotionEvent(arg0: java.awt.event.MouseEvent): void
      setCreatedDoubleBuffer(arg0: boolean | java.lang.Boolean): void
      getCreatedDoubleBuffer(): boolean
      public enable(): void
      public disable(): void
      public getClientProperty(arg0: java.lang.Object | any): java.lang.Object
      public putClientProperty(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
      clientPropertyChanged(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
      setUIProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public setFocusTraversalKeys(arg0: number | java.lang.Integer, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
      public static isLightweightComponent(arg0: java.awt.Component): boolean
      public reshape(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public getBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
      public getSize(arg0: java.awt.Dimension): java.awt.Dimension
      public getLocation(arg0: java.awt.Point): java.awt.Point
      public getX(): number
      public getY(): number
      public getWidth(): number
      public getHeight(): number
      public isOpaque(): boolean
      public setOpaque(arg0: boolean | java.lang.Boolean): void
      rectangleIsObscured(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): boolean
      static computeVisibleRect(arg0: java.awt.Component, arg1: java.awt.Rectangle): void
      public computeVisibleRect(arg0: java.awt.Rectangle): void
      public getVisibleRect(): java.awt.Rectangle
      public firePropertyChange(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
      public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public firePropertyChange(arg0: java.lang.String | string, arg1: string | java.lang.Character, arg2: string | java.lang.Character): void
      protected fireVetoableChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
      public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
      public getTopLevelAncestor(): java.awt.Container
      public addAncestorListener(arg0: javax.swing.event.AncestorListener): void
      public removeAncestorListener(arg0: javax.swing.event.AncestorListener): void
      public getAncestorListeners(): javax.swing.event.AncestorListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      public addNotify(): void
      public removeNotify(): void
      public repaint(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      public repaint(arg0: java.awt.Rectangle): void
      public revalidate(): void
      public isValidateRoot(): boolean
      public isOptimizedDrawingEnabled(): boolean
      protected isPaintingOrigin(): boolean
      public paintImmediately(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public paintImmediately(arg0: java.awt.Rectangle): void
      alwaysOnTop(): boolean
      setPaintingChild(arg0: java.awt.Component): void
      _paintImmediately(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      paintToOffscreen(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
      checkIfChildObscuredBySibling(): boolean
      static setWriteObjCounter(arg0: javax.swing.JComponent, arg1: number | java.lang.Byte): void
      static getWriteObjCounter(arg0: javax.swing.JComponent): number
      public setDoubleBuffered(arg0: boolean | java.lang.Boolean): void
      public isDoubleBuffered(): boolean
      public getRootPane(): javax.swing.JRootPane
      compWriteObjectNotify(): void
      protected paramString(): java.lang.String
      public hide(): void
      static access$000(arg0: javax.swing.JComponent): javax.accessibility.AccessibleContext
      static access$100(arg0: javax.swing.JComponent): javax.accessibility.AccessibleContext
      static access$200(arg0: javax.swing.JComponent): javax.accessibility.AccessibleContext
      static access$300(arg0: javax.swing.JComponent): javax.accessibility.AccessibleContext
    }

  }
}
