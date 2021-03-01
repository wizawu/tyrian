declare namespace javax {
  namespace swing {

    abstract class LayoutStyle {

      public static setInstance(arg0: javax.swing.LayoutStyle): void
      public static getInstance(): javax.swing.LayoutStyle
      public constructor()
      public abstract getPreferredGap(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent, arg2: javax.swing.LayoutStyle$ComponentPlacement, arg3: int, arg4: java.awt.Container): int
      public abstract getContainerGap(arg0: javax.swing.JComponent, arg1: int, arg2: java.awt.Container): int
    }

  }
}
