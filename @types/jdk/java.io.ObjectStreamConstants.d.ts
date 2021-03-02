declare namespace java {
  namespace io {

    interface ObjectStreamConstants {
      public static readonly STREAM_MAGIC: short
      public static readonly STREAM_VERSION: short
      public static readonly TC_BASE: byte
      public static readonly TC_NULL: byte
      public static readonly TC_REFERENCE: byte
      public static readonly TC_CLASSDESC: byte
      public static readonly TC_OBJECT: byte
      public static readonly TC_STRING: byte
      public static readonly TC_ARRAY: byte
      public static readonly TC_CLASS: byte
      public static readonly TC_BLOCKDATA: byte
      public static readonly TC_ENDBLOCKDATA: byte
      public static readonly TC_RESET: byte
      public static readonly TC_BLOCKDATALONG: byte
      public static readonly TC_EXCEPTION: byte
      public static readonly TC_LONGSTRING: byte
      public static readonly TC_PROXYCLASSDESC: byte
      public static readonly TC_ENUM: byte
      public static readonly TC_MAX: byte
      public static readonly baseWireHandle: int
      public static readonly SC_WRITE_METHOD: byte
      public static readonly SC_BLOCK_DATA: byte
      public static readonly SC_SERIALIZABLE: byte
      public static readonly SC_EXTERNALIZABLE: byte
      public static readonly SC_ENUM: byte
      public static readonly SUBSTITUTION_PERMISSION: java.io.SerializablePermission
      public static readonly SUBCLASS_IMPLEMENTATION_PERMISSION: java.io.SerializablePermission
      public static readonly SERIAL_FILTER_PERMISSION: java.io.SerializablePermission
      public static readonly PROTOCOL_VERSION_1: int
      public static readonly PROTOCOL_VERSION_2: int
    }

  }
}
