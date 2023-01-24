declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {
        class MultiTextUI extends javax.swing.plaf.TextUI {
          protected uis: java.util.Vector<javax.swing.plaf.ComponentUI>
          public constructor()
          public getUIs(): javax.swing.plaf.ComponentUI[]
          public getToolTipText(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): java.lang.String
          public modelToView(
            arg0: javax.swing.text.JTextComponent,
            arg1: number | java.lang.Integer
          ): java.awt.Rectangle
          public modelToView(
            arg0: javax.swing.text.JTextComponent,
            arg1: number | java.lang.Integer,
            arg2: javax.swing.text.Position$Bias
          ): java.awt.Rectangle
          public modelToView2D(
            arg0: javax.swing.text.JTextComponent,
            arg1: number | java.lang.Integer,
            arg2: javax.swing.text.Position$Bias
          ): java.awt.geom.Rectangle2D
          public viewToModel(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): number
          public viewToModel(
            arg0: javax.swing.text.JTextComponent,
            arg1: java.awt.Point,
            arg2: javax.swing.text.Position$Bias[]
          ): number
          public viewToModel2D(
            arg0: javax.swing.text.JTextComponent,
            arg1: java.awt.geom.Point2D,
            arg2: javax.swing.text.Position$Bias[]
          ): number
          public getNextVisualPositionFrom(
            arg0: javax.swing.text.JTextComponent,
            arg1: number | java.lang.Integer,
            arg2: javax.swing.text.Position$Bias,
            arg3: number | java.lang.Integer,
            arg4: javax.swing.text.Position$Bias[]
          ): number
          public damageRange(
            arg0: javax.swing.text.JTextComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): void
          public damageRange(
            arg0: javax.swing.text.JTextComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: javax.swing.text.Position$Bias,
            arg4: javax.swing.text.Position$Bias
          ): void
          public getEditorKit(arg0: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
          public getRootView(arg0: javax.swing.text.JTextComponent): javax.swing.text.View
          public contains(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getAccessibleChildrenCount(arg0: javax.swing.JComponent): number
          public getAccessibleChild(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer
          ): javax.accessibility.Accessible
        }
      }
    }
  }
}
