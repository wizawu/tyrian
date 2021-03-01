declare namespace java {
  namespace awt {

    class MenuShortcut implements java.io.Serializable {

      key: int
      usesShift: boolean
      public constructor(arg0: int)
      public constructor(arg0: int, arg1: boolean)
      public getKey(): int
      public usesShiftModifier(): boolean
      public equals(arg0: java.awt.MenuShortcut): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      protected paramString(): java.lang.String
    }

  }
}
