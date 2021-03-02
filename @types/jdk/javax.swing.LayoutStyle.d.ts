declare namespace javax {
  namespace swing {

    abstract class LayoutStyle {
      public static setInstance(arg0: javax.swing.LayoutStyle): void
      public static getInstance(): javax.swing.LayoutStyle
      public constructor()
      public abstract getPreferredGap(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent, arg2: javax.swing.LayoutStyle$ComponentPlacement, arg3: number | java.lang.Integer, arg4: java.awt.Container): number
      public abstract getContainerGap(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: java.awt.Container): number
    }

  }
}
