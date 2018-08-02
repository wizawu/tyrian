declare namespace java {
    namespace awt {
        namespace dnd {
            class DragSourceContext implements java.awt.dnd.DragSourceListener , java.awt.dnd.DragSourceMotionListener , java.io.Serializable {
                protected static DEFAULT: int
                protected static ENTER: int
                protected static OVER: int
                protected static CHANGED: int
                public constructor(arg0: java.awt.dnd.peer.DragSourceContextPeer, arg1: java.awt.dnd.DragGestureEvent, arg2: java.awt.Cursor, arg3: java.awt.Image, arg4: java.awt.Point, arg5: java.awt.datatransfer.Transferable, arg6: java.awt.dnd.DragSourceListener)
                public getDragSource(): java.awt.dnd.DragSource
                public getComponent(): java.awt.Component
                public getTrigger(): java.awt.dnd.DragGestureEvent
                public getSourceActions(): int
                public setCursor(arg0: java.awt.Cursor): void
                public getCursor(): java.awt.Cursor
                public addDragSourceListener(arg0: java.awt.dnd.DragSourceListener): void
                public removeDragSourceListener(arg0: java.awt.dnd.DragSourceListener): void
                public transferablesFlavorsChanged(): void
                public dragEnter(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragOver(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragExit(arg0: java.awt.dnd.DragSourceEvent): void
                public dropActionChanged(arg0: java.awt.dnd.DragSourceDragEvent): void
                public dragDropEnd(arg0: java.awt.dnd.DragSourceDropEvent): void
                public dragMouseMoved(arg0: java.awt.dnd.DragSourceDragEvent): void
                public getTransferable(): java.awt.datatransfer.Transferable
                protected updateCurrentCursor(arg0: int, arg1: int, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}