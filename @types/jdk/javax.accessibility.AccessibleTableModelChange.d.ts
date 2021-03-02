declare namespace javax {
  namespace accessibility {

    interface AccessibleTableModelChange {
      public static readonly INSERT: int
      public static readonly UPDATE: int
      public static readonly DELETE: int
      getType(): int
      getFirstRow(): int
      getLastRow(): int
      getFirstColumn(): int
      getLastColumn(): int
    }

  }
}
