declare namespace sun {
    namespace awt {
        abstract class LightweightFrame extends java.awt.Frame {
            public constructor()
            public getParent(): java.awt.Container
            public getGraphics(): java.awt.Graphics
            public isResizable(): boolean
            public setTitle(arg0: java.lang.String | string): void
            public setIconImage(arg0: java.awt.Image): void
            public setIconImages(arg0: java.util.List<java.awt.Image>): void
            public setMenuBar(arg0: java.awt.MenuBar): void
            public setResizable(arg0: boolean): void
            public remove(arg0: java.awt.MenuComponent): void
            public toFront(): void
            public toBack(): void
            public addNotify(): void
            public emulateActivation(arg0: boolean): void
            public abstract grabFocus(): void
            public abstract ungrabFocus(): void
            public abstract getScaleFactor(): int
            public abstract notifyDisplayChanged(arg0: int): void
            public getHostBounds(): java.awt.Rectangle
            public setHostBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
            public abstract createDragSourceContextPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            public abstract addDropTarget<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DropTarget): void
            public abstract removeDropTarget<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DropTarget): void
            public static class: java.lang.Class<any>
        }
    }
}