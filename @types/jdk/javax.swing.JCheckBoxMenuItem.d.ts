declare namespace javax {
  namespace swing {

    class JCheckBoxMenuItem extends javax.swing.JMenuItem implements javax.swing.SwingConstants, javax.accessibility.Accessible {
      public constructor()
      public constructor(arg0: javax.swing.Icon)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: javax.swing.Action)
      public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon)
      public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: boolean | java.lang.Boolean)
      public getUIClassID(): java.lang.String
      public getState(): boolean
      public setState(arg0: boolean | java.lang.Boolean): void
      public getSelectedObjects(): java.lang.Object[]
      protected paramString(): java.lang.String
      shouldUpdateSelectedStateFromAction(): boolean
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
