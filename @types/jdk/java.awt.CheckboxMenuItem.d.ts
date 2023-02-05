declare namespace java {
  namespace awt {
    class CheckboxMenuItem
      extends java.awt.MenuItem
      implements java.awt.ItemSelectable, javax.accessibility.Accessible
    {
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getState(): boolean
      public setState(arg0: boolean | java.lang.Boolean): void
      public getSelectedObjects(): java.lang.Object[]
      public addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public getItemListeners(): java.awt.event.ItemListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processItemEvent(arg0: java.awt.event.ItemEvent): void
      doMenuEvent(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
      public paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
