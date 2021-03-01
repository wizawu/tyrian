declare namespace java {
  namespace awt {

    abstract class KeyboardFocusManager implements java.awt.KeyEventDispatcher, java.awt.KeyEventPostProcessor {

      peer: java.awt.peer.KeyboardFocusManagerPeer
      public static readonly FORWARD_TRAVERSAL_KEYS: int
      public static readonly BACKWARD_TRAVERSAL_KEYS: int
      public static readonly UP_CYCLE_TRAVERSAL_KEYS: int
      public static readonly DOWN_CYCLE_TRAVERSAL_KEYS: int
      static readonly TRAVERSAL_KEY_LENGTH: int
      currentSequencedEvent: java.awt.SequencedEvent
      static readonly SNFH_FAILURE: int
      static readonly SNFH_SUCCESS_HANDLED: int
      static readonly SNFH_SUCCESS_PROCEED: int
      static readonly $assertionsDisabled: boolean
      public static getCurrentKeyboardFocusManager(): java.awt.KeyboardFocusManager
      static getCurrentKeyboardFocusManager(arg0: sun.awt.AppContext): java.awt.KeyboardFocusManager
      public static setCurrentKeyboardFocusManager(arg0: java.awt.KeyboardFocusManager): void
      readonly setCurrentSequencedEvent(arg0: java.awt.SequencedEvent): void
      readonly getCurrentSequencedEvent(): java.awt.SequencedEvent
      static initFocusTraversalKeysSet(arg0: java.lang.String, arg1: java.util.Set<java.awt.AWTKeyStroke>): java.util.Set<java.awt.AWTKeyStroke>
      public constructor()
      public getFocusOwner(): java.awt.Component
      protected getGlobalFocusOwner(): java.awt.Component
      protected setGlobalFocusOwner(arg0: java.awt.Component): void
      public clearFocusOwner(): void
      public clearGlobalFocusOwner(): void
      clearGlobalFocusOwnerPriv(): void
      getNativeFocusOwner(): java.awt.Component
      setNativeFocusOwner(arg0: java.awt.Component): void
      getNativeFocusedWindow(): java.awt.Window
      public getPermanentFocusOwner(): java.awt.Component
      protected getGlobalPermanentFocusOwner(): java.awt.Component
      protected setGlobalPermanentFocusOwner(arg0: java.awt.Component): void
      public getFocusedWindow(): java.awt.Window
      protected getGlobalFocusedWindow(): java.awt.Window
      protected setGlobalFocusedWindow(arg0: java.awt.Window): void
      public getActiveWindow(): java.awt.Window
      protected getGlobalActiveWindow(): java.awt.Window
      protected setGlobalActiveWindow(arg0: java.awt.Window): void
      public getDefaultFocusTraversalPolicy(): java.awt.FocusTraversalPolicy
      public setDefaultFocusTraversalPolicy(arg0: java.awt.FocusTraversalPolicy): void
      public setDefaultFocusTraversalKeys(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
      public getDefaultFocusTraversalKeys(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
      public getCurrentFocusCycleRoot(): java.awt.Container
      protected getGlobalCurrentFocusCycleRoot(): java.awt.Container
      public setGlobalCurrentFocusCycleRoot(arg0: java.awt.Container): void
      setGlobalCurrentFocusCycleRootPriv(arg0: java.awt.Container): void
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      public addPropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(arg0: java.lang.String): java.beans.PropertyChangeListener[]
      protected firePropertyChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
      public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
      public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
      public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
      public addVetoableChangeListener(arg0: java.lang.String, arg1: java.beans.VetoableChangeListener): void
      public removeVetoableChangeListener(arg0: java.lang.String, arg1: java.beans.VetoableChangeListener): void
      public getVetoableChangeListeners(arg0: java.lang.String): java.beans.VetoableChangeListener[]
      protected fireVetoableChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
      public addKeyEventDispatcher(arg0: java.awt.KeyEventDispatcher): void
      public removeKeyEventDispatcher(arg0: java.awt.KeyEventDispatcher): void
      protected getKeyEventDispatchers(): java.util.List<java.awt.KeyEventDispatcher>
      public addKeyEventPostProcessor(arg0: java.awt.KeyEventPostProcessor): void
      public removeKeyEventPostProcessor(arg0: java.awt.KeyEventPostProcessor): void
      protected getKeyEventPostProcessors(): java.util.List<java.awt.KeyEventPostProcessor>
      static setMostRecentFocusOwner(arg0: java.awt.Component): void
      static setMostRecentFocusOwner(arg0: java.awt.Window, arg1: java.awt.Component): void
      static clearMostRecentFocusOwner(arg0: java.awt.Component): void
      static getMostRecentFocusOwner(arg0: java.awt.Window): java.awt.Component
      public abstract dispatchEvent(arg0: java.awt.AWTEvent): boolean
      public readonly redispatchEvent(arg0: java.awt.Component, arg1: java.awt.AWTEvent): void
      public abstract dispatchKeyEvent(arg0: java.awt.event.KeyEvent): boolean
      public abstract postProcessKeyEvent(arg0: java.awt.event.KeyEvent): boolean
      public abstract processKeyEvent(arg0: java.awt.Component, arg1: java.awt.event.KeyEvent): void
      protected abstract enqueueKeyEvents(arg0: long, arg1: java.awt.Component): void
      protected abstract dequeueKeyEvents(arg0: long, arg1: java.awt.Component): void
      protected abstract discardKeyEvents(arg0: java.awt.Component): void
      public abstract focusNextComponent(arg0: java.awt.Component): void
      public abstract focusPreviousComponent(arg0: java.awt.Component): void
      public abstract upFocusCycle(arg0: java.awt.Component): void
      public abstract downFocusCycle(arg0: java.awt.Container): void
      public readonly focusNextComponent(): void
      public readonly focusPreviousComponent(): void
      public readonly upFocusCycle(): void
      public readonly downFocusCycle(): void
      dumpRequests(): void
      static processSynchronousLightweightTransfer(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long): boolean
      static shouldNativelyFocusHeavyweight(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long, arg5: java.awt.event.FocusEvent$Cause): int
      static markClearGlobalFocusOwner(): java.awt.Window
      getCurrentWaitingRequest(arg0: java.awt.Component): java.awt.Component
      static isAutoFocusTransferEnabled(): boolean
      static isAutoFocusTransferEnabledFor(arg0: java.awt.Component): boolean
      static processCurrentLightweightRequests(): void
      static retargetUnexpectedFocusEvent(arg0: java.awt.event.FocusEvent): java.awt.event.FocusEvent
      static retargetFocusGained(arg0: java.awt.event.FocusEvent): java.awt.event.FocusEvent
      static retargetFocusLost(arg0: java.awt.event.FocusEvent): java.awt.event.FocusEvent
      static retargetFocusEvent(arg0: java.awt.AWTEvent): java.awt.AWTEvent
      clearMarkers(): void
      static removeFirstRequest(): boolean
      static removeLastFocusRequest(arg0: java.awt.Component): void
      static getHeavyweight(arg0: java.awt.Component): java.awt.Component
      static isProxyActive(arg0: java.awt.event.KeyEvent): boolean
    }

  }
}
