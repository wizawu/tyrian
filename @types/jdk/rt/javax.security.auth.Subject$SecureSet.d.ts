declare namespace javax {
    namespace security {
        namespace auth {
            class Subject$SecureSet<E> extends java.util.AbstractSet<E> implements java.io.Serializable {
                public size(): int
                public iterator(): java.util.Iterator<E>
                public add(arg0: E): boolean
                public remove(arg0: java.lang.Object): boolean
                public contains(arg0: java.lang.Object): boolean
                public removeAll(arg0: java.util.Collection<any>): boolean
                public retainAll(arg0: java.util.Collection<any>): boolean
                public clear(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}