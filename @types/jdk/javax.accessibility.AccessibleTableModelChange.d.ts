declare namespace javax {
  namespace accessibility {
    interface AccessibleTableModelChange {
      readonly INSERT: int
      readonly UPDATE: int
      readonly DELETE: int
      getType(): number
      getFirstRow(): number
      getLastRow(): number
      getFirstColumn(): number
      getLastColumn(): number
    }
  }
}
