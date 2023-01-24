declare namespace java {
  namespace io {
    interface ObjectInputFilter$FilterInfo {
      serialClass(): java.lang.Class<unknown>
      arrayLength(): number
      depth(): number
      references(): number
      streamBytes(): number
    }
  }
}
