declare namespace com {
    namespace sun {
        namespace beans {
            namespace util {
                abstract class Cache<K, V> {
                    public abstract create(arg0: K): V
                    public constructor(arg0: com.sun.beans.util.Cache$Kind, arg1: com.sun.beans.util.Cache$Kind)
                    public constructor(arg0: com.sun.beans.util.Cache$Kind, arg1: com.sun.beans.util.Cache$Kind, arg2: boolean)
                    public get(arg0: K): V
                    public remove(arg0: K): void
                    public clear(): void
                    public static class: java.lang.Class<any>
                }
                interface Cache$$Lambda<K, V> {
                    (arg0: K): V
                }
            }
        }
    }
}