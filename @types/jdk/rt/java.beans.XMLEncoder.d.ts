declare namespace java {
    namespace beans {
        class XMLEncoder extends java.beans.Encoder implements java.lang.AutoCloseable {
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: boolean, arg3: int)
            public setOwner(arg0: java.lang.Object): void
            public getOwner(): java.lang.Object
            public writeObject(arg0: java.lang.Object): void
            public writeStatement(arg0: java.beans.Statement): void
            public writeExpression(arg0: java.beans.Expression): void
            public flush(): void
            public close(): void
            public static class: java.lang.Class<any>
        }
        class XMLEncoder$$Lambda extends java.beans.Encoder implements java.lang.AutoCloseable {
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
        }
    }
}