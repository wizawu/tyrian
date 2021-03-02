declare namespace javax {
  namespace swing {
    namespace plaf {

      abstract class ComponentUI {
        public constructor()
        public installUI(arg0: javax.swing.JComponent): void
        public uninstallUI(arg0: javax.swing.JComponent): void
        public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
        public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
        public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
        public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        public contains(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
        public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
        public getBaseline(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
        public getAccessibleChildrenCount(arg0: javax.swing.JComponent): number
        public getAccessibleChild(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): javax.accessibility.Accessible
      }

    }
  }
}
