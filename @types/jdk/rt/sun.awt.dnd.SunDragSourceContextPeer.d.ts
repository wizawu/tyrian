declare namespace sun {
    namespace awt {
        namespace dnd {
            abstract class SunDragSourceContextPeer implements java.awt.dnd.peer.DragSourceContextPeer {
                protected static readonly DISPATCH_ENTER: int
                protected static readonly DISPATCH_MOTION: int
                protected static readonly DISPATCH_CHANGED: int
                protected static readonly DISPATCH_EXIT: int
                protected static readonly DISPATCH_FINISH: int
                protected static readonly DISPATCH_MOUSE_MOVED: int
                public constructor(arg0: java.awt.dnd.DragGestureEvent)
                public startSecondaryEventLoop(): void
                public quitSecondaryEventLoop(): void
                public startDrag(arg0: java.awt.dnd.DragSourceContext, arg1: java.awt.Cursor, arg2: java.awt.Image, arg3: java.awt.Point): void
                protected abstract startDrag(arg0: java.awt.datatransfer.Transferable, arg1: long[], arg2: java.util.Map): void
                public setCursor(arg0: java.awt.Cursor): void
                public getCursor(): java.awt.Cursor
                public getDragImage(): java.awt.Image
                public getDragImageOffset(): java.awt.Point
                protected abstract setNativeCursor(arg0: long, arg1: java.awt.Cursor, arg2: int): void
                protected setTrigger(arg0: java.awt.dnd.DragGestureEvent): void
                protected getTrigger(): java.awt.dnd.DragGestureEvent
                protected getComponent(): java.awt.Component
                protected setNativeContext(arg0: long): void
                protected getNativeContext(): long
                protected getDragSourceContext(): java.awt.dnd.DragSourceContext
                public transferablesFlavorsChanged(): void
                protected postDragSourceDragEvent(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                protected dragEnter(arg0: int, arg1: int, arg2: int, arg3: int): void
                protected dragExit(arg0: int, arg1: int): void
                protected dragDropFinished(arg0: boolean, arg1: int, arg2: int, arg3: int): void
                public static setDragDropInProgress(arg0: boolean): void
                public static checkEvent(arg0: java.awt.AWTEvent): boolean
                public static checkDragDropInProgress(): void
                public static convertModifiersToDropAction(arg0: int, arg1: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}