declare namespace java {
    namespace awt {
        namespace dnd {
            abstract class DragSourceAdapter implements java.awt.dnd.DragSourceListener , java.awt.dnd.DragSourceMotionListener {
                public constructor()
                public dragEnter(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragOver(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragMouseMoved(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dropActionChanged(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragExit(arg0: java.awt.dnd.DragSourceEvent): void
                public dragDropEnd(arg0: java.awt.dnd.DragSourceDropEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}