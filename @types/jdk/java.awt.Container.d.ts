declare namespace java {
  namespace awt {

    class Container extends java.awt.Component {
      layoutMgr: java.awt.LayoutManager
      containerListener: java.awt.event.ContainerListener
      listeningChildren: int
      listeningBoundsChildren: int
      descendantsCount: int
      preserveBackgroundColor: java.awt.Color
      static readonly INCLUDE_SELF: boolean
      static readonly SEARCH_HEAVYWEIGHTS: boolean
      modalComp: java.awt.Component
      modalAppContext: sun.awt.AppContext
      public constructor()
      initializeFocusTraversalKeys(): void
      public getComponentCount(): int
      public countComponents(): int
      public getComponent(arg0: int): java.awt.Component
      public getComponents(): java.awt.Component[]
      getComponents_NoClientCode(): java.awt.Component[]
      getComponentsSync(): java.awt.Component[]
      public getInsets(): java.awt.Insets
      public insets(): java.awt.Insets
      public add(arg0: java.awt.Component): java.awt.Component
      public add(arg0: java.lang.String, arg1: java.awt.Component): java.awt.Component
      public add(arg0: java.awt.Component, arg1: int): java.awt.Component
      canContainFocusOwner(arg0: java.awt.Component): boolean
      hasHeavyweightDescendants(): boolean
      hasLightweightDescendants(): boolean
      getHeavyweightContainer(): java.awt.Container
      public setComponentZOrder(arg0: java.awt.Component, arg1: int): void
      public getComponentZOrder(arg0: java.awt.Component): int
      public add(arg0: java.awt.Component, arg1: java.lang.Object): void
      public add(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
      updateChildGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
      checkGD(arg0: java.lang.String): void
      public remove(arg0: int): void
      public remove(arg0: java.awt.Component): void
      public removeAll(): void
      numListening(arg0: long): int
      adjustListeningChildren(arg0: long, arg1: int): void
      adjustDescendants(arg0: int): void
      adjustDescendantsOnParent(arg0: int): void
      countHierarchyMembers(): int
      createHierarchyEvents(arg0: int, arg1: java.awt.Component, arg2: java.awt.Container, arg3: long, arg4: boolean): int
      createChildHierarchyEvents(arg0: int, arg1: long, arg2: boolean): void
      public getLayout(): java.awt.LayoutManager
      public setLayout(arg0: java.awt.LayoutManager): void
      public doLayout(): void
      public layout(): void
      public isValidateRoot(): boolean
      invalidateParent(): void
      public invalidate(): void
      public validate(): void
      validateUnconditionally(): void
      protected validateTree(): void
      invalidateTree(): void
      public setFont(arg0: java.awt.Font): void
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      public getMaximumSize(): java.awt.Dimension
      public getAlignmentX(): float
      public getAlignmentY(): float
      public paint(arg0: java.awt.Graphics): void
      public update(arg0: java.awt.Graphics): void
      public print(arg0: java.awt.Graphics): void
      public paintComponents(arg0: java.awt.Graphics): void
      lightweightPaint(arg0: java.awt.Graphics): void
      paintHeavyweightComponents(arg0: java.awt.Graphics): void
      public printComponents(arg0: java.awt.Graphics): void
      lightweightPrint(arg0: java.awt.Graphics): void
      printHeavyweightComponents(arg0: java.awt.Graphics): void
      public addContainerListener(arg0: java.awt.event.ContainerListener): void
      public removeContainerListener(arg0: java.awt.event.ContainerListener): void
      public getContainerListeners(): java.awt.event.ContainerListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processContainerEvent(arg0: java.awt.event.ContainerEvent): void
      dispatchEventImpl(arg0: java.awt.AWTEvent): void
      dispatchEventToSelf(arg0: java.awt.AWTEvent): void
      getMouseEventTarget(arg0: int, arg1: int, arg2: boolean): java.awt.Component
      getDropTargetEventTarget(arg0: int, arg1: int, arg2: boolean): java.awt.Component
      proxyEnableEvents(arg0: long): void
      public deliverEvent(arg0: java.awt.Event): void
      public getComponentAt(arg0: int, arg1: int): java.awt.Component
      public locate(arg0: int, arg1: int): java.awt.Component
      public getComponentAt(arg0: java.awt.Point): java.awt.Component
      public getMousePosition(arg0: boolean): java.awt.Point
      isSameOrAncestorOf(arg0: java.awt.Component, arg1: boolean): boolean
      public findComponentAt(arg0: int, arg1: int): java.awt.Component
      findComponentAt(arg0: int, arg1: int, arg2: boolean): java.awt.Component
      findComponentAtImpl(arg0: int, arg1: int, arg2: boolean): java.awt.Component
      public findComponentAt(arg0: java.awt.Point): java.awt.Component
      public addNotify(): void
      public removeNotify(): void
      public isAncestorOf(arg0: java.awt.Component): boolean
      protected paramString(): java.lang.String
      public list(arg0: java.io.PrintStream, arg1: int): void
      public list(arg0: java.io.PrintWriter, arg1: int): void
      public setFocusTraversalKeys(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
      public getFocusTraversalKeys(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
      public areFocusTraversalKeysSet(arg0: int): boolean
      public isFocusCycleRoot(arg0: java.awt.Container): boolean
      containsFocus(): boolean
      clearMostRecentFocusOwnerOnHide(): void
      clearCurrentFocusCycleRootOnHide(): void
      getTraversalRoot(): java.awt.Container
      public setFocusTraversalPolicy(arg0: java.awt.FocusTraversalPolicy): void
      public getFocusTraversalPolicy(): java.awt.FocusTraversalPolicy
      public isFocusTraversalPolicySet(): boolean
      public setFocusCycleRoot(arg0: boolean): void
      public isFocusCycleRoot(): boolean
      public setFocusTraversalPolicyProvider(arg0: boolean): void
      public isFocusTraversalPolicyProvider(): boolean
      public transferFocusDownCycle(): void
      preProcessKeyEvent(arg0: java.awt.event.KeyEvent): void
      postProcessKeyEvent(arg0: java.awt.event.KeyEvent): void
      postsOldMouseEvents(): boolean
      public applyComponentOrientation(arg0: java.awt.ComponentOrientation): void
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public addPropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
      getAccessibleChildrenCount(): int
      getAccessibleChild(arg0: int): javax.accessibility.Accessible
      increaseComponentCount(arg0: java.awt.Component): void
      decreaseComponentCount(arg0: java.awt.Component): void
      getOpaqueShape(): sun.java2d.pipe.Region
      recursiveSubtractAndApplyShape(arg0: sun.java2d.pipe.Region): void
      recursiveSubtractAndApplyShape(arg0: sun.java2d.pipe.Region, arg1: int): void
      recursiveSubtractAndApplyShape(arg0: sun.java2d.pipe.Region, arg1: int, arg2: int): void
      recursiveApplyCurrentShape(): void
      recursiveApplyCurrentShape(arg0: int): void
      recursiveApplyCurrentShape(arg0: int, arg1: int): void
      isRecursivelyVisibleUpToHeavyweightContainer(): boolean
      mixOnShowing(): void
      mixOnHiding(arg0: boolean): void
      mixOnReshaping(): void
      mixOnZOrderChanging(arg0: int, arg1: int): void
      mixOnValidating(): void
    }

  }
}
