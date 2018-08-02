declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace motif {
class MotifTabbedPaneUI extends javax.swing.plaf.basic.BasicTabbedPaneUI {
    protected unselectedTabBackground: java.awt.Color
    protected unselectedTabForeground: java.awt.Color
    protected unselectedTabShadow: java.awt.Color
    protected unselectedTabHighlight: java.awt.Color
    public constructor()
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    protected installDefaults(): void
    protected uninstallDefaults(): void
    protected paintContentBorderTopEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    protected paintContentBorderBottomEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    protected paintContentBorderRightEdge(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    protected paintTabBackground(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): void
    protected paintTabBorder(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): void
    protected paintFocusIndicator(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Rectangle[], arg3: int, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle, arg6: boolean): void
    protected getTabRunIndent(arg0: int, arg1: int): int
    protected getTabRunOverlay(arg0: int): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}