declare namespace javax {
  namespace accessibility {

    interface AccessibleTableModelChange {
      public static readonly INSERT: int
      public static readonly UPDATE: int
      public static readonly DELETE: int
      getType(): number
      getFirstRow(): number
      getLastRow(): number
      getFirstColumn(): number
      getLastColumn(): number
    }

  }
}
