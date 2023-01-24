declare namespace javax {
  namespace swing {
    namespace plaf {
      abstract class ListUI extends javax.swing.plaf.ComponentUI {
        public constructor()
        public abstract locationToIndex(arg0: javax.swing.JList<unknown>, arg1: java.awt.Point): number
        public abstract indexToLocation(
          arg0: javax.swing.JList<unknown>,
          arg1: number | java.lang.Integer
        ): java.awt.Point
        public abstract getCellBounds(
          arg0: javax.swing.JList<unknown>,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.awt.Rectangle
      }
    }
  }
}
