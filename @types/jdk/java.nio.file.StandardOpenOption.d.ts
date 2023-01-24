declare namespace java {
  namespace nio {
    namespace file {
      class StandardOpenOption
        extends java.lang.Enum<java.nio.file.StandardOpenOption>
        implements java.nio.file.OpenOption
      {
        public static readonly READ: java.nio.file.StandardOpenOption
        public static readonly WRITE: java.nio.file.StandardOpenOption
        public static readonly APPEND: java.nio.file.StandardOpenOption
        public static readonly TRUNCATE_EXISTING: java.nio.file.StandardOpenOption
        public static readonly CREATE: java.nio.file.StandardOpenOption
        public static readonly CREATE_NEW: java.nio.file.StandardOpenOption
        public static readonly DELETE_ON_CLOSE: java.nio.file.StandardOpenOption
        public static readonly SPARSE: java.nio.file.StandardOpenOption
        public static readonly SYNC: java.nio.file.StandardOpenOption
        public static readonly DSYNC: java.nio.file.StandardOpenOption
        public static values(): java.nio.file.StandardOpenOption[]
        public static valueOf(arg0: java.lang.String | string): java.nio.file.StandardOpenOption
      }
    }
  }
}
