declare namespace javax {
    namespace xml {
        namespace ws {
            interface AsyncHandler<T> {
                handleResponse(arg0: javax.xml.ws.Response<T>): void
            }
            interface AsyncHandler$$Lambda<T> {
                (arg0: javax.xml.ws.Response<T>): void
            }
        }
    }
}