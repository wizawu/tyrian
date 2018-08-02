declare namespace java {
    namespace awt {
        namespace dnd {
            class DnDEventMulticaster extends java.awt.AWTEventMulticaster implements java.awt.dnd.DragSourceListener , java.awt.dnd.DragSourceMotionListener {
                protected constructor(arg0: java.util.EventListener, arg1: java.util.EventListener)
                public dragEnter(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragOver(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dropActionChanged(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragExit(arg0: java.awt.dnd.DragSourceEvent): void
                public dragDropEnd(arg0: java.awt.dnd.DragSourceDropEvent): void
                public dragMouseMoved(arg0: java.awt.dnd.DragSourceDragEvent): void
                public static add(arg0: java.awt.dnd.DragSourceListener, arg1: java.awt.dnd.DragSourceListener): java.awt.dnd.DragSourceListener
                public static add(arg0: java.awt.dnd.DragSourceMotionListener, arg1: java.awt.dnd.DragSourceMotionListener): java.awt.dnd.DragSourceMotionListener
                public static remove(arg0: java.awt.dnd.DragSourceListener, arg1: java.awt.dnd.DragSourceListener): java.awt.dnd.DragSourceListener
                public static remove(arg0: java.awt.dnd.DragSourceMotionListener, arg1: java.awt.dnd.DragSourceMotionListener): java.awt.dnd.DragSourceMotionListener
                protected static addInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                protected remove(arg0: java.util.EventListener): java.util.EventListener
                protected static removeInternal(arg0: java.util.EventListener, arg1: java.util.EventListener): java.util.EventListener
                protected static save(arg0: java.io.ObjectOutputStream, arg1: java.lang.String | string, arg2: java.util.EventListener): void
                public static class: java.lang.Class<any>
            }
        }
    }
}