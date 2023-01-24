declare namespace java {
  namespace time {
    namespace format {
      class SignStyle extends java.lang.Enum<java.time.format.SignStyle> {
        public static readonly NORMAL: java.time.format.SignStyle
        public static readonly ALWAYS: java.time.format.SignStyle
        public static readonly NEVER: java.time.format.SignStyle
        public static readonly NOT_NEGATIVE: java.time.format.SignStyle
        public static readonly EXCEEDS_PAD: java.time.format.SignStyle
        public static values(): java.time.format.SignStyle[]
        public static valueOf(arg0: java.lang.String | string): java.time.format.SignStyle
        parse(
          arg0: boolean | java.lang.Boolean,
          arg1: boolean | java.lang.Boolean,
          arg2: boolean | java.lang.Boolean
        ): boolean
      }
    }
  }
}
