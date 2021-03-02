declare namespace java {
  namespace io {

    interface ObjectInputFilter$FilterInfo {
      serialClass(): java.lang.Class<unknown>
      arrayLength(): long
      depth(): long
      references(): long
      streamBytes(): long
    }

  }
}
