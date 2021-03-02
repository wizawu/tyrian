declare namespace javax {
  namespace swing {

    class JToolTip extends javax.swing.JComponent implements javax.accessibility.Accessible {
      tipText: java.lang.String
      component: javax.swing.JComponent
      public constructor()
      public getUI(): javax.swing.plaf.ToolTipUI
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public setTipText(arg0: java.lang.String | string): void
      public getTipText(): java.lang.String
      public setComponent(arg0: javax.swing.JComponent): void
      public getComponent(): javax.swing.JComponent
      alwaysOnTop(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
