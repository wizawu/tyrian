declare namespace java {
  namespace awt {

    class MenuShortcut implements java.io.Serializable {
      key: int
      usesShift: boolean
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
      public getKey(): number
      public usesShiftModifier(): boolean
      public equals(arg0: java.awt.MenuShortcut): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      protected paramString(): java.lang.String
    }

  }
}
