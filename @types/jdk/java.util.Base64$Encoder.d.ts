declare namespace java {
  namespace util {
    class Base64$Encoder {
      static readonly RFC4648: java.util.Base64$Encoder
      static readonly RFC4648_URLSAFE: java.util.Base64$Encoder
      static readonly RFC2045: java.util.Base64$Encoder
      public encode(arg0: number[] | java.lang.Byte[]): number[]
      public encode(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): number
      public encodeToString(arg0: number[] | java.lang.Byte[]): java.lang.String
      public encode(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
      public wrap(arg0: java.io.OutputStream): java.io.OutputStream
      public withoutPadding(): java.util.Base64$Encoder
    }
  }
}
