declare namespace java {
  namespace util {

    class Base64 {

      public static getEncoder(): java.util.Base64$Encoder
      public static getUrlEncoder(): java.util.Base64$Encoder
      public static getMimeEncoder(): java.util.Base64$Encoder
      public static getMimeEncoder(arg0: int, arg1: byte[]): java.util.Base64$Encoder
      public static getDecoder(): java.util.Base64$Decoder
      public static getUrlDecoder(): java.util.Base64$Decoder
      public static getMimeDecoder(): java.util.Base64$Decoder
    }

  }
}
