declare namespace sun {
    namespace swing {
        interface LightweightContent {
            getComponent(): javax.swing.JComponent
            paintLock(): void
            paintUnlock(): void
            imageBufferReset(arg0: int[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
            imageBufferReset(arg0: int[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            imageReshaped(arg0: int, arg1: int, arg2: int, arg3: int): void
            imageUpdated(arg0: int, arg1: int, arg2: int, arg3: int): void
            focusGrabbed(): void
            focusUngrabbed(): void
            preferredSizeChanged(arg0: int, arg1: int): void
            maximumSizeChanged(arg0: int, arg1: int): void
            minimumSizeChanged(arg0: int, arg1: int): void
            setCursor(arg0: java.awt.Cursor): void
            createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
            createDragSourceContextPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            addDropTarget<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DropTarget): void
            removeDropTarget<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DropTarget): void
        }
    }
}