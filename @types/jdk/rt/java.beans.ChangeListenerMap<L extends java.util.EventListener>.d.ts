declare namespace java {
    namespace beans {
abstract class ChangeListenerMap<L extends java.util.EventListener> {
    protected newArray(arg0: int): L[]
    protected newProxy(arg0: java.lang.String | string, arg1: L): L
    public add(arg0: java.lang.String | string, arg1: L): void
    public remove(arg0: java.lang.String | string, arg1: L): void
    public get(arg0: java.lang.String | string): L[]
    public set(arg0: java.lang.String | string, arg1: L[]): void
    public getListeners(): L[]
    public getListeners(arg0: java.lang.String | string): L[]
    public hasListeners(arg0: java.lang.String | string): boolean
    public getEntries(): java.util.Set<java.util.Map$Entry<java.lang.String, L[]>>
    public extract(arg0: L): L
    public static class: java.lang.Class<any>
}

    }
}