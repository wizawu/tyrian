declare namespace javax {
    namespace swing {
        namespace event {
            class EventListenerList implements java.io.Serializable {
                protected listenerList: java.lang.Object[]
                public constructor()
                public getListenerList(): java.lang.Object[]
                public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
                public getListenerCount<T extends java.util.EventListener>(): int
                public getListenerCount<T extends java.util.EventListener>(arg0: java.lang.Class<any>): int
                public add<T extends java.util.EventListener>(arg0: java.lang.Class<T>, arg1: T): void
                public remove<T extends java.util.EventListener>(arg0: java.lang.Class<T>, arg1: T): void
                public toString<T extends java.util.EventListener>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}