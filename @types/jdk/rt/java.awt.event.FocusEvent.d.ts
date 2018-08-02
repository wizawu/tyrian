declare namespace java {
    namespace awt {
        namespace event {
            class FocusEvent extends java.awt.event.ComponentEvent {
                public static FOCUS_FIRST: int
                public static FOCUS_LAST: int
                public static FOCUS_GAINED: int
                public static FOCUS_LOST: int
                public constructor(arg0: java.awt.Component, arg1: int, arg2: boolean, arg3: java.awt.Component)
                public constructor(arg0: java.awt.Component, arg1: int, arg2: boolean)
                public constructor(arg0: java.awt.Component, arg1: int)
                public isTemporary(): boolean
                public getOppositeComponent(): java.awt.Component
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}