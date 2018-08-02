declare namespace sun {
    namespace java2d {
        namespace pipe {
abstract class RenderQueue {
    protected buf: sun.java2d.pipe.RenderBuffer
    protected refSet: java.util.Set
    protected constructor()
    public lock(): void
    public tryLock(): boolean
    public unlock(): void
    public addReference(arg0: java.lang.Object): void
    public getBuffer(): sun.java2d.pipe.RenderBuffer
    public ensureCapacity(arg0: int): void
    public ensureCapacityAndAlignment(arg0: int, arg1: int): void
    public ensureAlignment(arg0: int): void
    public flushNow(): void
    public flushAndInvokeNow(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public flushNow(arg0: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}