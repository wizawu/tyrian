declare namespace java {
  namespace rmi {
    namespace server {

      interface RemoteCall {

        getOutputStream(): java.io.ObjectOutput
        releaseOutputStream(): void
        getInputStream(): java.io.ObjectInput
        releaseInputStream(): void
        getResultStream(arg0: boolean): java.io.ObjectOutput
        executeCall(): void
        done(): void
      }

    }
  }
}
