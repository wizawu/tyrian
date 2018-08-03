declare namespace javax {
    namespace swing {
        namespace plaf {
            abstract class SplitPaneUI extends javax.swing.plaf.ComponentUI {
                public constructor()
                public abstract resetToPreferredSizes(arg0: javax.swing.JSplitPane): void
                public abstract setDividerLocation(arg0: javax.swing.JSplitPane, arg1: int): void
                public abstract getDividerLocation(arg0: javax.swing.JSplitPane): int
                public abstract getMinimumDividerLocation(arg0: javax.swing.JSplitPane): int
                public abstract getMaximumDividerLocation(arg0: javax.swing.JSplitPane): int
                public abstract finishedPaintingChildren(arg0: javax.swing.JSplitPane, arg1: java.awt.Graphics): void
                public static class: java.lang.Class<any>
            }
        }
    }
}