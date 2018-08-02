declare namespace java {
    namespace awt {
        namespace event {
            class ItemEvent extends java.awt.AWTEvent {
                public static ITEM_FIRST: int
                public static ITEM_LAST: int
                public static ITEM_STATE_CHANGED: int
                public static SELECTED: int
                public static DESELECTED: int
                public constructor(arg0: java.awt.ItemSelectable, arg1: int, arg2: java.lang.Object, arg3: int)
                public getItemSelectable(): java.awt.ItemSelectable
                public getItem(): java.lang.Object
                public getStateChange(): int
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}