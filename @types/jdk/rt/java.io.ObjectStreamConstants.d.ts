declare namespace java {
    namespace io {
interface ObjectStreamConstants {
    STREAM_MAGIC: short
    STREAM_VERSION: short
    TC_BASE: byte
    TC_NULL: byte
    TC_REFERENCE: byte
    TC_CLASSDESC: byte
    TC_OBJECT: byte
    TC_STRING: byte
    TC_ARRAY: byte
    TC_CLASS: byte
    TC_BLOCKDATA: byte
    TC_ENDBLOCKDATA: byte
    TC_RESET: byte
    TC_BLOCKDATALONG: byte
    TC_EXCEPTION: byte
    TC_LONGSTRING: byte
    TC_PROXYCLASSDESC: byte
    TC_ENUM: byte
    TC_MAX: byte
    baseWireHandle: int
    SC_WRITE_METHOD: byte
    SC_BLOCK_DATA: byte
    SC_SERIALIZABLE: byte
    SC_EXTERNALIZABLE: byte
    SC_ENUM: byte
    SUBSTITUTION_PERMISSION: java.io.SerializablePermission
    SUBCLASS_IMPLEMENTATION_PERMISSION: java.io.SerializablePermission
    PROTOCOL_VERSION_1: int
    PROTOCOL_VERSION_2: int
}

    }
}