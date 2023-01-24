declare namespace java {
  namespace util {
    class Base64$Decoder {
      static readonly RFC4648: java.util.Base64$Decoder
      static readonly RFC4648_URLSAFE: java.util.Base64$Decoder
      static readonly RFC2045: java.util.Base64$Decoder
      public decode(arg0: number[] | java.lang.Byte[]): number[]
      public decode(arg0: java.lang.String | string): number[]
      public decode(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): number
      public decode(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
      public wrap(arg0: java.io.InputStream): java.io.InputStream
    }
  }
}
