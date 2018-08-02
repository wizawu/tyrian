declare namespace java {
    namespace awt {
        namespace event {
            class ComponentEvent extends java.awt.AWTEvent {
                public static COMPONENT_FIRST: int
                public static COMPONENT_LAST: int
                public static COMPONENT_MOVED: int
                public static COMPONENT_RESIZED: int
                public static COMPONENT_SHOWN: int
                public static COMPONENT_HIDDEN: int
                public constructor(arg0: java.awt.Component, arg1: int)
                public getComponent(): java.awt.Component
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}