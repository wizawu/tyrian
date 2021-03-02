declare namespace java {
  namespace awt {
    namespace dnd {

      class DropTarget implements java.awt.dnd.DropTargetListener, java.io.Serializable {
        actions: int
        active: boolean
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.dnd.DropTargetListener, arg3: boolean, arg4: java.awt.datatransfer.FlavorMap)
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.dnd.DropTargetListener, arg3: boolean)
        public constructor()
        public constructor(arg0: java.awt.Component, arg1: java.awt.dnd.DropTargetListener)
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.dnd.DropTargetListener)
        public setComponent(arg0: java.awt.Component): void
        public getComponent(): java.awt.Component
        public setDefaultActions(arg0: int): void
        doSetDefaultActions(arg0: int): void
        public getDefaultActions(): int
        public setActive(arg0: boolean): void
        public isActive(): boolean
        public addDropTargetListener(arg0: java.awt.dnd.DropTargetListener): void
        public removeDropTargetListener(arg0: java.awt.dnd.DropTargetListener): void
        public dragEnter(arg0: java.awt.dnd.DropTargetDragEvent): void
        public dragOver(arg0: java.awt.dnd.DropTargetDragEvent): void
        public dropActionChanged(arg0: java.awt.dnd.DropTargetDragEvent): void
        public dragExit(arg0: java.awt.dnd.DropTargetEvent): void
        public drop(arg0: java.awt.dnd.DropTargetDropEvent): void
        public getFlavorMap(): java.awt.datatransfer.FlavorMap
        public setFlavorMap(arg0: java.awt.datatransfer.FlavorMap): void
        public addNotify(): void
        public removeNotify(): void
        public getDropTargetContext(): java.awt.dnd.DropTargetContext
        protected createDropTargetContext(): java.awt.dnd.DropTargetContext
        protected createDropTargetAutoScroller(arg0: java.awt.Component, arg1: java.awt.Point): java.awt.dnd.DropTarget$DropTargetAutoScroller
        protected initializeAutoscrolling(arg0: java.awt.Point): void
        protected updateAutoscroll(arg0: java.awt.Point): void
        protected clearAutoscroll(): void
      }

    }
  }
}
