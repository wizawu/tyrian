declare namespace javax {
    namespace xml {
        namespace ws {
interface Dispatch<T> extends javax.xml.ws.BindingProvider {
    invoke(arg0: T): T
    invokeAsync(arg0: T): javax.xml.ws.Response<T>
    invokeAsync(arg0: T, arg1: javax.xml.ws.AsyncHandler<T> | javax.xml.ws.AsyncHandler$$Lambda<T>): java.util.concurrent.Future<any>
    invokeOneWay(arg0: T): void
}

        }
    }
}