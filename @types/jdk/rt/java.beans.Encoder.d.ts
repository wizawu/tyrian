declare namespace java {
    namespace beans {
        class Encoder {
            public constructor()
            protected writeObject(arg0: java.lang.Object): void
            public setExceptionListener(arg0: java.beans.ExceptionListener | java.beans.ExceptionListener$$Lambda): void
            public getExceptionListener(): java.beans.ExceptionListener
            public getPersistenceDelegate(arg0: java.lang.Class<any>): java.beans.PersistenceDelegate
            public setPersistenceDelegate(arg0: java.lang.Class<any>, arg1: java.beans.PersistenceDelegate): void
            public remove(arg0: java.lang.Object): java.lang.Object
            public get(arg0: java.lang.Object): java.lang.Object
            public writeStatement(arg0: java.beans.Statement): void
            public writeExpression(arg0: java.beans.Expression): void
            public static class: java.lang.Class<any>
        }
    }
}