declare namespace sun {
    namespace util {
        namespace locale {
            abstract class LocaleObjectCache<K, V> {
                public constructor()
                public constructor(arg0: int, arg1: float, arg2: int)
                public get(arg0: K): V
                protected put(arg0: K, arg1: V): V
                protected createObject(arg0: K): V
                protected normalizeKey(arg0: K): K
                public static class: java.lang.Class<any>
            }
        }
    }
}