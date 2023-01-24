declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {
        class FileTime implements java.lang.Comparable<java.nio.file.attribute.FileTime> {
          public static from(
            arg0: number | java.lang.Long,
            arg1: java.util.concurrent.TimeUnit
          ): java.nio.file.attribute.FileTime
          public static fromMillis(arg0: number | java.lang.Long): java.nio.file.attribute.FileTime
          public static from(arg0: java.time.Instant): java.nio.file.attribute.FileTime
          public to(arg0: java.util.concurrent.TimeUnit): number
          public toMillis(): number
          public toInstant(): java.time.Instant
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public compareTo(arg0: java.nio.file.attribute.FileTime): number
          public toString(): java.lang.String
          public compareTo(arg0: java.lang.Object | any): number
        }
      }
    }
  }
}
