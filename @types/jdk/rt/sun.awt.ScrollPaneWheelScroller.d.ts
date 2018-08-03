declare namespace sun {
    namespace awt {
        abstract class ScrollPaneWheelScroller {
            public static handleWheelScrolling(arg0: java.awt.ScrollPane, arg1: java.awt.event.MouseWheelEvent): void
            public static getAdjustableToScroll(arg0: java.awt.ScrollPane): java.awt.Adjustable
            public static getIncrementFromAdjustable(arg0: java.awt.Adjustable, arg1: java.awt.event.MouseWheelEvent): int
            public static scrollAdjustable(arg0: java.awt.Adjustable, arg1: int): void
            public static class: java.lang.Class<any>
        }
    }
}