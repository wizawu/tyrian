declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
interface Message {
    defaultBufferSize: int
    GIOPBigEndian: int
    GIOPLittleEndian: int
    GIOPBigMagic: int
    GIOPLittleMagic: int
    GIOPMessageHeaderLength: int
    LITTLE_ENDIAN_BIT: byte
    MORE_FRAGMENTS_BIT: byte
    FLAG_NO_FRAG_BIG_ENDIAN: byte
    TRAILING_TWO_BIT_BYTE_MASK: byte
    THREAD_POOL_TO_USE_MASK: byte
    CDR_ENC_VERSION: byte
    JAVA_ENC_VERSION: byte
    GIOPRequest: byte
    GIOPReply: byte
    GIOPCancelRequest: byte
    GIOPLocateRequest: byte
    GIOPLocateReply: byte
    GIOPCloseConnection: byte
    GIOPMessageError: byte
    GIOPFragment: byte
    getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    getEncodingVersion(): byte
    isLittleEndian(): boolean
    moreFragmentsToFollow(): boolean
    getType(): int
    getSize(): int
    getByteBuffer(): java.nio.ByteBuffer
    getThreadPoolToUse(): int
    read(arg0: org.omg.CORBA.portable.InputStream): void
    write(arg0: org.omg.CORBA.portable.OutputStream): void
    setSize(arg0: java.nio.ByteBuffer, arg1: int): void
    createFragmentMessage(): com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage
    callback(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.MessageHandler): void
    setByteBuffer(arg0: java.nio.ByteBuffer): void
    setEncodingVersion(arg0: byte): void
}

                        }
                    }
                }
            }
        }
    }
}