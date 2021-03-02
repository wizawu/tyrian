declare namespace java {
  namespace lang {
    namespace invoke {

      class MethodHandles {
        static readonly IMPL_NAMES: java.lang.invoke.MemberName$Factory
        static readonly $assertionsDisabled: boolean
        public static lookup(): java.lang.invoke.MethodHandles$Lookup
        public static publicLookup(): java.lang.invoke.MethodHandles$Lookup
        public static privateLookupIn(arg0: java.lang.Class<unknown>, arg1: java.lang.invoke.MethodHandles$Lookup): java.lang.invoke.MethodHandles$Lookup
        public static reflectAs<T extends java.lang.reflect.Member>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandle): T
        public static arrayConstructor(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public static arrayLength(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public static arrayElementGetter(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public static arrayElementSetter(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public static arrayElementVarHandle(arg0: java.lang.Class<unknown>): java.lang.invoke.VarHandle
        public static byteArrayViewVarHandle(arg0: java.lang.Class<unknown>, arg1: java.nio.ByteOrder): java.lang.invoke.VarHandle
        public static byteBufferViewVarHandle(arg0: java.lang.Class<unknown>, arg1: java.nio.ByteOrder): java.lang.invoke.VarHandle
        public static spreadInvoker(arg0: java.lang.invoke.MethodType, arg1: number | java.lang.Integer): java.lang.invoke.MethodHandle
        public static exactInvoker(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public static invoker(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public static varHandleExactInvoker(arg0: java.lang.invoke.VarHandle$AccessMode, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public static varHandleInvoker(arg0: java.lang.invoke.VarHandle$AccessMode, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        static basicInvoker(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public static explicitCastArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public static permuteArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType, ...vargs: (number | java.lang.Integer)[]): java.lang.invoke.MethodHandle
        public static constant(arg0: java.lang.Class<unknown>, arg1: java.lang.Object | any): java.lang.invoke.MethodHandle
        public static identity(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public static zero(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public static empty(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public static insertArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, ...vargs: (java.lang.Object | any)[]): java.lang.invoke.MethodHandle
        public static dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: java.util.List<java.lang.Class<unknown>>): java.lang.invoke.MethodHandle
        public static dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodHandle
        public static dropArgumentsToMatch(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: java.util.List<java.lang.Class<unknown>>, arg3: number | java.lang.Integer): java.lang.invoke.MethodHandle
        public static filterArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, ...vargs: (java.lang.invoke.MethodHandle)[]): java.lang.invoke.MethodHandle
        static filterArgument(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static collectArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static filterReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        static foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: java.lang.invoke.MethodHandle, ...vargs: (number | java.lang.Integer)[]): java.lang.invoke.MethodHandle
        public static guardWithTest(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        static misMatchedTypes<T>(arg0: java.lang.String | string, arg1: T, arg2: T): java.lang.RuntimeException
        public static catchException(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static throwException(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
        public static loop(...vargs: (java.lang.invoke.MethodHandle[])[]): java.lang.invoke.MethodHandle
        public static whileLoop(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static doWhileLoop(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static countedLoop(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static countedLoop(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public static iteratedLoop(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        static swapArguments(arg0: java.lang.invoke.MethodHandle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.invoke.MethodHandle
        public static tryFinally(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
      }

    }
  }
}
