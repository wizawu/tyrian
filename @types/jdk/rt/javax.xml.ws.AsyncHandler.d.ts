declare namespace javax {
    namespace xml {
        namespace ws {
            interface AsyncHandler<T> {
                handleResponse(arg0: javax.xml.ws.Response<T> | javax.xml.ws.Response$$Lambda<T>): void
            }
            interface AsyncHandler$$Lambda<T> {
                (arg0: javax.xml.ws.Response<T> | javax.xml.ws.Response$$Lambda<T>): void
            }
        }
    }
}