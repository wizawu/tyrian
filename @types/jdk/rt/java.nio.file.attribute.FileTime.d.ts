declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                class FileTime implements java.lang.Comparable<java.nio.file.attribute.FileTime> {
                    public static from(arg0: long, arg1: java.util.concurrent.TimeUnit): java.nio.file.attribute.FileTime
                    public static fromMillis(arg0: long): java.nio.file.attribute.FileTime
                    public static from(arg0: java.time.Instant): java.nio.file.attribute.FileTime
                    public to(arg0: java.util.concurrent.TimeUnit): long
                    public toMillis(): long
                    public toInstant(): java.time.Instant
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public compareTo(arg0: java.nio.file.attribute.FileTime): int
                    public toString(): string
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}