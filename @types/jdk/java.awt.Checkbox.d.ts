declare namespace java {
  namespace awt {

    class Checkbox extends java.awt.Component implements java.awt.ItemSelectable, javax.accessibility.Accessible {
      label: java.lang.String
      state: boolean
      group: java.awt.CheckboxGroup
      itemListener: java.awt.event.ItemListener
      setStateInternal(arg0: boolean): void
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: boolean)
      public constructor(arg0: java.lang.String, arg1: boolean, arg2: java.awt.CheckboxGroup)
      public constructor(arg0: java.lang.String, arg1: java.awt.CheckboxGroup, arg2: boolean)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getLabel(): java.lang.String
      public setLabel(arg0: java.lang.String): void
      public getState(): boolean
      public setState(arg0: boolean): void
      public getSelectedObjects(): java.lang.Object[]
      public getCheckboxGroup(): java.awt.CheckboxGroup
      public setCheckboxGroup(arg0: java.awt.CheckboxGroup): void
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
