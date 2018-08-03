declare namespace javax {
    namespace swing {
        namespace plaf {
            abstract class ListUI extends javax.swing.plaf.ComponentUI {
                public constructor()
                public abstract locationToIndex(arg0: javax.swing.JList, arg1: java.awt.Point): int
                public abstract indexToLocation(arg0: javax.swing.JList, arg1: int): java.awt.Point
                public abstract getCellBounds(arg0: javax.swing.JList, arg1: int, arg2: int): java.awt.Rectangle
                public static class: java.lang.Class<any>
            }
        }
    }
}