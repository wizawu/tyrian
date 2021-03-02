declare namespace java {
  namespace nio {
    namespace file {

      abstract class FileStore {
        protected constructor()
        public abstract name(): java.lang.String
        public abstract type(): java.lang.String
        public abstract isReadOnly(): boolean
        public abstract getTotalSpace(): long
        public abstract getUsableSpace(): long
        public getBlockSize(): long
        public abstract getUnallocatedSpace(): long
        public abstract supportsFileAttributeView(arg0: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean
        public abstract supportsFileAttributeView(arg0: java.lang.String): boolean
        public abstract getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
        public abstract getAttribute(arg0: java.lang.String): java.lang.Object
      }

    }
  }
}
