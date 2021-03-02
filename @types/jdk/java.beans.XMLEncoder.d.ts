declare namespace java {
  namespace beans {

    class XMLEncoder extends java.beans.Encoder implements java.lang.AutoCloseable {
      public constructor(arg0: java.io.OutputStream)
      public constructor(arg0: java.io.OutputStream, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer)
      public setOwner(arg0: java.lang.Object | any): void
      public getOwner(): java.lang.Object
      public writeObject(arg0: java.lang.Object | any): void
      public writeStatement(arg0: java.beans.Statement): void
      public writeExpression(arg0: java.beans.Expression): void
      public flush(): void
      clear(): void
      getMissedStatement(): java.beans.Statement
      public close(): void
      static primitiveTypeFor(arg0: java.lang.Class): java.lang.Class
    }

  }
}
