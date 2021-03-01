declare namespace java {
  namespace awt {

    abstract class MenuComponent implements java.io.Serializable {

      peer: java.awt.peer.MenuComponentPeer
      parent: java.awt.MenuContainer
      newEventsOnly: boolean
      static readonly actionListenerK: java.lang.String
      static readonly itemListenerK: java.lang.String
      accessibleContext: javax.accessibility.AccessibleContext
      readonly getAccessControlContext(): java.security.AccessControlContext
      public constructor()
      constructComponentName(): java.lang.String
      readonly getComponentFactory(): sun.awt.ComponentFactory
      public getName(): java.lang.String
      public setName(arg0: java.lang.String): void
      public getParent(): java.awt.MenuContainer
      readonly getParent_NoClientCode(): java.awt.MenuContainer
      public getFont(): java.awt.Font
      readonly getFont_NoClientCode(): java.awt.Font
      public setFont(arg0: java.awt.Font): void
      public removeNotify(): void
      public postEvent(arg0: java.awt.Event): boolean
      public readonly dispatchEvent(arg0: java.awt.AWTEvent): void
      dispatchEventImpl(arg0: java.awt.AWTEvent): void
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected paramString(): java.lang.String
      public toString(): java.lang.String
      protected readonly getTreeLock(): java.lang.Object
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      getAccessibleIndexInParent(): int
      getAccessibleChildIndex(arg0: java.awt.MenuComponent): int
      getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
    }

  }
}
