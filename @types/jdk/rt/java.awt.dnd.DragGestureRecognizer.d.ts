declare namespace java {
    namespace awt {
        namespace dnd {
            abstract class DragGestureRecognizer implements java.io.Serializable {
                protected dragSource: java.awt.dnd.DragSource
                protected component: java.awt.Component
                protected dragGestureListener: java.awt.dnd.DragGestureListener
                protected sourceActions: int
                protected events: java.util.ArrayList<java.awt.event.InputEvent>
                protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component, arg2: int, arg3: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda)
                protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component, arg2: int)
                protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component)
                protected constructor(arg0: java.awt.dnd.DragSource)
                protected registerListeners(): void
                protected unregisterListeners(): void
                public getDragSource(): java.awt.dnd.DragSource
                public getComponent(): java.awt.Component
                public setComponent(arg0: java.awt.Component): void
                public getSourceActions(): int
                public setSourceActions(arg0: int): void
                public getTriggerEvent(): java.awt.event.InputEvent
                public resetRecognizer(): void
                public addDragGestureListener(arg0: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): void
                public removeDragGestureListener(arg0: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): void
                protected fireDragGestureRecognized(arg0: int, arg1: java.awt.Point): void
                protected appendEvent(arg0: java.awt.event.InputEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}