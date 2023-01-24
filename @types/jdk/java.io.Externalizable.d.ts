declare namespace java {
  namespace io {
    interface Externalizable extends java.io.Serializable {
      writeExternal(arg0: java.io.ObjectOutput): void
      readExternal(arg0: java.io.ObjectInput): void
    }
  }
}
