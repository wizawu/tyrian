declare namespace javax {
  namespace swing {
    namespace plaf {

      abstract class TextUI extends javax.swing.plaf.ComponentUI {
        public constructor()
        public abstract modelToView(arg0: javax.swing.text.JTextComponent, arg1: int): java.awt.Rectangle
        public abstract modelToView(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias): java.awt.Rectangle
        public modelToView2D(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias): java.awt.geom.Rectangle2D
        public abstract viewToModel(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): int
        public abstract viewToModel(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point, arg2: javax.swing.text.Position$Bias[]): int
        public viewToModel2D(arg0: javax.swing.text.JTextComponent, arg1: java.awt.geom.Point2D, arg2: javax.swing.text.Position$Bias[]): int
        public abstract getNextVisualPositionFrom(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
        public abstract damageRange(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int): void
        public abstract damageRange(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: javax.swing.text.Position$Bias): void
        public abstract getEditorKit(arg0: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
        public abstract getRootView(arg0: javax.swing.text.JTextComponent): javax.swing.text.View
        public getToolTipText(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): java.lang.String
        public getToolTipText2D(arg0: javax.swing.text.JTextComponent, arg1: java.awt.geom.Point2D): java.lang.String
      }

    }
  }
}
