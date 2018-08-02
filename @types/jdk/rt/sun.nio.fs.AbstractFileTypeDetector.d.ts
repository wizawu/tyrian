declare namespace sun {
    namespace nio {
        namespace fs {
            abstract class AbstractFileTypeDetector extends java.nio.file.spi.FileTypeDetector {
                protected constructor()
                public probeContentType(arg0: java.nio.file.Path): string
                protected implProbeContentType(arg0: java.nio.file.Path): string
                public static class: java.lang.Class<any>
            }
        }
    }
}