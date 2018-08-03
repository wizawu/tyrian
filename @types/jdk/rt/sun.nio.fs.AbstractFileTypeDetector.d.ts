declare namespace sun {
    namespace nio {
        namespace fs {
            abstract class AbstractFileTypeDetector extends java.nio.file.spi.FileTypeDetector {
                protected constructor()
                public probeContentType(arg0: java.nio.file.Path): string
                protected abstract implProbeContentType(arg0: java.nio.file.Path): string
                public static class: java.lang.Class<any>
            }
            interface AbstractFileTypeDetector$$Lambda extends java.nio.file.spi.FileTypeDetector {
                (arg0: java.nio.file.Path): string
            }
        }
    }
}