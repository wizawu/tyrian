declare namespace java {
  namespace awt {
    class AWTKeyStroke implements java.io.Serializable {
      static readonly serialVersionUID: long
      static readonly $assertionsDisabled: boolean
      protected constructor()
      protected constructor(
        arg0: string | java.lang.Character,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: boolean | java.lang.Boolean
      )
      protected static registerSubclass(arg0: java.lang.Class<unknown>): void
      public static getAWTKeyStroke(arg0: string | java.lang.Character): java.awt.AWTKeyStroke
      public static getAWTKeyStroke(
        arg0: string | java.lang.Character,
        arg1: number | java.lang.Integer
      ): java.awt.AWTKeyStroke
      public static getAWTKeyStroke(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: boolean | java.lang.Boolean
      ): java.awt.AWTKeyStroke
      public static getAWTKeyStroke(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.awt.AWTKeyStroke
      public static getAWTKeyStrokeForEvent(arg0: java.awt.event.KeyEvent): java.awt.AWTKeyStroke
      public static getAWTKeyStroke(arg0: java.lang.String | string): java.awt.AWTKeyStroke
      public getKeyChar(): string
      public getKeyCode(): number
      public getModifiers(): number
      public isOnKeyRelease(): boolean
      public getKeyEventType(): number
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
      static getModifiersText(arg0: number | java.lang.Integer): java.lang.String
      static getVKText(arg0: number | java.lang.Integer): java.lang.String
      protected readResolve(): java.lang.Object
    }
  }
}
