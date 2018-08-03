declare namespace java {
    namespace awt {
        namespace dnd {
            class DragSource implements java.io.Serializable {
                public static DefaultCopyDrop: java.awt.Cursor
                public static DefaultMoveDrop: java.awt.Cursor
                public static DefaultLinkDrop: java.awt.Cursor
                public static DefaultCopyNoDrop: java.awt.Cursor
                public static DefaultMoveNoDrop: java.awt.Cursor
                public static DefaultLinkNoDrop: java.awt.Cursor
                public static getDefaultDragSource(): java.awt.dnd.DragSource
                public static isDragImageSupported(): boolean
                public constructor()
                public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.Image, arg3: java.awt.Point, arg4: java.awt.datatransfer.Transferable, arg5: java.awt.dnd.DragSourceListener, arg6: java.awt.datatransfer.FlavorMap): void
                public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.datatransfer.Transferable, arg3: java.awt.dnd.DragSourceListener, arg4: java.awt.datatransfer.FlavorMap): void
                public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.Image, arg3: java.awt.Point, arg4: java.awt.datatransfer.Transferable, arg5: java.awt.dnd.DragSourceListener): void
                public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.datatransfer.Transferable, arg3: java.awt.dnd.DragSourceListener): void
                protected createDragSourceContext(arg0: java.awt.dnd.peer.DragSourceContextPeer, arg1: java.awt.dnd.DragGestureEvent, arg2: java.awt.Cursor, arg3: java.awt.Image, arg4: java.awt.Point, arg5: java.awt.datatransfer.Transferable, arg6: java.awt.dnd.DragSourceListener): java.awt.dnd.DragSourceContext
                public getFlavorMap(): java.awt.datatransfer.FlavorMap
                public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.Component, arg2: int, arg3: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
                public createDefaultDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Component, arg1: int, arg2: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): java.awt.dnd.DragGestureRecognizer
                public addDragSourceListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragSourceListener): void
                public removeDragSourceListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragSourceListener): void
                public getDragSourceListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.dnd.DragSourceListener[]
                public addDragSourceMotionListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragSourceMotionListener | java.awt.dnd.DragSourceMotionListener$$Lambda): void
                public removeDragSourceMotionListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragSourceMotionListener | java.awt.dnd.DragSourceMotionListener$$Lambda): void
                public getDragSourceMotionListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.dnd.DragSourceMotionListener[]
                public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
                public static getDragThreshold<T extends java.util.EventListener>(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}