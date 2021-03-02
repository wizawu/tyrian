declare namespace java {
  namespace awt {

    class ScrollPane extends java.awt.Container implements javax.accessibility.Accessible {
      public static readonly SCROLLBARS_AS_NEEDED: int
      public static readonly SCROLLBARS_ALWAYS: int
      public static readonly SCROLLBARS_NEVER: int
      public constructor()
      public constructor(arg0: int)
      constructComponentName(): java.lang.String
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
      public getScrollbarDisplayPolicy(): int
      public getViewportSize(): java.awt.Dimension
      public getHScrollbarHeight(): int
      public getVScrollbarWidth(): int
      public getVAdjustable(): java.awt.Adjustable
      public getHAdjustable(): java.awt.Adjustable
      public setScrollPosition(arg0: int, arg1: int): void
      public setScrollPosition(arg0: java.awt.Point): void
      public getScrollPosition(): java.awt.Point
      public setLayout(arg0: java.awt.LayoutManager): void
      public doLayout(): void
      calculateChildSize(): java.awt.Dimension
      public layout(): void
      public printComponents(arg0: java.awt.Graphics): void
      public addNotify(): void
      public paramString(): java.lang.String
      autoProcessMouseWheel(arg0: java.awt.event.MouseWheelEvent): void
      protected processMouseWheelEvent(arg0: java.awt.event.MouseWheelEvent): void
      protected eventTypeEnabled(arg0: int): boolean
      public setWheelScrollingEnabled(arg0: boolean): void
      public isWheelScrollingEnabled(): boolean
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
