declare namespace java {
  namespace io {

    class FileDescriptor {
      public static readonly in: java.io.FileDescriptor
      public static readonly out: java.io.FileDescriptor
      public static readonly err: java.io.FileDescriptor
      public constructor()
      public valid(): boolean
      public sync(): void
      set(arg0: int): void
      setHandle(arg0: long): void
      registerCleanup(arg0: jdk.internal.ref.PhantomCleanable<java.io.FileDescriptor>): void
      unregisterCleanup(): void
      close(): void
      attach(arg0: java.io.Closeable): void
      closeAll(arg0: java.io.Closeable): void
    }

  }
}
