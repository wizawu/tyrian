declare namespace java {
    namespace lang {
        abstract class ClassValue<T> {
            protected constructor()
            protected abstract computeValue(arg0: java.lang.Class<any>): T
            public get(arg0: java.lang.Class<any>): T
            public remove(arg0: java.lang.Class<any>): void
            public static class: java.lang.Class<any>
        }
        interface ClassValue$$Lambda<T> {
            (arg0: java.lang.Class<any>): T
        }
    }
}