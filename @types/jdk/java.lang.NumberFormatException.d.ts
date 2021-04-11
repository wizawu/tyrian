declare namespace java {
  namespace lang {

    class NumberFormatException extends java.lang.IllegalArgumentException {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: java.lang.String | string)
      static forInputString(arg0: java.lang.String | string): java.lang.NumberFormatException
      static forCharSequence(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.lang.NumberFormatException
    }

  }
}
