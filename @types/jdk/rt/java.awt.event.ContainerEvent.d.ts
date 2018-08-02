declare namespace java {
    namespace awt {
        namespace event {
            class ContainerEvent extends java.awt.event.ComponentEvent {
                public static CONTAINER_FIRST: int
                public static CONTAINER_LAST: int
                public static COMPONENT_ADDED: int
                public static COMPONENT_REMOVED: int
                public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Component)
                public getContainer(): java.awt.Container
                public getChild(): java.awt.Component
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}