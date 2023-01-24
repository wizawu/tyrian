declare namespace java {
  namespace lang {
    namespace invoke {
      class MethodHandles$Lookup {
        public static readonly PUBLIC: int
        public static readonly PRIVATE: int
        public static readonly PROTECTED: int
        public static readonly PACKAGE: int
        public static readonly MODULE: int
        public static readonly UNCONDITIONAL: int
        static readonly IMPL_LOOKUP: java.lang.invoke.MethodHandles$Lookup
        static readonly PUBLIC_LOOKUP: java.lang.invoke.MethodHandles$Lookup
        static LOOKASIDE_TABLE: java.util.concurrent.ConcurrentHashMap<
          java.lang.invoke.MemberName,
          java.lang.invoke.DirectMethodHandle
        >
        static readonly $assertionsDisabled: boolean
        public lookupClass(): java.lang.Class<unknown>
        public lookupModes(): number
        constructor(arg0: java.lang.Class<unknown>)
        public in(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandles$Lookup
        public dropLookupMode(arg0: number | java.lang.Integer): java.lang.invoke.MethodHandles$Lookup
        public defineClass(arg0: number[] | java.lang.Byte[]): java.lang.Class<unknown>
        public toString(): java.lang.String
        public findStatic(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.invoke.MethodType
        ): java.lang.invoke.MethodHandle
        public findVirtual(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.invoke.MethodType
        ): java.lang.invoke.MethodHandle
        public findConstructor(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.invoke.MethodType
        ): java.lang.invoke.MethodHandle
        public findClass(arg0: java.lang.String | string): java.lang.Class<unknown>
        public accessClass(arg0: java.lang.Class<unknown>): java.lang.Class<unknown>
        public findSpecial(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.invoke.MethodType,
          arg3: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        public findGetter(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        public findSetter(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        public findVarHandle(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.VarHandle
        public findStaticGetter(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        public findStaticSetter(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        public findStaticVarHandle(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.VarHandle
        public bind(
          arg0: java.lang.Object | any,
          arg1: java.lang.String | string,
          arg2: java.lang.invoke.MethodType
        ): java.lang.invoke.MethodHandle
        public unreflect(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
        public unreflectSpecial(
          arg0: java.lang.reflect.Method,
          arg1: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        public unreflectConstructor(arg0: java.lang.reflect.Constructor<unknown>): java.lang.invoke.MethodHandle
        public unreflectGetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
        public unreflectSetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
        public unreflectVarHandle(arg0: java.lang.reflect.Field): java.lang.invoke.VarHandle
        public revealDirect(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandleInfo
        resolveOrFail(
          arg0: number | java.lang.Byte,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.String | string,
          arg3: java.lang.Class<unknown>
        ): java.lang.invoke.MemberName
        resolveOrFail(
          arg0: number | java.lang.Byte,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.String | string,
          arg3: java.lang.invoke.MethodType
        ): java.lang.invoke.MemberName
        resolveOrFail(arg0: number | java.lang.Byte, arg1: java.lang.invoke.MemberName): java.lang.invoke.MemberName
        resolveOrNull(arg0: number | java.lang.Byte, arg1: java.lang.invoke.MemberName): java.lang.invoke.MemberName
        checkSymbolicClass(arg0: java.lang.Class<unknown>): void
        isClassAccessible(arg0: java.lang.Class<unknown>): boolean
        checkMethodName(arg0: number | java.lang.Byte, arg1: java.lang.String | string): void
        findBoundCallerLookup(arg0: java.lang.invoke.MemberName): java.lang.invoke.MethodHandles$Lookup
        public hasPrivateAccess(): boolean
        checkSecurityManager(arg0: java.lang.Class<unknown>, arg1: java.lang.invoke.MemberName): void
        checkMethod(
          arg0: number | java.lang.Byte,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.invoke.MemberName
        ): void
        checkField(
          arg0: number | java.lang.Byte,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.invoke.MemberName
        ): void
        checkAccess(
          arg0: number | java.lang.Byte,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.invoke.MemberName
        ): void
        accessFailedMessage(arg0: java.lang.Class<unknown>, arg1: java.lang.invoke.MemberName): java.lang.String
        linkMethodHandleConstant(
          arg0: number | java.lang.Byte,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.String | string,
          arg3: java.lang.Object | any
        ): java.lang.invoke.MethodHandle
      }
    }
  }
}
