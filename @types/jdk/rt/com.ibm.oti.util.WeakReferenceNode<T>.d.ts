declare namespace com {
    namespace ibm {
        namespace oti {
            namespace util {
class WeakReferenceNode<T> extends java.lang.ref.WeakReference<T> {
    public constructor(arg0: T, arg1: java.lang.ref.ReferenceQueue<T>)
    public addBefore(arg0: com.ibm.oti.util.WeakReferenceNode<T>): void
    public remove(): void
    public previous(): com.ibm.oti.util.WeakReferenceNode<T>
    public next(): com.ibm.oti.util.WeakReferenceNode<T>
    public static class: java.lang.Class<any>
}

            }
        }
    }
}