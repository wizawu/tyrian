declare namespace java {
  namespace awt {

    abstract class Component implements java.awt.image.ImageObserver, java.awt.MenuContainer, java.io.Serializable {
      peer: java.awt.peer.ComponentPeer
      parent: java.awt.Container
      appContext: sun.awt.AppContext
      x: int
      y: int
      width: int
      height: int
      foreground: java.awt.Color
      background: java.awt.Color
      font: java.awt.Font
      peerFont: java.awt.Font
      cursor: java.awt.Cursor
      locale: java.util.Locale
      ignoreRepaint: boolean
      visible: boolean
      enabled: boolean
      dropTarget: java.awt.dnd.DropTarget
      popups: java.util.Vector<java.awt.PopupMenu>
      focusTraversalKeys: java.util.Set<java.awt.AWTKeyStroke>[]
      static readonly LOCK: java.lang.Object
      minSize: java.awt.Dimension
      minSizeSet: boolean
      prefSize: java.awt.Dimension
      prefSizeSet: boolean
      maxSize: java.awt.Dimension
      maxSizeSet: boolean
      componentOrientation: java.awt.ComponentOrientation
      newEventsOnly: boolean
      componentListener: java.awt.event.ComponentListener
      focusListener: java.awt.event.FocusListener
      hierarchyListener: java.awt.event.HierarchyListener
      hierarchyBoundsListener: java.awt.event.HierarchyBoundsListener
      keyListener: java.awt.event.KeyListener
      mouseListener: java.awt.event.MouseListener
      mouseMotionListener: java.awt.event.MouseMotionListener
      mouseWheelListener: java.awt.event.MouseWheelListener
      inputMethodListener: java.awt.event.InputMethodListener
      static readonly actionListenerK: java.lang.String
      static readonly adjustmentListenerK: java.lang.String
      static readonly componentListenerK: java.lang.String
      static readonly containerListenerK: java.lang.String
      static readonly focusListenerK: java.lang.String
      static readonly itemListenerK: java.lang.String
      static readonly keyListenerK: java.lang.String
      static readonly mouseListenerK: java.lang.String
      static readonly mouseMotionListenerK: java.lang.String
      static readonly mouseWheelListenerK: java.lang.String
      static readonly textListenerK: java.lang.String
      static readonly ownedWindowK: java.lang.String
      static readonly windowListenerK: java.lang.String
      static readonly inputMethodListenerK: java.lang.String
      static readonly hierarchyListenerK: java.lang.String
      static readonly hierarchyBoundsListenerK: java.lang.String
      static readonly windowStateListenerK: java.lang.String
      static readonly windowFocusListenerK: java.lang.String
      eventMask: long
      static isInc: boolean
      static incRate: int
      public static readonly TOP_ALIGNMENT: float
      public static readonly CENTER_ALIGNMENT: float
      public static readonly BOTTOM_ALIGNMENT: float
      public static readonly LEFT_ALIGNMENT: float
      public static readonly RIGHT_ALIGNMENT: float
      isPacked: boolean
      backgroundEraseDisabled: boolean
      eventCache: sun.awt.EventQueueItem[]
      protected accessibleContext: javax.accessibility.AccessibleContext
      static readonly $assertionsDisabled: boolean
      getObjectLock(): java.lang.Object
      getAccessControlContext(): java.security.AccessControlContext
      getBoundsOp(): int
      setBoundsOp(arg0: int): void
      protected constructor()
      initializeFocusTraversalKeys(): void
      constructComponentName(): java.lang.String
      public getName(): java.lang.String
      public setName(arg0: java.lang.String): void
      public getParent(): java.awt.Container
      getParent_NoClientCode(): java.awt.Container
      getContainer(): java.awt.Container
      public setDropTarget(arg0: java.awt.dnd.DropTarget): void
      public getDropTarget(): java.awt.dnd.DropTarget
      public getGraphicsConfiguration(): java.awt.GraphicsConfiguration
      getGraphicsConfiguration_NoClientCode(): java.awt.GraphicsConfiguration
      setGraphicsConfiguration(arg0: java.awt.GraphicsConfiguration): void
      updateGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
      updateChildGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
      checkGD(arg0: java.lang.String): void
      public getTreeLock(): java.lang.Object
      checkTreeLock(): void
      public getToolkit(): java.awt.Toolkit
      getToolkitImpl(): java.awt.Toolkit
      getComponentFactory(): sun.awt.ComponentFactory
      public isValid(): boolean
      public isDisplayable(): boolean
      public isVisible(): boolean
      isVisible_NoClientCode(): boolean
      isRecursivelyVisible(): boolean
      pointRelativeToComponent(arg0: java.awt.Point): java.awt.Point
      findUnderMouseInWindow(arg0: java.awt.PointerInfo): java.awt.Component
      public getMousePosition(): java.awt.Point
      isSameOrAncestorOf(arg0: java.awt.Component, arg1: boolean): boolean
      public isShowing(): boolean
      public isEnabled(): boolean
      isEnabledImpl(): boolean
      public setEnabled(arg0: boolean): void
      public enable(): void
      public enable(arg0: boolean): void
      public disable(): void
      public isDoubleBuffered(): boolean
      public enableInputMethods(arg0: boolean): void
      public setVisible(arg0: boolean): void
      public show(): void
      public show(arg0: boolean): void
      containsFocus(): boolean
      clearMostRecentFocusOwnerOnHide(): void
      clearCurrentFocusCycleRootOnHide(): void
      public hide(): void
      public getForeground(): java.awt.Color
      public setForeground(arg0: java.awt.Color): void
      public isForegroundSet(): boolean
      public getBackground(): java.awt.Color
      public setBackground(arg0: java.awt.Color): void
      public isBackgroundSet(): boolean
      public getFont(): java.awt.Font
      getFont_NoClientCode(): java.awt.Font
      public setFont(arg0: java.awt.Font): void
      public isFontSet(): boolean
      public getLocale(): java.util.Locale
      public setLocale(arg0: java.util.Locale): void
      public getColorModel(): java.awt.image.ColorModel
      public getLocation(): java.awt.Point
      public getLocationOnScreen(): java.awt.Point
      getLocationOnScreen_NoTreeLock(): java.awt.Point
      public location(): java.awt.Point
      public setLocation(arg0: int, arg1: int): void
      public move(arg0: int, arg1: int): void
      public setLocation(arg0: java.awt.Point): void
      public getSize(): java.awt.Dimension
      public size(): java.awt.Dimension
      public setSize(arg0: int, arg1: int): void
      public resize(arg0: int, arg1: int): void
      public setSize(arg0: java.awt.Dimension): void
      public resize(arg0: java.awt.Dimension): void
      public getBounds(): java.awt.Rectangle
      public bounds(): java.awt.Rectangle
      public setBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
      public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
      public setBounds(arg0: java.awt.Rectangle): void
      public getX(): int
      public getY(): int
      public getWidth(): int
      public getHeight(): int
      public getBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
      public getSize(arg0: java.awt.Dimension): java.awt.Dimension
      public getLocation(arg0: java.awt.Point): java.awt.Point
      public isOpaque(): boolean
      public isLightweight(): boolean
      public setPreferredSize(arg0: java.awt.Dimension): void
      public isPreferredSizeSet(): boolean
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public setMinimumSize(arg0: java.awt.Dimension): void
      public isMinimumSizeSet(): boolean
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      public setMaximumSize(arg0: java.awt.Dimension): void
      public isMaximumSizeSet(): boolean
      public getMaximumSize(): java.awt.Dimension
      public getAlignmentX(): float
      public getAlignmentY(): float
      public getBaseline(arg0: int, arg1: int): int
      public getBaselineResizeBehavior(): java.awt.Component$BaselineResizeBehavior
      public doLayout(): void
      public layout(): void
      public validate(): void
      public invalidate(): void
      invalidateParent(): void
      invalidateIfValid(): void
      public revalidate(): void
      revalidateSynchronously(): void
      public getGraphics(): java.awt.Graphics
      getGraphics_NoClientCode(): java.awt.Graphics
      public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
      public setCursor(arg0: java.awt.Cursor): void
      updateCursorImmediately(): void
      public getCursor(): java.awt.Cursor
      getCursor_NoClientCode(): java.awt.Cursor
      public isCursorSet(): boolean
      public paint(arg0: java.awt.Graphics): void
      public update(arg0: java.awt.Graphics): void
      public paintAll(arg0: java.awt.Graphics): void
      lightweightPaint(arg0: java.awt.Graphics): void
      paintHeavyweightComponents(arg0: java.awt.Graphics): void
      public repaint(): void
      public repaint(arg0: long): void
      public repaint(arg0: int, arg1: int, arg2: int, arg3: int): void
      public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
      public print(arg0: java.awt.Graphics): void
      public printAll(arg0: java.awt.Graphics): void
      lightweightPrint(arg0: java.awt.Graphics): void
      printHeavyweightComponents(arg0: java.awt.Graphics): void
      public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
      public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
      public createImage(arg0: int, arg1: int): java.awt.Image
      public createVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
      public createVolatileImage(arg0: int, arg1: int, arg2: java.awt.ImageCapabilities): java.awt.image.VolatileImage
      public prepareImage(arg0: java.awt.Image, arg1: java.awt.image.ImageObserver): boolean
      public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): boolean
      public checkImage(arg0: java.awt.Image, arg1: java.awt.image.ImageObserver): int
      public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): int
      createBufferStrategy(arg0: int): void
      createBufferStrategy(arg0: int, arg1: java.awt.BufferCapabilities): void
      getBufferStrategy(): java.awt.image.BufferStrategy
      getBackBuffer(): java.awt.Image
      public setIgnoreRepaint(arg0: boolean): void
      public getIgnoreRepaint(): boolean
      public contains(arg0: int, arg1: int): boolean
      public inside(arg0: int, arg1: int): boolean
      public contains(arg0: java.awt.Point): boolean
      public getComponentAt(arg0: int, arg1: int): java.awt.Component
      public locate(arg0: int, arg1: int): java.awt.Component
      public getComponentAt(arg0: java.awt.Point): java.awt.Component
      public deliverEvent(arg0: java.awt.Event): void
      public dispatchEvent(arg0: java.awt.AWTEvent): void
      dispatchEventImpl(arg0: java.awt.AWTEvent): void
      autoProcessMouseWheel(arg0: java.awt.event.MouseWheelEvent): void
      dispatchMouseWheelToAncestor(arg0: java.awt.event.MouseWheelEvent): boolean
      areInputMethodsEnabled(): boolean
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      eventTypeEnabled(arg0: int): boolean
      public postEvent(arg0: java.awt.Event): boolean
      public addComponentListener(arg0: java.awt.event.ComponentListener): void
      public removeComponentListener(arg0: java.awt.event.ComponentListener): void
      public getComponentListeners(): java.awt.event.ComponentListener[]
      public addFocusListener(arg0: java.awt.event.FocusListener): void
      public removeFocusListener(arg0: java.awt.event.FocusListener): void
      public getFocusListeners(): java.awt.event.FocusListener[]
      public addHierarchyListener(arg0: java.awt.event.HierarchyListener): void
      public removeHierarchyListener(arg0: java.awt.event.HierarchyListener): void
      public getHierarchyListeners(): java.awt.event.HierarchyListener[]
      public addHierarchyBoundsListener(arg0: java.awt.event.HierarchyBoundsListener): void
      public removeHierarchyBoundsListener(arg0: java.awt.event.HierarchyBoundsListener): void
      numListening(arg0: long): int
      countHierarchyMembers(): int
      createHierarchyEvents(arg0: int, arg1: java.awt.Component, arg2: java.awt.Container, arg3: long, arg4: boolean): int
      public getHierarchyBoundsListeners(): java.awt.event.HierarchyBoundsListener[]
      adjustListeningChildrenOnParent(arg0: long, arg1: int): void
      public addKeyListener(arg0: java.awt.event.KeyListener): void
      public removeKeyListener(arg0: java.awt.event.KeyListener): void
      public getKeyListeners(): java.awt.event.KeyListener[]
      public addMouseListener(arg0: java.awt.event.MouseListener): void
      public removeMouseListener(arg0: java.awt.event.MouseListener): void
      public getMouseListeners(): java.awt.event.MouseListener[]
      public addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
      public removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
      public getMouseMotionListeners(): java.awt.event.MouseMotionListener[]
      public addMouseWheelListener(arg0: java.awt.event.MouseWheelListener): void
      public removeMouseWheelListener(arg0: java.awt.event.MouseWheelListener): void
      public getMouseWheelListeners(): java.awt.event.MouseWheelListener[]
      public addInputMethodListener(arg0: java.awt.event.InputMethodListener): void
      public removeInputMethodListener(arg0: java.awt.event.InputMethodListener): void
      public getInputMethodListeners(): java.awt.event.InputMethodListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      public getInputMethodRequests(): java.awt.im.InputMethodRequests
      public getInputContext(): java.awt.im.InputContext
      protected enableEvents(arg0: long): void
      protected disableEvents(arg0: long): void
      isCoalescingEnabled(): boolean
      protected coalesceEvents(arg0: java.awt.AWTEvent, arg1: java.awt.AWTEvent): java.awt.AWTEvent
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processComponentEvent(arg0: java.awt.event.ComponentEvent): void
      protected processFocusEvent(arg0: java.awt.event.FocusEvent): void
      protected processKeyEvent(arg0: java.awt.event.KeyEvent): void
      protected processMouseEvent(arg0: java.awt.event.MouseEvent): void
      protected processMouseMotionEvent(arg0: java.awt.event.MouseEvent): void
      protected processMouseWheelEvent(arg0: java.awt.event.MouseWheelEvent): void
      postsOldMouseEvents(): boolean
      protected processInputMethodEvent(arg0: java.awt.event.InputMethodEvent): void
      protected processHierarchyEvent(arg0: java.awt.event.HierarchyEvent): void
      protected processHierarchyBoundsEvent(arg0: java.awt.event.HierarchyEvent): void
      public handleEvent(arg0: java.awt.Event): boolean
      public mouseDown(arg0: java.awt.Event, arg1: int, arg2: int): boolean
      public mouseDrag(arg0: java.awt.Event, arg1: int, arg2: int): boolean
      public mouseUp(arg0: java.awt.Event, arg1: int, arg2: int): boolean
      public mouseMove(arg0: java.awt.Event, arg1: int, arg2: int): boolean
      public mouseEnter(arg0: java.awt.Event, arg1: int, arg2: int): boolean
      public mouseExit(arg0: java.awt.Event, arg1: int, arg2: int): boolean
      public keyDown(arg0: java.awt.Event, arg1: int): boolean
      public keyUp(arg0: java.awt.Event, arg1: int): boolean
      public action(arg0: java.awt.Event, arg1: java.lang.Object): boolean
      public addNotify(): void
      public removeNotify(): void
      public gotFocus(arg0: java.awt.Event, arg1: java.lang.Object): boolean
      public lostFocus(arg0: java.awt.Event, arg1: java.lang.Object): boolean
      public isFocusTraversable(): boolean
      public isFocusable(): boolean
      public setFocusable(arg0: boolean): void
      isFocusTraversableOverridden(): boolean
      public setFocusTraversalKeys(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
      public getFocusTraversalKeys(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
      setFocusTraversalKeys_NoIDCheck(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
      getFocusTraversalKeys_NoIDCheck(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
      public areFocusTraversalKeysSet(arg0: int): boolean
      public setFocusTraversalKeysEnabled(arg0: boolean): void
      public getFocusTraversalKeysEnabled(): boolean
      public requestFocus(): void
      public requestFocus(arg0: java.awt.event.FocusEvent$Cause): void
      protected requestFocus(arg0: boolean): boolean
      protected requestFocus(arg0: boolean, arg1: java.awt.event.FocusEvent$Cause): boolean
      public requestFocusInWindow(): boolean
      public requestFocusInWindow(arg0: java.awt.event.FocusEvent$Cause): boolean
      protected requestFocusInWindow(arg0: boolean): boolean
      requestFocusInWindow(arg0: boolean, arg1: java.awt.event.FocusEvent$Cause): boolean
      requestFocusHelper(arg0: boolean, arg1: boolean): boolean
      requestFocusHelper(arg0: boolean, arg1: boolean, arg2: java.awt.event.FocusEvent$Cause): boolean
      static setRequestFocusController(arg0: sun.awt.RequestFocusController): void
      public getFocusCycleRootAncestor(): java.awt.Container
      public isFocusCycleRoot(arg0: java.awt.Container): boolean
      getTraversalRoot(): java.awt.Container
      public transferFocus(): void
      public nextFocus(): void
      transferFocus(arg0: boolean): boolean
      getNextFocusCandidate(): java.awt.Component
      public transferFocusBackward(): void
      transferFocusBackward(arg0: boolean): boolean
      public transferFocusUpCycle(): void
      public hasFocus(): boolean
      public isFocusOwner(): boolean
      setAutoFocusTransferOnDisposal(arg0: boolean): void
      isAutoFocusTransferOnDisposal(): boolean
      public add(arg0: java.awt.PopupMenu): void
      public remove(arg0: java.awt.MenuComponent): void
      protected paramString(): java.lang.String
      public toString(): java.lang.String
      public list(): void
      public list(arg0: java.io.PrintStream): void
      public list(arg0: java.io.PrintStream, arg1: int): void
      public list(arg0: java.io.PrintWriter): void
      public list(arg0: java.io.PrintWriter, arg1: int): void
      getNativeContainer(): java.awt.Container
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      public addPropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(arg0: java.lang.String): java.beans.PropertyChangeListener[]
      protected firePropertyChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
      protected firePropertyChange(arg0: java.lang.String, arg1: boolean, arg2: boolean): void
      protected firePropertyChange(arg0: java.lang.String, arg1: int, arg2: int): void
      public firePropertyChange(arg0: java.lang.String, arg1: byte, arg2: byte): void
      public firePropertyChange(arg0: java.lang.String, arg1: char, arg2: char): void
      public firePropertyChange(arg0: java.lang.String, arg1: short, arg2: short): void
      public firePropertyChange(arg0: java.lang.String, arg1: long, arg2: long): void
      public firePropertyChange(arg0: java.lang.String, arg1: float, arg2: float): void
      public firePropertyChange(arg0: java.lang.String, arg1: double, arg2: double): void
      public setComponentOrientation(arg0: java.awt.ComponentOrientation): void
      public getComponentOrientation(): java.awt.ComponentOrientation
      public applyComponentOrientation(arg0: java.awt.ComponentOrientation): void
      canBeFocusOwner(): boolean
      canBeFocusOwnerRecursively(): boolean
      relocateComponent(): void
      getContainingWindow(): java.awt.Window
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      getAccessibleIndexInParent(): int
      getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
      static isInstanceOf(arg0: java.lang.Object, arg1: java.lang.String): boolean
      areBoundsValid(): boolean
      applyCompoundShape(arg0: sun.java2d.pipe.Region): void
      getLocationOnWindow(): java.awt.Point
      getNormalShape(): sun.java2d.pipe.Region
      getOpaqueShape(): sun.java2d.pipe.Region
      getSiblingIndexAbove(): int
      getHWPeerAboveMe(): java.awt.peer.ComponentPeer
      getSiblingIndexBelow(): int
      isNonOpaqueForMixing(): boolean
      applyCurrentShape(): void
      subtractAndApplyShape(arg0: sun.java2d.pipe.Region): void
      subtractAndApplyShapeBelowMe(): void
      mixOnShowing(): void
      mixOnHiding(arg0: boolean): void
      mixOnReshaping(): void
      mixOnZOrderChanging(arg0: int, arg1: int): void
      mixOnValidating(): void
      isMixingNeeded(): boolean
      public setMixingCutoutShape(arg0: java.awt.Shape): void
      updateZOrder(): void
    }

  }
}
