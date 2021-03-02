declare namespace javax {
  namespace swing {
    namespace plaf {

      abstract class TabbedPaneUI extends javax.swing.plaf.ComponentUI {
        public constructor()
        public abstract tabForCoordinate(arg0: javax.swing.JTabbedPane, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public abstract getTabBounds(arg0: javax.swing.JTabbedPane, arg1: number | java.lang.Integer): java.awt.Rectangle
        public abstract getTabRunCount(arg0: javax.swing.JTabbedPane): number
      }

    }
  }
}
