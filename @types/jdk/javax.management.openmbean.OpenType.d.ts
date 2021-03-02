declare namespace javax {
  namespace management {
    namespace openmbean {

      abstract class OpenType<T> implements java.io.Serializable {
        static readonly serialVersionUID: long
        public static readonly ALLOWED_CLASSNAMES_LIST: java.util.List<java.lang.String>
        public static readonly ALLOWED_CLASSNAMES: java.lang.String[]
        protected constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
        constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: boolean)
        getDescriptor(): javax.management.Descriptor
        public getClassName(): java.lang.String
        safeGetClassName(): java.lang.String
        public getTypeName(): java.lang.String
        public getDescription(): java.lang.String
        public isArray(): boolean
        public abstract isValue(arg0: java.lang.Object): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public abstract equals(arg0: java.lang.Object): boolean
        public abstract hashCode(): int
        public abstract toString(): java.lang.String
      }

    }
  }
}
