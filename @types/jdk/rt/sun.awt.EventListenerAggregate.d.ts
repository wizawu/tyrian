declare namespace sun {
    namespace awt {
class EventListenerAggregate {
    public constructor(arg0: java.lang.Class<java.util.EventListener>)
    public add(arg0: java.util.EventListener): void
    public remove(arg0: java.util.EventListener): boolean
    public getListenersInternal(): java.util.EventListener[]
    public getListenersCopy(): java.util.EventListener[]
    public size(): int
    public isEmpty(): boolean
    public static class: java.lang.Class<any>
}

    }
}