declare namespace javax {
  namespace print {

    class DocFlavor implements java.io.Serializable, java.lang.Cloneable {

      public static readonly hostEncoding: java.lang.String
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public getMimeType(): java.lang.String
      public getMediaType(): java.lang.String
      public getMediaSubtype(): java.lang.String
      public getParameter(arg0: java.lang.String): java.lang.String
      public getRepresentationClassName(): java.lang.String
      public toString(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
    }

  }
}
