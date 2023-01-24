declare namespace java {
  namespace io {
    interface ObjectStreamConstants {
      readonly STREAM_MAGIC: short
      readonly STREAM_VERSION: short
      readonly TC_BASE: byte
      readonly TC_NULL: byte
      readonly TC_REFERENCE: byte
      readonly TC_CLASSDESC: byte
      readonly TC_OBJECT: byte
      readonly TC_STRING: byte
      readonly TC_ARRAY: byte
      readonly TC_CLASS: byte
      readonly TC_BLOCKDATA: byte
      readonly TC_ENDBLOCKDATA: byte
      readonly TC_RESET: byte
      readonly TC_BLOCKDATALONG: byte
      readonly TC_EXCEPTION: byte
      readonly TC_LONGSTRING: byte
      readonly TC_PROXYCLASSDESC: byte
      readonly TC_ENUM: byte
      readonly TC_MAX: byte
      readonly baseWireHandle: int
      readonly SC_WRITE_METHOD: byte
      readonly SC_BLOCK_DATA: byte
      readonly SC_SERIALIZABLE: byte
      readonly SC_EXTERNALIZABLE: byte
      readonly SC_ENUM: byte
      readonly SUBSTITUTION_PERMISSION: java.io.SerializablePermission
      readonly SUBCLASS_IMPLEMENTATION_PERMISSION: java.io.SerializablePermission
      readonly SERIAL_FILTER_PERMISSION: java.io.SerializablePermission
      readonly PROTOCOL_VERSION_1: int
      readonly PROTOCOL_VERSION_2: int
    }
  }
}
