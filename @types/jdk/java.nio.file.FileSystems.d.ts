declare namespace java {
  namespace nio {
    namespace file {

      class FileSystems {
        public static getDefault(): java.nio.file.FileSystem
        public static getFileSystem(arg0: java.net.URI): java.nio.file.FileSystem
        public static newFileSystem(arg0: java.net.URI, arg1: java.util.Map<java.lang.String,unknown>): java.nio.file.FileSystem
        public static newFileSystem(arg0: java.net.URI, arg1: java.util.Map<java.lang.String,unknown>, arg2: java.lang.ClassLoader): java.nio.file.FileSystem
        public static newFileSystem(arg0: java.nio.file.Path, arg1: java.lang.ClassLoader): java.nio.file.FileSystem
      }

    }
  }
}
