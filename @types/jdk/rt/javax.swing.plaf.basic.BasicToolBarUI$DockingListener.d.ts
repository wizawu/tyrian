declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicToolBarUI$DockingListener implements javax.swing.event.MouseInputListener {
                    protected toolBar: javax.swing.JToolBar
                    protected isDragging: boolean
                    protected origin: java.awt.Point
                    public constructor(arg0: javax.swing.plaf.basic.BasicToolBarUI, arg1: javax.swing.JToolBar | javax.swing.JToolBar$$Lambda)
                    public mouseClicked(arg0: java.awt.event.MouseEvent): void
                    public mousePressed(arg0: java.awt.event.MouseEvent): void
                    public mouseReleased(arg0: java.awt.event.MouseEvent): void
                    public mouseEntered(arg0: java.awt.event.MouseEvent): void
                    public mouseExited(arg0: java.awt.event.MouseEvent): void
                    public mouseDragged(arg0: java.awt.event.MouseEvent): void
                    public mouseMoved(arg0: java.awt.event.MouseEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}