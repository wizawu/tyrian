declare namespace java {
    namespace beans {
        abstract class PersistenceDelegate {
            public constructor()
            public writeObject(arg0: java.lang.Object, arg1: java.beans.Encoder): void
            protected mutatesTo(arg0: java.lang.Object, arg1: java.lang.Object): boolean
            protected abstract instantiate(arg0: java.lang.Object, arg1: java.beans.Encoder): java.beans.Expression
            protected initialize(arg0: java.lang.Class<any>, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.beans.Encoder): void
            public static class: java.lang.Class<any>
        }
        interface PersistenceDelegate$$Lambda {
            (arg0: java.lang.Object, arg1: java.beans.Encoder): java.beans.Expression
        }
    }
}