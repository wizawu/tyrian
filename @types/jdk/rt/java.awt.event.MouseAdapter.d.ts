declare namespace java {
    namespace awt {
        namespace event {
            abstract class MouseAdapter implements java.awt.event.MouseListener , java.awt.event.MouseWheelListener , java.awt.event.MouseMotionListener {
                public constructor()
                public mouseClicked(arg0: java.awt.event.MouseEvent): void
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public mouseReleased(arg0: java.awt.event.MouseEvent): void
                public mouseEntered(arg0: java.awt.event.MouseEvent): void
                public mouseExited(arg0: java.awt.event.MouseEvent): void
                public mouseWheelMoved(arg0: java.awt.event.MouseWheelEvent): void
                public mouseDragged(arg0: java.awt.event.MouseEvent): void
                public mouseMoved(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}