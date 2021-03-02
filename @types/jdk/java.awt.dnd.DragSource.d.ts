declare namespace java {
  namespace awt {
    namespace dnd {

      class DragSource implements java.io.Serializable {
        public static readonly DefaultCopyDrop: java.awt.Cursor
        public static readonly DefaultMoveDrop: java.awt.Cursor
        public static readonly DefaultLinkDrop: java.awt.Cursor
        public static readonly DefaultCopyNoDrop: java.awt.Cursor
        public static readonly DefaultMoveNoDrop: java.awt.Cursor
        public static readonly DefaultLinkNoDrop: java.awt.Cursor
        static readonly dragSourceListenerK: java.lang.String
        static readonly dragSourceMotionListenerK: java.lang.String
        public static getDefaultDragSource(): java.awt.dnd.DragSource
        public static isDragImageSupported(): boolean
        public constructor()
        public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.Image, arg3: java.awt.Point, arg4: java.awt.datatransfer.Transferable, arg5: java.awt.dnd.DragSourceListener, arg6: java.awt.datatransfer.FlavorMap): void
        public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.datatransfer.Transferable, arg3: java.awt.dnd.DragSourceListener, arg4: java.awt.datatransfer.FlavorMap): void
        public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.Image, arg3: java.awt.Point, arg4: java.awt.datatransfer.Transferable, arg5: java.awt.dnd.DragSourceListener): void
        public startDrag(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.datatransfer.Transferable, arg3: java.awt.dnd.DragSourceListener): void
        protected createDragSourceContext(arg0: java.awt.dnd.DragGestureEvent, arg1: java.awt.Cursor, arg2: java.awt.Image, arg3: java.awt.Point, arg4: java.awt.datatransfer.Transferable, arg5: java.awt.dnd.DragSourceListener): java.awt.dnd.DragSourceContext
        public getFlavorMap(): java.awt.datatransfer.FlavorMap
        public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.Component, arg2: int, arg3: java.awt.dnd.DragGestureListener): T
        public createDefaultDragGestureRecognizer(arg0: java.awt.Component, arg1: int, arg2: java.awt.dnd.DragGestureListener): java.awt.dnd.DragGestureRecognizer
        public addDragSourceListener(arg0: java.awt.dnd.DragSourceListener): void
        public removeDragSourceListener(arg0: java.awt.dnd.DragSourceListener): void
        public getDragSourceListeners(): java.awt.dnd.DragSourceListener[]
        public addDragSourceMotionListener(arg0: java.awt.dnd.DragSourceMotionListener): void
        public removeDragSourceMotionListener(arg0: java.awt.dnd.DragSourceMotionListener): void
        public getDragSourceMotionListeners(): java.awt.dnd.DragSourceMotionListener[]
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
        processDragEnter(arg0: java.awt.dnd.DragSourceDragEvent): void
        processDragOver(arg0: java.awt.dnd.DragSourceDragEvent): void
        processDropActionChanged(arg0: java.awt.dnd.DragSourceDragEvent): void
        processDragExit(arg0: java.awt.dnd.DragSourceEvent): void
        processDragDropEnd(arg0: java.awt.dnd.DragSourceDropEvent): void
        processDragMouseMoved(arg0: java.awt.dnd.DragSourceDragEvent): void
        public static getDragThreshold(): int
      }

    }
  }
}
