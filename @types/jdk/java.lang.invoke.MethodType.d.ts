declare namespace java {
  namespace lang {
    namespace invoke {

      class MethodType implements java.io.Serializable {
        static readonly MAX_JVM_ARITY: int
        static readonly MAX_MH_ARITY: int
        static readonly MAX_MH_INVOKER_ARITY: int
        static readonly internTable: java.lang.invoke.MethodType$ConcurrentWeakInternSet<java.lang.invoke.MethodType>
        static readonly NO_PTYPES: java.lang.Class<unknown>[]
        static readonly $assertionsDisabled: boolean
        form(): java.lang.invoke.MethodTypeForm
        rtype(): java.lang.Class<unknown>
        ptypes(): java.lang.Class<unknown>[]
        setForm(arg0: java.lang.invoke.MethodTypeForm): void
        static checkSlotCount(arg0: number | java.lang.Integer): void
        public static methodType(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>[]): java.lang.invoke.MethodType
        public static methodType(arg0: java.lang.Class<unknown>, arg1: java.util.List<java.lang.Class<unknown>>): java.lang.invoke.MethodType
        public static methodType(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodType
        public static methodType(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodType
        public static methodType(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): java.lang.invoke.MethodType
        public static methodType(arg0: java.lang.Class<unknown>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodType
        static makeImpl(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>[], arg2: boolean | java.lang.Boolean): java.lang.invoke.MethodType
        public static genericMethodType(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): java.lang.invoke.MethodType
        public static genericMethodType(arg0: number | java.lang.Integer): java.lang.invoke.MethodType
        public changeParameterType(arg0: number | java.lang.Integer, arg1: java.lang.Class<unknown>): java.lang.invoke.MethodType
        public insertParameterTypes(arg0: number | java.lang.Integer, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodType
        public appendParameterTypes(...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodType
        public insertParameterTypes(arg0: number | java.lang.Integer, arg1: java.util.List<java.lang.Class<unknown>>): java.lang.invoke.MethodType
        public appendParameterTypes(arg0: java.util.List<java.lang.Class<unknown>>): java.lang.invoke.MethodType
        replaceParameterTypes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodType
        asSpreaderType(arg0: java.lang.Class<unknown>, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.invoke.MethodType
        leadingReferenceParameter(): java.lang.Class<unknown>
        asCollectorType(arg0: java.lang.Class<unknown>, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.invoke.MethodType
        public dropParameterTypes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.invoke.MethodType
        public changeReturnType(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodType
        public hasPrimitives(): boolean
        public hasWrappers(): boolean
        public erase(): java.lang.invoke.MethodType
        basicType(): java.lang.invoke.MethodType
        invokerType(): java.lang.invoke.MethodType
        public generic(): java.lang.invoke.MethodType
        isGeneric(): boolean
        public wrap(): java.lang.invoke.MethodType
        public unwrap(): java.lang.invoke.MethodType
        public parameterType(arg0: number | java.lang.Integer): java.lang.Class<unknown>
        public parameterCount(): number
        public returnType(): java.lang.Class<unknown>
        public parameterList(): java.util.List<java.lang.Class<unknown>>
        public lastParameterType(): java.lang.Class<unknown>
        public parameterArray(): java.lang.Class<unknown>[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        effectivelyIdenticalParameters(arg0: number | java.lang.Integer, arg1: java.util.List<java.lang.Class<unknown>>): boolean
        isViewableAs(arg0: java.lang.invoke.MethodType, arg1: boolean | java.lang.Boolean): boolean
        isConvertibleTo(arg0: java.lang.invoke.MethodType): boolean
        explicitCastEquivalentToAsType(arg0: java.lang.invoke.MethodType): boolean
        static canConvert(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
        parameterSlotCount(): number
        invokers(): java.lang.invoke.Invokers
        parameterSlotDepth(arg0: number | java.lang.Integer): number
        returnSlotCount(): number
        public static fromMethodDescriptorString(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.invoke.MethodType
        static fromDescriptor(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.invoke.MethodType
        public toMethodDescriptorString(): java.lang.String
        static toFieldDescriptorString(arg0: java.lang.Class<unknown>): java.lang.String
      }

    }
  }
}
