declare namespace javax {
  namespace smartcardio {

    class TerminalFactory {
      public static getDefaultType(): java.lang.String
      public static getDefault(): javax.smartcardio.TerminalFactory
      public static getInstance(arg0: java.lang.String, arg1: java.lang.Object): javax.smartcardio.TerminalFactory
      public static getInstance(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.String): javax.smartcardio.TerminalFactory
      public static getInstance(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.security.Provider): javax.smartcardio.TerminalFactory
      public getProvider(): java.security.Provider
      public getType(): java.lang.String
      public terminals(): javax.smartcardio.CardTerminals
      public toString(): java.lang.String
    }

  }
}
