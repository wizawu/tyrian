declare namespace javax {
  namespace swing {

    class Box extends javax.swing.JComponent implements javax.accessibility.Accessible {

      public constructor(arg0: int)
      public static createHorizontalBox(): javax.swing.Box
      public static createVerticalBox(): javax.swing.Box
      public static createRigidArea(arg0: java.awt.Dimension): java.awt.Component
      public static createHorizontalStrut(arg0: int): java.awt.Component
      public static createVerticalStrut(arg0: int): java.awt.Component
      public static createGlue(): java.awt.Component
      public static createHorizontalGlue(): java.awt.Component
      public static createVerticalGlue(): java.awt.Component
      public setLayout(arg0: java.awt.LayoutManager): void
      protected paintComponent(arg0: java.awt.Graphics): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
