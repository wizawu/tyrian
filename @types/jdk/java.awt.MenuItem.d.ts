declare namespace java {
  namespace awt {

    class MenuItem extends java.awt.MenuComponent implements javax.accessibility.Accessible {
      label: java.lang.String
      eventMask: long
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.awt.MenuShortcut)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getLabel(): java.lang.String
      public setLabel(arg0: java.lang.String | string): void
      public isEnabled(): boolean
      public setEnabled(arg0: boolean | java.lang.Boolean): void
      public enable(): void
      public enable(arg0: boolean | java.lang.Boolean): void
      public disable(): void
      public getShortcut(): java.awt.MenuShortcut
      public setShortcut(arg0: java.awt.MenuShortcut): void
      public deleteShortcut(): void
      deleteShortcut(arg0: java.awt.MenuShortcut): void
      doMenuEvent(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
      handleShortcut(arg0: java.awt.event.KeyEvent): boolean
      getShortcutMenuItem(arg0: java.awt.MenuShortcut): java.awt.MenuItem
      protected enableEvents(arg0: number | java.lang.Long): void
      protected disableEvents(arg0: number | java.lang.Long): void
      public setActionCommand(arg0: java.lang.String | string): void
      public getActionCommand(): java.lang.String
      getActionCommandImpl(): java.lang.String
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      protected processEvent(arg0: java.awt.AWTEvent): void
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processActionEvent(arg0: java.awt.event.ActionEvent): void
      public paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
