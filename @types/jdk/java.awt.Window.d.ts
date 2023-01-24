declare namespace java {
  namespace awt {
    class Window extends java.awt.Container implements javax.accessibility.Accessible {
      warningString: java.lang.String
      icons: java.util.List<java.awt.Image>
      static systemSyncLWRequests: boolean
      syncLWRequests: boolean
      beforeFirstShow: boolean
      disposerRecord: java.awt.Window$WindowDisposerRecord
      static readonly OPENED: int
      state: int
      ownedWindowList: java.util.Vector<java.lang.ref.WeakReference<java.awt.Window>>
      showWithParent: boolean
      modalBlocker: java.awt.Dialog
      modalExclusionType: java.awt.Dialog$ModalExclusionType
      windowListener: java.awt.event.WindowListener
      windowStateListener: java.awt.event.WindowStateListener
      windowFocusListener: java.awt.event.WindowFocusListener
      inputContext: java.awt.im.InputContext
      isInShow: boolean
      isTrayIconWindow: boolean
      anchor: java.lang.Object
      constructor(arg0: java.awt.GraphicsConfiguration)
      constructor()
      public constructor(arg0: java.awt.Frame)
      public constructor(arg0: java.awt.Window)
      public constructor(arg0: java.awt.Window, arg1: java.awt.GraphicsConfiguration)
      constructComponentName(): java.lang.String
      public getIconImages(): java.util.List<java.awt.Image>
      public setIconImages(arg0: java.util.List<java.awt.Image>): void
      public setIconImage(arg0: java.awt.Image): void
      public addNotify(): void
      public removeNotify(): void
      public pack(): void
      public setMinimumSize(arg0: java.awt.Dimension): void
      public setSize(arg0: java.awt.Dimension): void
      public setSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setLocation(arg0: java.awt.Point): void
      public reshape(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      setClientSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      closeSplashScreen(): void
      public setVisible(arg0: boolean | java.lang.Boolean): void
      public show(): void
      static updateChildFocusableWindowState(arg0: java.awt.Window): void
      postWindowEvent(arg0: number | java.lang.Integer): void
      public hide(): void
      clearMostRecentFocusOwnerOnHide(): void
      public dispose(): void
      disposeImpl(): void
      doDispose(): void
      adjustListeningChildrenOnParent(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
      adjustDescendantsOnParent(arg0: number | java.lang.Integer): void
      public toFront(): void
      toFront_NoClientCode(): void
      public toBack(): void
      toBack_NoClientCode(): void
      public getToolkit(): java.awt.Toolkit
      public getWarningString(): java.lang.String
      public getLocale(): java.util.Locale
      public getInputContext(): java.awt.im.InputContext
      public setCursor(arg0: java.awt.Cursor): void
      public getOwner(): java.awt.Window
      getOwner_NoClientCode(): java.awt.Window
      public getOwnedWindows(): java.awt.Window[]
      getOwnedWindows_NoClientCode(): java.awt.Window[]
      isModalBlocked(): boolean
      setModalBlocked(arg0: java.awt.Dialog, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
      getModalBlocker(): java.awt.Dialog
      static getAllWindows(): sun.awt.util.IdentityArrayList<java.awt.Window>
      static getAllUnblockedWindows(): sun.awt.util.IdentityArrayList<java.awt.Window>
      public static getWindows(): java.awt.Window[]
      public static getOwnerlessWindows(): java.awt.Window[]
      getDocumentRoot(): java.awt.Window
      public setModalExclusionType(arg0: java.awt.Dialog$ModalExclusionType): void
      public getModalExclusionType(): java.awt.Dialog$ModalExclusionType
      isModalExcluded(arg0: java.awt.Dialog$ModalExclusionType): boolean
      updateChildrenBlocking(): void
      public addWindowListener(arg0: java.awt.event.WindowListener): void
      public addWindowStateListener(
        arg0: java.awt.event.WindowStateListener | java.awt.event.WindowStateListener$$lambda
      ): void
      public addWindowFocusListener(arg0: java.awt.event.WindowFocusListener): void
      public removeWindowListener(arg0: java.awt.event.WindowListener): void
      public removeWindowStateListener(
        arg0: java.awt.event.WindowStateListener | java.awt.event.WindowStateListener$$lambda
      ): void
      public removeWindowFocusListener(arg0: java.awt.event.WindowFocusListener): void
      public getWindowListeners(): java.awt.event.WindowListener[]
      public getWindowFocusListeners(): java.awt.event.WindowFocusListener[]
      public getWindowStateListeners(): java.awt.event.WindowStateListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processWindowEvent(arg0: java.awt.event.WindowEvent): void
      protected processWindowFocusEvent(arg0: java.awt.event.WindowEvent): void
      protected processWindowStateEvent(arg0: java.awt.event.WindowEvent): void
      preProcessKeyEvent(arg0: java.awt.event.KeyEvent): void
      postProcessKeyEvent(arg0: java.awt.event.KeyEvent): void
      public setAlwaysOnTop(arg0: boolean | java.lang.Boolean): void
      public isAlwaysOnTopSupported(): boolean
      public isAlwaysOnTop(): boolean
      public getFocusOwner(): java.awt.Component
      public getMostRecentFocusOwner(): java.awt.Component
      public isActive(): boolean
      public isFocused(): boolean
      public getFocusTraversalKeys(arg0: number | java.lang.Integer): java.util.Set<java.awt.AWTKeyStroke>
      public setFocusCycleRoot(arg0: boolean | java.lang.Boolean): void
      public isFocusCycleRoot(): boolean
      public getFocusCycleRootAncestor(): java.awt.Container
      public isFocusableWindow(): boolean
      public getFocusableWindowState(): boolean
      public setFocusableWindowState(arg0: boolean | java.lang.Boolean): void
      public setAutoRequestFocus(arg0: boolean | java.lang.Boolean): void
      public isAutoRequestFocus(): boolean
      public addPropertyChangeListener(
        arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public addPropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public isValidateRoot(): boolean
      dispatchEventImpl(arg0: java.awt.AWTEvent): void
      public postEvent(arg0: java.awt.Event): boolean
      public isShowing(): boolean
      isDisposing(): boolean
      public applyResourceBundle(arg0: java.util.ResourceBundle): void
      public applyResourceBundle(arg0: java.lang.String | string): void
      addOwnedWindow(arg0: java.lang.ref.WeakReference<java.awt.Window>): void
      removeOwnedWindow(arg0: java.lang.ref.WeakReference<java.awt.Window>): void
      connectOwnedWindow(arg0: java.awt.Window): void
      public setType(arg0: java.awt.Window$Type): void
      public getType(): java.awt.Window$Type
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      setGraphicsConfiguration(arg0: java.awt.GraphicsConfiguration): void
      public setLocationRelativeTo(arg0: java.awt.Component): void
      deliverMouseWheelToAncestor(arg0: java.awt.event.MouseWheelEvent): void
      dispatchMouseWheelToAncestor(arg0: java.awt.event.MouseWheelEvent): boolean
      public createBufferStrategy(arg0: number | java.lang.Integer): void
      public createBufferStrategy(arg0: number | java.lang.Integer, arg1: java.awt.BufferCapabilities): void
      public getBufferStrategy(): java.awt.image.BufferStrategy
      getTemporaryLostComponent(): java.awt.Component
      setTemporaryLostComponent(arg0: java.awt.Component): java.awt.Component
      canContainFocusOwner(arg0: java.awt.Component): boolean
      public setLocationByPlatform(arg0: boolean | java.lang.Boolean): void
      public isLocationByPlatform(): boolean
      public setBounds(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public setBounds(arg0: java.awt.Rectangle): void
      isRecursivelyVisible(): boolean
      public getOpacity(): number
      public setOpacity(arg0: number | java.lang.Float): void
      public getShape(): java.awt.Shape
      public setShape(arg0: java.awt.Shape): void
      public getBackground(): java.awt.Color
      public setBackground(arg0: java.awt.Color): void
      public isOpaque(): boolean
      public paint(arg0: java.awt.Graphics): void
      getContainer(): java.awt.Container
      applyCompoundShape(arg0: sun.java2d.pipe.Region): void
      applyCurrentShape(): void
      mixOnReshaping(): void
      getLocationOnWindow(): java.awt.Point
      updateZOrder(): void
    }
  }
}
