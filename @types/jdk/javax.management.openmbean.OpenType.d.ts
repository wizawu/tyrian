declare namespace javax {
  namespace management {
    namespace openmbean {
      abstract class OpenType<T> implements java.io.Serializable {
        static readonly serialVersionUID: long
        public static readonly ALLOWED_CLASSNAMES_LIST: java.util.List<java.lang.String>
        public static readonly ALLOWED_CLASSNAMES: java.lang.String[]
        protected constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        )
        constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: boolean | java.lang.Boolean
        )
        getDescriptor(): javax.management.Descriptor
        public getClassName(): java.lang.String
        safeGetClassName(): java.lang.String
        public getTypeName(): java.lang.String
        public getDescription(): java.lang.String
        public isArray(): boolean
        public abstract isValue(arg0: java.lang.Object | any): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public abstract equals(arg0: java.lang.Object | any): boolean
        public abstract hashCode(): number
        public abstract toString(): java.lang.String
      }
    }
  }
}
