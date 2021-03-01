declare namespace java {
  namespace awt {

    class Choice extends java.awt.Component implements java.awt.ItemSelectable, javax.accessibility.Accessible {

      pItems: java.util.Vector<java.lang.String>
      selectedIndex: int
      itemListener: java.awt.event.ItemListener
      public constructor()
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getItemCount(): int
      public countItems(): int
      public getItem(arg0: int): java.lang.String
      readonly getItemImpl(arg0: int): java.lang.String
      public add(arg0: java.lang.String): void
      public addItem(arg0: java.lang.String): void
      public insert(arg0: java.lang.String, arg1: int): void
      public remove(arg0: java.lang.String): void
      public remove(arg0: int): void
      public removeAll(): void
      public getSelectedItem(): java.lang.String
      public getSelectedObjects(): java.lang.Object[]
      public getSelectedIndex(): int
      public select(arg0: int): void
      public select(arg0: java.lang.String): void
      public addItemListener(arg0: java.awt.event.ItemListener): void
      public removeItemListener(arg0: java.awt.event.ItemListener): void
      public getItemListeners(): java.awt.event.ItemListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processItemEvent(arg0: java.awt.event.ItemEvent): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
