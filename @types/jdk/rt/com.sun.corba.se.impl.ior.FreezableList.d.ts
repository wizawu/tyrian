declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        class FreezableList extends java.util.AbstractList {
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public constructor(arg0: java.util.List, arg1: boolean)
                            public constructor(arg0: java.util.List)
                            public makeImmutable(): void
                            public isImmutable(): boolean
                            public makeElementsImmutable(): void
                            public size(): int
                            public get(arg0: int): java.lang.Object
                            public set(arg0: int, arg1: java.lang.Object): java.lang.Object
                            public add(arg0: int, arg1: java.lang.Object): void
                            public remove(arg0: int): java.lang.Object
                            public subList(arg0: int, arg1: int): java.util.List
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}