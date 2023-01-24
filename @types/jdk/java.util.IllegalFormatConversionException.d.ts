declare namespace java {
  namespace util {
    class IllegalFormatConversionException extends java.util.IllegalFormatException {
      public constructor(arg0: string | java.lang.Character, arg1: java.lang.Class<unknown>)
      public getConversion(): string
      public getArgumentClass(): java.lang.Class<unknown>
      public getMessage(): java.lang.String
    }
  }
}
