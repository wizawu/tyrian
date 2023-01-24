declare namespace java {
  namespace awt {
    class Button extends java.awt.Component implements javax.accessibility.Accessible {
      label: java.lang.String
      actionCommand: java.lang.String
      actionListener: java.awt.event.ActionListener
      public constructor()
      public constructor(arg0: java.lang.String | string)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getLabel(): java.lang.String
      public setLabel(arg0: java.lang.String | string): void
      public setActionCommand(arg0: java.lang.String | string): void
      public getActionCommand(): java.lang.String
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processActionEvent(arg0: java.awt.event.ActionEvent): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
