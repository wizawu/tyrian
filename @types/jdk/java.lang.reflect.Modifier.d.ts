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
        public static isPublic(arg0: int): boolean
        public static isPrivate(arg0: int): boolean
        public static isProtected(arg0: int): boolean
        public static isStatic(arg0: int): boolean
        public static isFinal(arg0: int): boolean
        public static isSynchronized(arg0: int): boolean
        public static isVolatile(arg0: int): boolean
        public static isTransient(arg0: int): boolean
        public static isNative(arg0: int): boolean
        public static isInterface(arg0: int): boolean
        public static isAbstract(arg0: int): boolean
        public static isStrict(arg0: int): boolean
        public static toString(arg0: int): java.lang.String
        static isSynthetic(arg0: int): boolean
        static isMandated(arg0: int): boolean
        public static classModifiers(): int
        public static interfaceModifiers(): int
        public static constructorModifiers(): int
        public static methodModifiers(): int
        public static fieldModifiers(): int
        public static parameterModifiers(): int
      }

    }
  }
}
