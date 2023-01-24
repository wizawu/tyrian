declare namespace java {
  namespace awt {
    class Choice extends java.awt.Component implements java.awt.ItemSelectable, javax.accessibility.Accessible {
      pItems: java.util.Vector<java.lang.String>
      selectedIndex: int
      itemListener: java.awt.event.ItemListener
      public constructor()
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getItemCount(): number
      public countItems(): number
      public getItem(arg0: number | java.lang.Integer): java.lang.String
      getItemImpl(arg0: number | java.lang.Integer): java.lang.String
      public add(arg0: java.lang.String | string): void
      public addItem(arg0: java.lang.String | string): void
      public insert(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public remove(arg0: java.lang.String | string): void
      public remove(arg0: number | java.lang.Integer): void
      public removeAll(): void
      public getSelectedItem(): java.lang.String
      public getSelectedObjects(): java.lang.Object[]
      public getSelectedIndex(): number
      public select(arg0: number | java.lang.Integer): void
      public select(arg0: java.lang.String | string): void
      public addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
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
