declare namespace javax {
  namespace swing {
    namespace plaf {

      abstract class TabbedPaneUI extends javax.swing.plaf.ComponentUI {

        public constructor()
        public abstract tabForCoordinate(arg0: javax.swing.JTabbedPane, arg1: int, arg2: int): int
        public abstract getTabBounds(arg0: javax.swing.JTabbedPane, arg1: int): java.awt.Rectangle
        public abstract getTabRunCount(arg0: javax.swing.JTabbedPane): int
      }

    }
  }
}
