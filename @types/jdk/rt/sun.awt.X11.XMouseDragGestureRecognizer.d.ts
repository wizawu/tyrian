declare namespace sun {
    namespace awt {
        namespace X11 {
            class XMouseDragGestureRecognizer extends java.awt.dnd.MouseDragGestureRecognizer {
                protected static motionThreshold: int
                protected static readonly ButtonMask: int
                protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component, arg2: int, arg3: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda)
                protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component, arg2: int)
                protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component)
                protected constructor(arg0: java.awt.dnd.DragSource)
                protected mapDragOperationFromModifiers(arg0: java.awt.event.MouseEvent): int
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