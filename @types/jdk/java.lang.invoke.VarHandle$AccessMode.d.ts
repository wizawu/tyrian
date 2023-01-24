declare namespace java {
  namespace lang {
    namespace invoke {
      class VarHandle$AccessMode extends java.lang.Enum<java.lang.invoke.VarHandle$AccessMode> {
        public static readonly GET: java.lang.invoke.VarHandle$AccessMode
        public static readonly SET: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_VOLATILE: java.lang.invoke.VarHandle$AccessMode
        public static readonly SET_VOLATILE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly SET_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_OPAQUE: java.lang.invoke.VarHandle$AccessMode
        public static readonly SET_OPAQUE: java.lang.invoke.VarHandle$AccessMode
        public static readonly COMPARE_AND_SET: java.lang.invoke.VarHandle$AccessMode
        public static readonly COMPARE_AND_EXCHANGE: java.lang.invoke.VarHandle$AccessMode
        public static readonly COMPARE_AND_EXCHANGE_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly COMPARE_AND_EXCHANGE_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly WEAK_COMPARE_AND_SET_PLAIN: java.lang.invoke.VarHandle$AccessMode
        public static readonly WEAK_COMPARE_AND_SET: java.lang.invoke.VarHandle$AccessMode
        public static readonly WEAK_COMPARE_AND_SET_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly WEAK_COMPARE_AND_SET_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_SET: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_SET_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_SET_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_ADD: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_ADD_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_ADD_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_OR: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_OR_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_OR_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_AND: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_AND_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_AND_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_XOR: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_XOR_RELEASE: java.lang.invoke.VarHandle$AccessMode
        public static readonly GET_AND_BITWISE_XOR_ACQUIRE: java.lang.invoke.VarHandle$AccessMode
        static readonly methodNameToAccessMode: java.util.Map<java.lang.String, java.lang.invoke.VarHandle$AccessMode>
        readonly methodName: java.lang.String
        readonly at: java.lang.invoke.VarHandle$AccessType
        public static values(): java.lang.invoke.VarHandle$AccessMode[]
        public static valueOf(arg0: java.lang.String | string): java.lang.invoke.VarHandle$AccessMode
        public methodName(): java.lang.String
        public static valueFromMethodName(arg0: java.lang.String | string): java.lang.invoke.VarHandle$AccessMode
        static getMemberName(
          arg0: number | java.lang.Integer,
          arg1: java.lang.invoke.VarForm
        ): java.lang.invoke.MemberName
      }
    }
  }
}
