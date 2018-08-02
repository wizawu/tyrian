declare namespace javax {
    namespace imageio {
        namespace spi {
            class PartiallyOrderedSet extends java.util.AbstractSet {
                public constructor()
                public size(): int
                public contains(arg0: java.lang.Object): boolean
                public iterator(): java.util.Iterator
                public add(arg0: java.lang.Object): boolean
                public remove(arg0: java.lang.Object): boolean
                public clear(): void
                public setOrdering(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public unsetOrdering(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public hasOrdering(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}