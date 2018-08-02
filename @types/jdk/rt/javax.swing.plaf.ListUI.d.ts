declare namespace javax {
    namespace swing {
        namespace plaf {
            abstract class ListUI extends javax.swing.plaf.ComponentUI {
                public constructor()
                public locationToIndex(arg0: javax.swing.JList | javax.swing.JList$$Lambda, arg1: java.awt.Point): int
                public indexToLocation(arg0: javax.swing.JList | javax.swing.JList$$Lambda, arg1: int): java.awt.Point
                public getCellBounds(arg0: javax.swing.JList | javax.swing.JList$$Lambda, arg1: int, arg2: int): java.awt.Rectangle
                public static class: java.lang.Class<any>
            }
        }
    }
}