declare namespace javax {
  namespace swing {
    class CellRendererPane extends java.awt.Container implements javax.accessibility.Accessible {
      protected accessibleContext: javax.accessibility.AccessibleContext
      public constructor()
      public invalidate(): void
      public paint(arg0: java.awt.Graphics): void
      public update(arg0: java.awt.Graphics): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public paintComponent(
        arg0: java.awt.Graphics,
        arg1: java.awt.Component,
        arg2: java.awt.Container,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer,
        arg7: boolean | java.lang.Boolean
      ): void
      public paintComponent(
        arg0: java.awt.Graphics,
        arg1: java.awt.Component,
        arg2: java.awt.Container,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer
      ): void
      public paintComponent(
        arg0: java.awt.Graphics,
        arg1: java.awt.Component,
        arg2: java.awt.Container,
        arg3: java.awt.Rectangle
      ): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
