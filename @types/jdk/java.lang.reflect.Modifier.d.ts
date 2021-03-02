declare namespace java {
  namespace lang {
    namespace reflect {

      class Modifier {
        public static readonly PUBLIC: int
        public static readonly PRIVATE: int
        public static readonly PROTECTED: int
        public static readonly STATIC: int
        public static readonly FINAL: int
        public static readonly SYNCHRONIZED: int
        public static readonly VOLATILE: int
        public static readonly TRANSIENT: int
        public static readonly NATIVE: int
        public static readonly INTERFACE: int
        public static readonly ABSTRACT: int
        public static readonly STRICT: int
        static readonly BRIDGE: int
        static readonly VARARGS: int
        static readonly SYNTHETIC: int
        static readonly ANNOTATION: int
        static readonly ENUM: int
        static readonly MANDATED: int
        static readonly ACCESS_MODIFIERS: int
        public constructor()
        public static isPublic(arg0: number | java.lang.Integer): boolean
        public static isPrivate(arg0: number | java.lang.Integer): boolean
        public static isProtected(arg0: number | java.lang.Integer): boolean
        public static isStatic(arg0: number | java.lang.Integer): boolean
        public static isFinal(arg0: number | java.lang.Integer): boolean
        public static isSynchronized(arg0: number | java.lang.Integer): boolean
        public static isVolatile(arg0: number | java.lang.Integer): boolean
        public static isTransient(arg0: number | java.lang.Integer): boolean
        public static isNative(arg0: number | java.lang.Integer): boolean
        public static isInterface(arg0: number | java.lang.Integer): boolean
        public static isAbstract(arg0: number | java.lang.Integer): boolean
        public static isStrict(arg0: number | java.lang.Integer): boolean
        public static toString(arg0: number | java.lang.Integer): java.lang.String
        static isSynthetic(arg0: number | java.lang.Integer): boolean
        static isMandated(arg0: number | java.lang.Integer): boolean
        public static classModifiers(): number
        public static interfaceModifiers(): number
        public static constructorModifiers(): number
        public static methodModifiers(): number
        public static fieldModifiers(): number
        public static parameterModifiers(): number
      }

    }
  }
}
