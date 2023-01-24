declare namespace java {
  namespace security {
    class SecureClassLoader extends java.lang.ClassLoader {
      protected constructor(arg0: java.lang.ClassLoader)
      protected constructor()
      protected constructor(arg0: java.lang.String | string, arg1: java.lang.ClassLoader)
      protected defineClass(
        arg0: java.lang.String | string,
        arg1: number[] | java.lang.Byte[],
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: java.security.CodeSource
      ): java.lang.Class<unknown>
      protected defineClass(
        arg0: java.lang.String | string,
        arg1: java.nio.ByteBuffer,
        arg2: java.security.CodeSource
      ): java.lang.Class<unknown>
      protected getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
    }
  }
}
