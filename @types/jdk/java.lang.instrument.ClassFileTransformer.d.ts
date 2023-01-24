declare namespace java {
  namespace lang {
    namespace instrument {
      interface ClassFileTransformer {
        transform(
          arg0: java.lang.ClassLoader,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>,
          arg3: java.security.ProtectionDomain,
          arg4: number[] | java.lang.Byte[]
        ): number[]
        transform(
          arg0: java.lang.Module,
          arg1: java.lang.ClassLoader,
          arg2: java.lang.String | string,
          arg3: java.lang.Class<unknown>,
          arg4: java.security.ProtectionDomain,
          arg5: number[] | java.lang.Byte[]
        ): number[]
      }
    }
  }
}
