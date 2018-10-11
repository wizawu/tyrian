declare namespace sun {
    namespace swing {
        class JLightweightFrame extends sun.awt.LightweightFrame implements javax.swing.RootPaneContainer {
            public constructor()
            public dispose(): void
            public setContent(arg0: sun.swing.LightweightContent): void
            public getGraphics(): java.awt.Graphics
            public grabFocus(): void
            public ungrabFocus(): void
            public getScaleFactor(): int
            public notifyDisplayChanged(arg0: int): void
            public addNotify(): void
            public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getRootPane(): javax.swing.JRootPane
            public setContentPane(arg0: java.awt.Container): void
            public getContentPane(): java.awt.Container
            public setLayeredPane(arg0: javax.swing.JLayeredPane): void
            public getLayeredPane(): javax.swing.JLayeredPane
            public setGlassPane(arg0: java.awt.Component): void
            public getGlassPane(): java.awt.Component
            public overrideNativeWindowHandle(arg0: long, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
            public createDragSourceContextPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            public addDropTarget<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DropTarget): void
            public removeDropTarget<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.dnd.DropTarget): void
            public static class: java.lang.Class<any>
        }
    }
}